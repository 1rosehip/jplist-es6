import BaseSortControlsGroup from '../../base/groups/sort/base-sort-controls-group';
import BaseSortControl from '../../base/controls/sort/base-sort.control';

/**
 * select sort control
 *  <select
 *        data-jplist-control="select-sort"
 *        data-group="group1"
 *        data-name="name1"
 *        data-id="deep-link-name1">  <!-- optional, used as deep link url and storage parameter -->
 *
 *        <option
 *          data-path="default"
 *          value="0"
 *          selected>Sort by</option>
 *
 *        <option
 *          value="1"
 *          data-path=".title"
 *          data-order="asc"
 *          data-type="text">Title A-Z</option>
 *
 *        <option
 *          value="2"
 *          data-path=".title"
 *          data-order="desc"
 *          data-type="text">Title Z-A</option>
 *    </select>
 *
 *    option may have the following attributes:
 *    ------------------------------------------
 *    data-path - required CSS path selector
 *    data-order - optional, asc (default) / desc
 *    data-type="text" - optional, text (default) / number / datetime
 *    data-datetime-format="{month}/{day}/{year}" - optional datetime format
 *    data-regex -  optional ignore regex
 */
class SelectSortControl extends BaseSortControlsGroup{

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

        this.options = [];
        this.selected = '';
        this.id = '';
    }

    /**
     * add control to the group
     * @param {BaseSortControl} control
     */
    addControl(control){

        const baseSortControl = super.addControl(control);

        let options = baseSortControl.element.querySelectorAll('option');

        for(let option of options){

            option.setAttribute('data-name', this.name);
            option.setAttribute('data-group', this.group);

            if(!this.options.find(opt => opt.element.value === option.value)){
                this.options.push(new BaseSortControl(option));
            }
        }

        this.selected = baseSortControl.element.value;

        //check if control contains a link and it is in the deep links parameters
        if(baseSortControl.id){

            this.id = baseSortControl.id;

            const deepLinkParam = this.deepLinkParams.find(param => param.key === baseSortControl.id);

            if(deepLinkParam){
                baseSortControl.element.value = deepLinkParam.value;
                this.selected = deepLinkParam.value;
            }
        }

        /**
         * on control change -> update the selected control
         */
        baseSortControl.element.addEventListener('change', e => {

            e.preventDefault();

            this.selected = e.target.value;

            for(let select of this.controls){
                select.element.value = this.selected;
            }

            if(window.jplist) {

                window.jplist.refresh(this.group, baseSortControl);
            }
        });
    }

    /**
     * get sort options from all controls in the group
     * @return {Array.<object>} sortOptions
     */
    getSortOptions(){

        let selected = this.options.find(opt => opt.element.value === this.selected);

        if(selected){
            return selected.getSortOptions();
        }

        return [];
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){

        let selected = this.options.find(opt => opt.element.value === this.selected);

        if(this.id){
            return this.id + '=' + selected.element.value;
        }

        return '';
    }
}

export default SelectSortControl;