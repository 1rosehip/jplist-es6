import BaseControl from '../base.control';

/**
 * base text filter control
 */
class BaseTextFilterControl extends BaseControl{

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
             * initial text value is used to handle multiple same control in different panels
             * @type {string}
             */
            this.initialText = element.getAttribute('data-text') || element.value || '';

            /**
             * trimmed text value items filter by
             * @type {string}
             */
            this._text = (element.getAttribute('data-text') || element.value || '').trim();

            /**
             * filter mode - contains (default), startsWith, endsWith, equal
             * @type {string}
             */
            this.mode = (element.getAttribute('data-mode') || 'contains').trim();

            /**
             * optional ignore regex - used to ignore characters before sort
             * @type {string}
             */
            this.regex = element.getAttribute('data-regex') || '';

            /**
             * optional "OR" logic property, used to combine different filter controls with "OR" logic instead of "AND"
             * @type {string|null}
             */
            this.or = element.getAttribute('data-or') || null;
        }
    }

    /**
     * text setter
     * @param {string} value
     */
    set text(value){

        this.initialText = value || '';
        this._text = (value || '').trim();
    }

    /**
     * text getter
     * @return {string}
     */
    get text(){

        return this._text;
    }


    /**
     * get text filter options used in FilterAction.textFilter method
     * @return {Array.<{object}>} options
     */
    getTextFilterOptions(){

        return {
            path: this.path,
            text: this.text,
            mode: this.mode,
            ignoreRegex: this.regex,
            or: this.or
        };
    }

    /**
     * check if current control has the same properties like the specified control;
     * the values could be different
     * @param {BaseTextFilterControl} control
     * @param {boolean} includeValue
     * @return {boolean}
     */
    isEqualTo(control, includeValue = true){

        let isEqual = this.path === control.path &&
            this.mode === control.mode &&
            this.regex === control.regex;

        if(includeValue){
            isEqual = isEqual && this.text === control.text;
        }

        return isEqual;
    }
}

export default BaseTextFilterControl;