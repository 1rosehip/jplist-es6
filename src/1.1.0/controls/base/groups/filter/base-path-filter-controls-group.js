import BaseControlsGroup from '../base-controls-group';
import BasePathFilterControl from '../../controls/filter/base-path-filter.control';

/**
 * represents a group of path filter controls with the same data-name and data-group attributes
 */
class BasePathFilterControlsGroup extends BaseControlsGroup{

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BasePathFilterControl|null}
     */
    addControl(control){

        if(control.name !== this.name || control.group !== this.group){
            return null;
        }

        const basePathFilterControl = new BasePathFilterControl(control.element);

        this.controls.push(basePathFilterControl);

        return basePathFilterControl;
    }

    /**
     * get path filter options from all controls in the group
     * @return {Array.<object>} path filer options
     */
    getPathFilterOptions(){

        let options = [];

        for(let control of this.controls){
            options = options.concat(control.getPathFilterOptions());
        }

        return options;
    }

}

export default BasePathFilterControlsGroup;
