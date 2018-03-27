import BaseControl from '../base.control';

/**
 * base pagination control
 */
class BasePaginationControl extends BaseControl{

    /**
     * constructor
     * @param {HTMLElement} element
     */
    constructor(element){
        super(element);

        if(element){

            /**
             * optional, 10 by default
             * the max number of items per page
             */
            this.itemsPerPage = Number(element.getAttribute('data-items-per-page')) || 10;

            /**
             * optional, 0 by default
             * the initial page
             */
            this.currentPage = Number(element.getAttribute('data-current-page')) || 0;
        }
    }

    /**
     * get pagination options
     * @return {object} options
     */
    getPaginationOptions(){

        return {
            itemsPerPage: this.itemsPerPage,
            currentPage: this.currentPage
        };
    }
}

export default BasePaginationControl;
