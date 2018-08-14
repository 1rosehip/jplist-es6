import BaseControlsGroup from '../base-controls-group';
import BasePaginationControl from '../../controls/pagination/base-pagination.control';

/**
 * represents a group of pagination controls with the same data-name and data-group attributes
 */
class BasePaginationControlsGroup extends BaseControlsGroup{

    /**
     * there can be only 1 pagination options object;
     * in case of multiple -> get the latest
     * @return {object|null} pagination options
     */
    getPaginationOptions(){

        if(this.controls.length > 0){
            return this.controls[this.controls.length - 1].getPaginationOptions();
        }

        return null;
    }

    /**
     * update controls according to the pagination options calculated using PaginationAction class;
     * @param {PaginationAction} paginationOptions
     */
    setPaginationOptions(paginationOptions){}

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BasePaginationControl|null}
     */
    addControl(control){

        if(control.name !== this.name || control.group !== this.group){
            return null;
        }

        const basePaginationControl = new BasePaginationControl(control.element);

        this.controls.push(basePaginationControl);

        return basePaginationControl;
    }
}

export default BasePaginationControlsGroup;
