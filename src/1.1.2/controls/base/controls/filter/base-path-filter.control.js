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

            /**
             * defines if path is inverted; if true, the path filter returns all items that DON'T contain the specified path
             * @type {string}
             */
            this.isInverted = (element.getAttribute('data-inverted') || '').toLowerCase().trim() === 'true';

            /**
             * optional "OR" logic property, used to combine different filter controls with "OR" logic instead of "AND"
             * @type {string|null}
             */
            this.or = element.getAttribute('data-or') || null;
        }
    }

    /**
     * get path filter options used in FilterAction.pathFilter method
     * @return {Array.<{object}>} options
     */
    getPathFilterOptions(){

        return {
            path: this.path,
            isInverted: this.isInverted,
            or: this.or
        };
    }

    /**
     * check if current control has the same properties like the specified control
     * @param {BasePathFilterControl} control
     * @return {boolean}
     */
    isEqualTo(control){
        return this.path === control.path && this.isInverted === control.isInverted;
    }
}

export default BasePathFilterControl;