import BasePathFilterControlsGroup from '../../../base/groups/filter/base-path-filter-controls-group';
import ButtonsMixin from '../../../base/groups/mixins/buttons.mixin';

/**
 * buttons path filter control
 */
class ButtonsPathFilterControl extends ButtonsMixin(BasePathFilterControlsGroup){

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

        //add all selected checkboxes
        for(let checkbox of this.checkboxes){

            if(checkbox.selected) {
                options = options.concat(checkbox.getPathFilterOptions());
            }
        }

        return options;
    }
}

export default ButtonsPathFilterControl;