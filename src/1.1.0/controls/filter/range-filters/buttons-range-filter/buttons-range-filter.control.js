import BaseRangeFilterControlsGroup from '../../../base/groups/filter/base-range-filter-controls-group';
import ButtonsMixin from '../../../base/groups/mixins/buttons.mixin';

/**
 * buttons range filter
 */
class ButtonsRangeFilter extends ButtonsMixin(BaseRangeFilterControlsGroup){

    /**
     * get range filter options from all controls in the group
     * @return {Array.<object>} path filter options
     */
    getRangeFilterOptions(){

        let options = [];

        //get options from the latest selected radio if exists
        let latestSelectedRadio = this.getLastSelectedRadio();

        if(latestSelectedRadio){
            options = options.concat(latestSelectedRadio.getRangeFilterOptions());
        }

        //add all selected checkboxes
        for(let checkbox of this.checkboxes){

            if(checkbox.selected) {
                options = options.concat(checkbox.getRangeFilterOptions());
            }
        }

        return options;
    }
}

export default ButtonsRangeFilter;