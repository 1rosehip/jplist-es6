import BaseSortControlsGroup from '../../base/groups/sort/base-sort-controls-group';

const SELECTED_CLASS = 'jplist-selected';

/**
 * radio buttons sort control
 *
 * Usage:
 * <label>
 *  <input
 *      type="radio"
 *      data-jplist-control="radio-buttons-sort"
 *      data-path=".title"           <!-- required -->
 *      data-group="group1"          <!-- required -->
 *      data-order="asc"             <!-- optional, asc (default) / desc -->
 *      data-type="text"             <!-- optional, text (default) / number / datetime -->
 *      data-datetime-format="{month}/{day}/{year}" <!-- optional -->
 *      data-regex=""                <!-- optional -->
 *      data-id="deep-link-name1"    <!-- optional, used as deep link url and storage parameter -->
 *      name="sort1"
 *      checked>
 *          Sort by title asc
 *  </input>
 * </label>
 *
 * Optional deep link: #deepLinkName1=1
 * selected value - 1
 * non selected - should not appear in deep link
 */
class RadioButtonsSortControl extends BaseSortControlsGroup{

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
        this.radios = [];
    }

    /**
     * add control to the group
     * @param {BaseSortControl} control
     */
    addControl(control){

        const baseSortControl = super.addControl(control);

        //get additional control properties
        baseSortControl.selected = baseSortControl.element.checked;

        //check if control contains a link and it is in the deep links parameters
        if(baseSortControl.id){

            const deepLinkParam = this.deepLinkParams.find(param => param.key === baseSortControl.id);

            if(deepLinkParam){
                baseSortControl.selected = deepLinkParam.value === '1';
            }
        }

        this.radios.push(baseSortControl);
        this.handleRadios();

        /**
         * on control change -> update the selected control
         */
        baseSortControl.element.addEventListener('change', e => {

            e.preventDefault();

            for (let radio of this.radios) {
                radio.selected = false;
            }

            baseSortControl.selected = true;

            this.handleRadios();

            if(window.jplist) {

                window.jplist.refresh(this.group, baseSortControl);
            }
        });
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
        const radioArr = this.radios.map(radio => radio.id && radio.selected ? radio.id + '=1' : '').filter(str => str !== '');
        const unique = Array.from(new Set(radioArr));
        return unique.join('&');
    }
}

export default RadioButtonsSortControl;