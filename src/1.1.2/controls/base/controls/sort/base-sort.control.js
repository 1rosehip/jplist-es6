import BaseControl from '../base.control';

/**
 * base sort control
 */
class BaseSortControl extends BaseControl{

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
             * optional text (default), number or datetime
             * @type {string}
             */
            this.dataType = (element.getAttribute('data-type') || 'text').trim().toLowerCase();

            /**
             * optional sort order: asc (default) or desc
             * @type {string}
             */
            this.order = (element.getAttribute('data-order') || 'asc').trim().toLowerCase();

            /**
             * optional ignore regex - used to ignore characters before sort
             * @type {string}
             */
            this.regex = element.getAttribute('data-regex') || '';

            /**
             * optional datetime format - datetime structure using wilcards {year}|{month}|{day}|{hour}|{min}|{sec}, for example: {month}/{day}/{year}
             * @type {string}
             */
            this.dateTimeFormat = (element.getAttribute('data-date-format') || '').trim().toLowerCase();

            /**
             * this property indicates the number of data attribute groups [{data-path, data-order, ...}, {data-path-1, data-order-1,...}, ...]
             * only data-path attribute is required;
             * if multipleSortsNum > 0 => multiple sort
             * @type {number}
             */
            this.multipleSortsNumber = this.getMultipleSortsNumber(element);

            for(let index=1; index <= this.multipleSortsNumber; index++){
                this['path' + index] = (element.getAttribute('data-path-' + index) || '').trim();
                this['dataType' + index] = (element.getAttribute('data-type-' + index) || 'text').trim().toLowerCase();
                this['order' + index] = (element.getAttribute('data-order-' + index) || 'asc').trim().toLowerCase();
                this['regex' + index] = element.getAttribute('data-regex-' + index) || '';
                this['dateTimeFormat' + index] = (element.getAttribute('data-date-format-' + index) || '').trim().toLowerCase();
            }

        }
    }

    /**
     * multiple sort is defined by another sets of data attributes like {data-path-1, data-order-1,...}, {data-path-2, data-order-2,...} etc
     * this method counts the number of such sets (= the number of attributes data-path-1, data-path-2, ...)
     * @param {HTMLElement} element
     * @return {number}
     */
    getMultipleSortsNumber(element){

        let pathsNumber = 0;

        for(let attr of element.attributes){

            let match = null;
            const regex = /^data-path-([0-9]+)$/g;

            while (match = regex.exec(attr.nodeName)) {

                const propIndex = Number(match[1]);

                if(!Number.isInteger(propIndex)) continue;
                pathsNumber++;
            }
        }

        return pathsNumber;
    }

    /**
     * get sort options used in SortAction.sort method
     * @return {Array.<{path: string, dataType: text|number|datetime, order: asc|desc, ignoreRegex: string, dateTimeFormat: string}>} options
     */
    getSortOptions(){

        const options = [];

        //initial path is required
        if(this.path){

            options.push({
                path: this.path,
                dataType: this.dataType,
                order: this.order,
                ignoreRegex: this.ignoreRegex,
                dateTimeFormat: this.dateTimeFormat
            });

            for(let index = 1; index <= this.multipleSortsNumber; index++){

                options.push({
                    path: this['path' + index],
                    dataType: this['dataType' + index],
                    order: this['order' + index],
                    ignoreRegex: this['ignoreRegex' + index],
                    dateTimeFormat: this['dateTimeFormat' + index]
                });
            }
        }

        return options;
    }

    /**
     * check if current base sort control has the same properties like the specified base sort control
     * @param {BaseSortControl} baseSortControl
     * @return {boolean}
     */
    isEqualTo(baseSortControl){

        let isEqual = true;

        const props = ['path', 'dataType', 'order', 'regex', 'dateTimeFormat'];

        for(let i=0; i<props.length; i++){

            isEqual = isEqual && this[props[i]] === baseSortControl[props[i]];
        }

        isEqual = isEqual && this.multipleSortsNumber === baseSortControl.multipleSortsNumber;

        for(let i=1; i <= this.multipleSortsNumber; i++){

            for(let k=0; k<props.length; k++){

                isEqual = isEqual && this[props[k] + i] === baseSortControl[props[k] + i];
            }
        }

        return isEqual;
    }
}

export default BaseSortControl;
