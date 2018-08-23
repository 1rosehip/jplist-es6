/**
 * jPList Base Control
 * Each jPList control should extend this base control.
 */
class BaseControl{

    /**
     * control type defined in data-jplist-control attribute;
     * for example, data-jplist-control="hidden-sort" has type='hidden-sort'
     * @param {HTMLElement} element
     */
    constructor(element){

        if(element) {

            this.element = element;

            /**
             * element initial html
             * @type {string}
             */
            this.element.initialHTML = element.outerHTML;

            /**
             * used to define appropriate class for the control
             * @type {string} required
             */
            this.type = (element.getAttribute('data-jplist-control') || '').trim().toLowerCase();

            /**
             * used to define the elements group that is influenced by this control
             * @type {string=} optional
             */
            this.group = (element.getAttribute('data-group') || '').trim().toLowerCase();

            /**
             * control name
             * @type {string} optional
             */
            this.name = (element.getAttribute('data-name') || element.getAttribute('name') || 'default').trim();

            /**
             * deep link parameter name
             * @type {string} optional
             */
            this.id = (element.getAttribute('data-id') || '').trim().toLowerCase();

            /**
             * jump to an element after the action;
             * and CSS selector or "top" keyword
             * @type {string} optional
             */
            this.jump = (element.getAttribute('data-jump') || '').trim();
        }
    }
}

export default BaseControl;