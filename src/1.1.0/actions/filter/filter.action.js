/**
 * filter action
 */
class FilterAction{

    /**
     * text filter
     * this filter returns all items that contains the specified text in the given path
     * @param {Array.<HTMLElement>} items
     * @param {string} text
     * @param {string=} path - any CSS selector or empty value meaning the whole element
     * @param {string=} mode - contains (default), startsWith, endsWith, equal
     * @param {string=} ignoreRegex - optional regex that defines what characters should be ignored
     * @return {Array.<HTMLElement>} filtered items
     */
    static textFilter(items, text, path='', mode = 'contains', ignoreRegex = ''){

        const filtered = [];

        if(!items) return [];

        if(path === 'default') return items;

        const formattedText = text.replace(new RegExp(ignoreRegex, 'ig'), '').toLowerCase().trim();

        for(let item of items){

            const elements = path ? item.querySelectorAll(path) : [item];

            if(!elements) continue;

            let shouldBeAdded = false;

            for(let el of elements){

                const elText = el.textContent.replace(new RegExp(ignoreRegex, 'ig'), '').toLowerCase().trim();

                switch(mode){

                    case 'startsWith':{

                        if(elText.startsWith(formattedText)){
                            shouldBeAdded = true;
                        }

                        break;
                    }

                    case 'endsWith':{

                        if(elText.endsWith(formattedText)){
                            shouldBeAdded = true;
                        }

                        break;
                    }

                    case 'equal':{

                        if(elText === formattedText){
                            shouldBeAdded = true;
                        }
                        break;
                    }

                    default:{

                        //contains
                        if(elText.indexOf(formattedText) !== -1){
                            shouldBeAdded = true;
                        }

                        break;
                    }
                }

                if(shouldBeAdded) break;
            }

            if(shouldBeAdded){
                filtered.push(item);
            }
        }

        return filtered;
    }

    /**
     * path filter
     * only items with the given path are returned
     * @param {Array.<HTMLElement>} items
     * @param {string=} path - any CSS selector or empty value meaning the whole element
     * @param {boolean} isInverted - if true, return all items that DON'T contain the specified path
     * @return {Array.<HTMLElement>} filtered items
     */
    static pathFilter(items, path='', isInverted = false){

        const filtered = [];

        if(!items) return [];

        if(path === 'default' || !path) return items;

        for(let item of items){

            const el = item.querySelector(path);

            if(el && !isInverted || !el && isInverted){
                filtered.push(item);
            }
        }

        return filtered;
    }

    /**
     * check if n is a number
     * @param {*} n
     * @returns {boolean}
     */
    static isNumeric(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * range filter
     * return only elements that satisfy the following condition:
     * all numbers in the element's content are in the following range: min <= from <= (all numbers in the element) <= to <= max
     * @param {Array.<HTMLElement>} items
     * @param {string=} path - any CSS selector or empty value meaning the whole element
     * @param {number} from
     * @param {number} to
     * @param {number=} min
     * @param {number=} max
     * @return {Array.<HTMLElement>} filtered items
     */
    static rangeFilter(items, path='', from, to, min = from, max = to){

        const filtered = [];

        if(!items) return [];

        if(path === 'default') return items;

        from = Math.max(from, min);
        to = Math.min(to, max);

        for(let item of items){

            const itemElements = path ? item.querySelectorAll(path) : [item];

            if(!itemElements) continue;

            //find all numbers within the element
            const numbers = [];

            for(let el of itemElements){

                const num = Number(el.textContent.trim().replace(/[^-0-9.]+/g,''));

                if(!isNaN(num)){
                    numbers.push(num);
                }
            }

            if(numbers.length > 0){

                //find max and min number of all found within the element numbers
                const maxNumber = Math.max.apply(Math, numbers);
                const minNumber = Math.min.apply(Math, numbers);

                let shouldBeAdded = true;

                if(FilterAction.isNumeric(from) && from > minNumber){
                    shouldBeAdded = false;
                }

                if(FilterAction.isNumeric(to) && maxNumber > to){
                    shouldBeAdded = false;
                }

                if(shouldBeAdded){
                    filtered.push(item);
                }
            }
        }

        return filtered;
    }
}

export default FilterAction;