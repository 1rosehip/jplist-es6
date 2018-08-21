import BaseTextFilterControlsGroup from '../../../base/groups/filter/base-text-filter-controls-group';
import RadioButtonsMixin from '../../../base/groups/mixins/radio-buttons.mixin';

/**
 * radio buttons text filter control
 */
class RadioButtonsTextFilterControl extends RadioButtonsMixin(BaseTextFilterControlsGroup){

    /**
     * get text filter options from all controls in the group
     * @return {Array.<object>} path filter options
     */
    getTextFilterOptions(){

        let options = [];

        //get options from the latest selected radio if exists
        let latestSelectedRadio = this.getLastSelectedRadio();

        if(latestSelectedRadio){
            options = options.concat(latestSelectedRadio.getTextFilterOptions());
        }

        return options;
    }
}

export default RadioButtonsTextFilterControl;