import BaseControlsGroup from '../base-controls-group';
import BaseRangeFilterControl from '../../controls/filter/base-range-filter.control';

/**
 * represents a group of range filter controls with the same data-name and data-group attributes
 */
class BaseRangeFilterControlsGroup extends BaseControlsGroup{

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BaseRangeFilterControl|null}
     */
    addControl(control){

        if(control.name !== this.name || control.group !== this.group){
            return null;
        }

        const baseRangeFilterControl = new BaseRangeFilterControl(control.element);

        this.controls.push(baseRangeFilterControl);

        return baseRangeFilterControl;
    }

    /**
     * get range filter options from all controls in the group
     * @return {Array.<object>} range filer options
     */
    getRangeFilterOptions(){

        let options = [];

        for(let control of this.controls){
            options = options.concat(control.getRangeFilterOptions());
        }

        return options;
    }

}

export default BaseRangeFilterControlsGroup;
