import BaseTextFilterControlsGroup from '../../../base/groups/filter/base-text-filter-controls-group';
import CheckboxMixin from '../../../base/groups/mixins/checkbox.mixin';

/**
 * checkbox text filter control
 */
class CheckboxTextFilterControl extends CheckboxMixin(BaseTextFilterControlsGroup){

    /**
     * get text filter options from all controls in the group
     * @return {Array.<object>} path filter options
     */
    getTextFilterOptions(){

        let options = [];

        //add all selected checkboxes
        for(let checkbox of this.checkboxes){

            if(checkbox.selected) {
                options = options.concat(checkbox.getTextFilterOptions());
            }
        }

        return options;
    }
}

export default CheckboxTextFilterControl;