import BasePathFilterControlsGroup from '../../../base/groups/filter/base-path-filter-controls-group';
import CheckboxMixin from '../../../base/groups/mixins/checkbox.mixin';

/**
 * checkbox path filter control
 */
class CheckboxPathFilterControl extends CheckboxMixin(BasePathFilterControlsGroup){

    /**
     * get path filter options from all controls in the group
     * @return {Array.<object>} path filter options
     */
    getPathFilterOptions(){

        let options = [];

        //add all selected checkboxes
        for(let checkbox of this.checkboxes){

            if(checkbox.selected) {
                options = options.concat(checkbox.getPathFilterOptions());
            }
        }

        return options;
    }
}

export default CheckboxPathFilterControl;