import BaseTextFilterControlsGroup from '../../../base/groups/filter/base-text-filter-controls-group';
import ButtonsMixin from '../../../base/groups/mixins/buttons.mixin';

/**
 * buttons text filter control
 */
class ButtonsTextFilterControl extends ButtonsMixin(BaseTextFilterControlsGroup){

    /**
     * get text filter options from all controls in the group
     * @return {Array.<object>} text filter options
     */
    getTextFilterOptions(){

        let options = [];

        //get options from the latest selected radio if exists
        let latestSelectedRadio = this.getLastSelectedRadio();

        if(latestSelectedRadio){
            options = options.concat(latestSelectedRadio.getTextFilterOptions());
        }

        //add all selected checkboxes
        for(let checkbox of this.checkboxes){

            if(checkbox.selected) {
                options = options.concat(checkbox.getTextFilterOptions());
            }
        }

        return options;
    }

}

export default ButtonsTextFilterControl;