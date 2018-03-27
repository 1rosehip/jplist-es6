import BaseControl from '../base.control';

/**
 * base path filter control
 */
class BasePathFilterControl extends BaseControl{

    /**
     * constructor
     * @param {HTMLElement} element
     */
    constructor(element){
        super(element);

        if(element){

            /**
             * css selector or 'default' for the browser default order (no sort); if path is empty -> the whole element
             * @type {string}
             */
            this.path = (element.getAttribute('data-path') || '').trim();
        }
    }

    /**
     * get path filter options used in FilterAction.pathFilter method
     * @return {Array.<{object}>} options
     */
    getPathFilterOptions(){

        return {
            path: this.path
        };
    }

    /**
     * check if current control has the same properties like the specified control
     * @param {BasePathFilterControl} control
     * @return {boolean}
     */
    isEqualTo(control){
        return this.path === control.path;
    }
}

export default BasePathFilterControl;