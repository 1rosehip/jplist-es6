import BaseSortControlsGroup from '../../base/groups/sort/base-sort-controls-group';

const SELECTED_CLASS = 'jplist-selected';

/**
 * sort buttons jPList control
 *
 * Usage:
 * <button
 *  data-jplist-control="sort-buttons"
 *  data-path=".title"          <!-- required -->
 *  data-group="group1"         <!-- required -->
 *  data-order="asc"            <!-- optional, asc (default) / desc -->
 *  data-type="text"            <!-- optional, text (default) / number / datetime -->
 *  data-name="sort1"           <!-- required for radio mode -->
 *  data-selected="true"        <!-- optional, true / false (default) -->
 *  data-datetime-format="{month}/{day}/{year}" <!-- optional -->
 *  data-regex=""               <!-- optional -->
 *  data-id="deep-link-name1"   <!-- optional, used as deep link url and storage parameter -->
 *  data-mode="radio">          <!-- optional, radio (default) / checkbox -->
 *  Sort by title asc
 * </button>
 *
 * Optional deep link: #deepLinkName1=1&deepLinkName2=1
 * selected value - 1
 * non selected - should not appear in deep link or any value !== 1
 */
class ButtonsSortControl extends BaseSortControlsGroup{

    /**
     * constructor
     * @param {string} group
     * @param {string} name
     * @param {Array.<BaseControl>=} controls
     * @param {Map|null=} deepLinkParams - structure: [groupName, [{key, value}, ...]], ...
     */
    constructor(group, name, controls = [], deepLinkParams = null){
        super(group, name, controls, deepLinkParams);

        this.group = group;
        this.name = name;

        this.checkboxes = [];
        this.radios = [];
    }

    /**
     * add control to the group
     * @param {BaseSortControl} control
     */
    addControl(control){

        const baseSortControl = super.addControl(control);

        //get additional control properties
        baseSortControl.selected = baseSortControl.element.getAttribute('data-selected') === 'true';
        baseSortControl.mode = baseSortControl.element.getAttribute('data-mode') || 'radio';

        //check if control contains a link and it is in the deep links parameters
        if(baseSortControl.id){

            const deepLinkParam = this.deepLinkParams.find(param => param.key === baseSortControl.id);

            if(deepLinkParam){
                baseSortControl.selected = deepLinkParam.value === '1';
            }
        }

        if(baseSortControl.mode === 'radio'){

            this.radios.push(baseSortControl);
            this.handleRadios();
        }

        if(baseSortControl.mode === 'checkbox'){

            this.checkboxes.push(baseSortControl);
            this.handleCheckboxes();
        }

        /**
         * on control click -> change the selected control
         */
        baseSortControl.element.addEventListener('click', e => {

            e.preventDefault();

            if(baseSortControl.mode === 'checkbox'){

                baseSortControl.selected = !baseSortControl.selected;

                this.checkboxes.forEach(cb => {

                    if(cb.isEqualTo(baseSortControl)){
                        cb.selected = baseSortControl.selected;
                    }
                });

                this.handleCheckboxes();
            }

            if(baseSortControl.mode === 'radio'){

                for (let radio of this.radios) {
                    radio.selected = false;
                }

                baseSortControl.selected = true;

                this.handleRadios();
            }

            if(window.jplist) {

                window.jplist.refresh(this.group, baseSortControl);
            }
        });
    }

    /**
     * handle checkbox mode controls
     */
    handleCheckboxes(){

        for(let cb of this.checkboxes){

            if(cb.selected){
                cb.element.classList.add(SELECTED_CLASS);
            }
            else{
                cb.element.classList.remove(SELECTED_CLASS);
            }
        }
    }

    /**
     * get the latest selected radio
     * @return {BaseSortControl} latestSelectedRadio
     */
    getLastSelectedRadio(){

        let latestSelectedRadio = null;

        //find the latest selected radio
        for (let radio of this.radios) {

            if (radio.selected) {
                latestSelectedRadio = radio;
            }
        }

        return latestSelectedRadio;
    }

    /**
     * handle radio mode controls
     */
    handleRadios(){

        if(this.radios.length > 0) {

            let latestSelectedRadio = this.getLastSelectedRadio();

            //remove selected from all radios
            for (let radio of this.radios) {

                radio.selected = false;
                radio.element.classList.remove(SELECTED_CLASS);
            }

            if(latestSelectedRadio) {

                this.radios.forEach(radio => {

                    if(radio.isEqualTo(latestSelectedRadio)){
                        radio.selected = true;
                        radio.element.checked = true;
                        radio.element.classList.add(SELECTED_CLASS);
                    }
                });
            }
        }
    }

    /**
     * get sort options from all controls in the group
     * @return {Array.<object>} sortOptions
     */
    getSortOptions(){

        let sortOptions = [];

        let atLeastOneNotSelectedCheckbox = false;

        //add all selected checkboxes
        for(let checkbox of this.checkboxes){

            if(checkbox.selected) {
                sortOptions = sortOptions.concat(checkbox.getSortOptions());
            }
            else{
                atLeastOneNotSelectedCheckbox = true;
            }
        }

        if(atLeastOneNotSelectedCheckbox){
            sortOptions = sortOptions.concat([
                {
                    path: 'default'
                }
            ]);
        }

        //get options from the latest selected radio if exists
        let latestSelectedRadio = this.getLastSelectedRadio();

        if(latestSelectedRadio){
            sortOptions = sortOptions.concat(latestSelectedRadio.getSortOptions());
        }

        return sortOptions;
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){
        const cbArr = this.checkboxes.map(cb => cb.id && cb.selected ? cb.id + '=1' : '').filter(str => str !== '');
        const radioArr = this.radios.map(radio => radio.id && radio.selected ? radio.id + '=1' : '').filter(str => str !== '');
        const combined = cbArr.concat(radioArr);
        const unique = Array.from(new Set(combined));
        return unique.join('&');
    }
}

export default ButtonsSortControl;