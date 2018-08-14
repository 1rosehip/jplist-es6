import BasePathFilterControlsGroup from '../../../base/groups/filter/base-path-filter-controls-group';
import RadioButtonsMixin from '../../../base/groups/mixins/radio-buttons.mixin';

/**
 * radio buttons path filter control
 */
class RadioButtonsPathFilterControl extends RadioButtonsMixin(BasePathFilterControlsGroup){

    /**
     * get path filter options from all controls in the group
     * @return {Array.<object>} path filter options
     */
    getPathFilterOptions(){

        let options = [];

        //get options from the latest selected radio if exists
        let latestSelectedRadio = this.getLastSelectedRadio();

        if(latestSelectedRadio){
            options = options.concat(latestSelectedRadio.getPathFilterOptions());
        }

        return options;
    }
}

export default RadioButtonsPathFilterControl;