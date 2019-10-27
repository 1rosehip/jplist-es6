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

            const from = element.getAttribute('data-from');

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.from = from === null ? -Infinity : Number(from);

            if(isNaN(this.from)){
                this.from = -Infinity;
            }

            const to = element.getAttribute('data-to');

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.to = to === null ? Infinity : Number(to);

            if(isNaN(this.to)){
                this.to = Infinity;
            }

            const min = element.getAttribute('data-min');

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.min = min === null ? this.from : Number(min);

            if(isNaN(this.min)){
                this.min = this.from;
            }

            const max = element.getAttribute('data-max');

            /**
             * min <= from <= (all numbers in the element) <= to <= max
             * @type {number}
             */
            this.max = max === null ? this.to : Number(max);

            if(isNaN(this.max)){
                this.max = this.to;
            }

            const step = element.getAttribute('data-step');
            
            /**
             * Step >= 1 (all numbers in the element)
             * @type {number}
             */
            this.step = step === null ? 1 : Number(step);

            if(isNaN(this.step)){
                this.step = 1;
            }

            /**
             * optional "OR" logic property, used to combine different filter controls with "OR" logic instead of "AND"
             * @type {string|null}
             */
            this.or = element.getAttribute('data-or') || null;
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
            max: this.max,
            step: this.step,
            or: this.or
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
                this.max === control.max &&
                this.step === control.step;
    }
}

export default BaseRangeFilterControl;