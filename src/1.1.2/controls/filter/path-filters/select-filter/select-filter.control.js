import BasePathFilterControlsGroup from '../../../base/groups/filter/base-path-filter-controls-group';
import BasePathFilterControl from '../../../base/controls/filter/base-path-filter.control';

/**
 * select filter control
 */
class SelectFilterControl extends BasePathFilterControlsGroup{

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
     * @param {BasePathFilterControl} control
     */
    addControl(control){

        const selectFilterControl = super.addControl(control);

        let options = selectFilterControl.element.querySelectorAll('option');

        for(let option of options){

            option.setAttribute('data-name', this.name);
            option.setAttribute('data-group', this.group);

            if(!this.options.find(opt => opt.element.value === option.value)){
                this.options.push(new BasePathFilterControl(option));
            }
        }

        this.selected = selectFilterControl.element.value;

        //check if control contains a link and it is in the deep links parameters
        if(selectFilterControl.id){

            this.id = selectFilterControl.id;

            const deepLinkParam = this.deepLinkParams.find(param => param.key === selectFilterControl.id);

            if(deepLinkParam){
                selectFilterControl.element.value = deepLinkParam.value;
                this.selected = deepLinkParam.value;
            }
        }

        /**
         * on control event
         */
        selectFilterControl.element.addEventListener('change', e => {

            e.preventDefault();

            this.selected = e.target.value;

            for(let select of this.controls){
                select.element.value = this.selected;
            }

            if(window.jplist) {

                window.jplist.refresh(this.group, selectFilterControl);
            }
        });
    }

    /**
     * get path filter options from all controls in the group
     * @return {Array.<object>} sortOptions
     */
    getPathFilterOptions(){

        let selected = this.options.find(opt => opt.element.value === this.selected);

        if(selected){
            return [selected.getPathFilterOptions()];
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

export default SelectFilterControl;