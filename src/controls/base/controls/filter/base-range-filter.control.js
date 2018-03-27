import BaseControl from '../base.control';

/**
 * base range filter control
 */
class BaseRangeFilterControl extends BaseControl{

    /**
     * constructor
     * @param {HTMLElement} element
     */
    constructor(element){
        super(element);

        if(element){

            /**
             * css selector or 'default' for the browser initial list; if path is empty -> the whole element
             * @type {string}
             */
            this.path = (element.getAttribute('data-path') || '').trim();

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.from = Number(element.getAttribute('data-from')) || -Infinity;

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.to = Number(element.getAttribute('data-to')) || Infinity;

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.min = Number(element.getAttribute('data-min')) || this.from;

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.max = Number(element.getAttribute('data-max')) || this.to;
        }
    }

    /**
     * get range filter options used in FilterAction.rangeFilter method
     * @return {Array.<{object}>} options
     */
    getRangeFilterOptions(){

        return {
            path: this.path,
            min: this.min,
            from: this.from,
            to: this.to,
            max: this.max
        };
    }

    /**
     * check if current control has the same properties like the specified control
     * @param {BaseRangeFilterControl} control
     * @return {boolean}
     */
    isEqualTo(control){
        return this.path === control.path &&
                this.from === control.from &&
                this.to === control.to &&
                this.min === control.min &&
                this.max === control.max;
    }
}

export default BaseRangeFilterControl;