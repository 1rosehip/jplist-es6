import BaseControlsGroup from '../base-controls-group';
import BaseSortControl from '../../controls/sort/base-sort.control';

/**
 * represents a group of sort controls with the same data-name and data-group attributes
 */
class BaseSortControlsGroup extends BaseControlsGroup{

    /**
     * get sort options from all controls in the group
     * @return {Array.<object>} sortOptions
     */
    getSortOptions(){

        let sortOptions = [];

        for(let control of this.controls){
            sortOptions = sortOptions.concat(control.getSortOptions());
        }

        return sortOptions;
    }

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BaseSortControl|null}
     */
    addControl(control){

        if(control.name !== this.name || control.group !== this.group){
            return null;
        }

        const baseSortControl = new BaseSortControl(control.element);

        this.controls.push(baseSortControl);

        return baseSortControl;
    }
}

export default BaseSortControlsGroup;
