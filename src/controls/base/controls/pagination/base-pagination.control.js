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

            /**
             * CSS class that is used on disabled pagination buttons
             * @type {string|string}
             */
            this.disabledClass = (element.getAttribute('data-disabled-class') || 'jplist-disabled').trim();

            /**
             * CSS class that is used on selected pagination buttons
             * @type {string|string}
             */
            this.selectedClass = (element.getAttribute('data-selected-class') || 'jplist-selected').trim();
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
