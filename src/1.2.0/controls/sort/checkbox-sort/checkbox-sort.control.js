import BaseSortControlsGroup from '../../base/groups/sort/base-sort-controls-group';

const SELECTED_CLASS = 'jplist-selected';

/**
 * checkbox sort control
 *
 * Usage:
 * <label>
 *  <input
 *      type="checkbox"
 *      data-jplist-control="checkbox-sort"
 *      data-path=".title"           <!-- required -->
 *      data-group="group1"          <!-- required -->
 *      data-order="asc"             <!-- optional, asc (default) / desc -->
 *      data-type="text"             <!-- optional, text (default) / number / datetime -->
 *      data-datetime-format="{month}/{day}/{year}" <!-- optional -->
 *      data-regex=""                <!-- optional -->
 *      data-id="deep-link-name1"    <!-- optional, used as deep link url and storage parameter -->
 *      checked>
 *          Sort by title asc
 *  </input>
 * </label>
 * Optional deep link: #deepLinkName1=1
 * selected value - 1
 * non selected - 0
 */
class CheckboxSortControl extends BaseSortControlsGroup{

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

        this.checkboxes.push(baseSortControl);
        this.handleCheckboxes();

        /**
         * on control change -> update the selected control
         */
        baseSortControl.element.addEventListener('change', e => {

            e.preventDefault();

            baseSortControl.selected = !baseSortControl.selected;

            this.checkboxes.forEach(cb => {

                if(cb.isEqualTo(baseSortControl)){
                    cb.selected = baseSortControl.selected;
                }
            });

            this.handleCheckboxes();

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

            cb.element.checked = cb.selected;
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

        //any number of non selected checkboxes -> 1 default option
        if(atLeastOneNotSelectedCheckbox){
            sortOptions = sortOptions.concat([
                {
                    path: 'default'
                }
            ]);
        }

        return sortOptions;
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){
        const cbArr = this.checkboxes.map(cb => {

            if(cb.id){
                return cb.selected ? cb.id + '=1' : cb.id + '=0';
            }
            else{
                return '';
            }

        }).filter(str => str !== '');

        const unique = Array.from(new Set(cbArr));
        return unique.join('&');
    }
}

export default CheckboxSortControl;