/**
 * sort action
 */
class SortAction{

    /**
     * general multiple sort
     * @param {Array.<HTMLElement>} items
     * @param {Array.<{path: string, dataType: text|number|datetime, order: asc|desc, ignoreRegex: string, dateTimeFormat: string}>} options
     * if path = 'default' - the original sort should be kept
     * @return {Array.<HTMLElement>} sorted items
     */
    static sort(items, options){

        if(!options || options.length <= 0){

            /**
             * if no options - return to the default browser sort order
             */
            items.sort((item1, item2) => {
                return SortAction.sortByIndex(item1, item2);
            });

            return items;
        }

        items.sort((item1, item2) => {

            /**
             * start recursive helper
             */
            return SortAction.sortHelper(item1, item2, options, 0);
        });

        return items;
    }

    /**
     * recursive sort helper
     * @param {HTMLElement} item1
     * @param {HTMLElement} item2
     * @param {Array.<Object>} options - structure: {path: string, dataType: text|number|datetime, order: asc|desc, ignoreRegex: string, dateTimeFormat: string}
     * @param {number} optionsIndex
     * @return {number} - 0 if equal, <0 if item1 < item2, >0 if item1 > item2
     */
    static sortHelper(item1, item2, options, optionsIndex){

        if(!options || options.length <= 0 || optionsIndex >= options.length){
            return 0;
        }

        let result = 0;

        const option = options[optionsIndex];

        if(option.path !== 'default'){

            switch(option.dataType){

                case 'number': {
                    result = SortAction.sortNumbers(item1, item2, option.path, option.order);
                    break;
                }

                case 'datetime': {
                    result = SortAction.sortDateTime(item1, item2, option.path, option.order, option.dateTimeFormat);
                    break;
                }

                default: {
                    result = SortAction.sortText(item1, item2, option.path, option.order, option.ignoreRegex);
                    break;
                }
            }
        }
        else{
            result = SortAction.sortByIndex(item1, item2);
        }

        if(result === 0 && optionsIndex + 1 < options.length){

            //get next result recursive
            result = SortAction.sortHelper(item1, item2, options, optionsIndex + 1);
        }

        return result;
    }

    /**
     * sort texts
     * @param {HTMLElement} item1
     * @param {HTMLElement} item2
     * @param {string=} path - can be any CSS selector - https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors;
     * empty path means the whole element; path shouldn't have 'default' value
     * @param {string=} order - asc or desc
     * @param {string=} ignoreRegex - optional regex that defines charaters that should be ignored before the sorting
     * @return {number} - 0 if equal, <0 if item1 < item2, >0 if item1 > item2
     */
    static sortText(item1, item2, path = '', order = 'asc', ignoreRegex = ''){

        if(!item1 || !item2){
            return 0;
        }

        //find elements with the content to sort
        const el1 = path ? item1.querySelector(path) : item1;
        const el2 = path ? item2.querySelector(path) : item2;

        if(!el1 || !el2){
            return 0;
        }

        let text1 = el1.textContent.trim().toLowerCase();
        let text2 = el2.textContent.trim().toLowerCase();

        if(ignoreRegex){

            //regex expression that is used to remove irrelevant characters
            const regexExpr = new RegExp(ignoreRegex, 'ig');
            text1 = text1.replace(regexExpr, '').trim();
            text2 = text2.replace(regexExpr, '').trim();
        }

        if(text1 === text2){
            return 0;
        }

        if(!order){
            order = 'asc';
        }

        //compare languages other than English
        if(''.localeCompare){

            if (order === 'asc') {
                return text1.localeCompare(text2);
            }
            else {
                return text2.localeCompare(text1);
            }
        }
        else{
            if (order === 'asc') {
                return text1 > text2 ? 1 : -1;
            }
            else {
                return text1 < text2 ? 1 : -1;
            }
        }
    }

    /**
     * sort numbers
     * @param {HTMLElement} item1
     * @param {HTMLElement} item2
     * @param {string=} path - can be any CSS selector - https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors;
     * empty path means the whole element; path shouldn't have 'default' value
     * @param {string=} order - asc or desc
     * @return {number} - 0 if equal, <0 if item1 < item2, >0 if item1 > item2
     */
    static sortNumbers(item1, item2, path = '', order = 'asc'){

        if(!item1 || !item2){
            return 0;
        }

        //find elements with the content to sort
        const el1 = path ? item1.querySelector(path) : item1;
        const el2 = path ? item2.querySelector(path) : item2;

        if(!el1 || !el2){
            return 0;
        }

        let number1 = el1.textContent.trim().toLowerCase();
        let number2 = el2.textContent.trim().toLowerCase();

        //remove other characters
        number1 = parseFloat(number1.replace(/[^-0-9.]+/g,''));
        number2 = parseFloat(number2.replace(/[^-0-9.]+/g,''));

        if(isNaN(number1) || isNaN(number2)){

            if(isNaN(number1) && isNaN(number2)){
                return 0;
            }
            else {
                return isNaN(number1) ? 1 : -1;
            }
        }

        if(number1 === number2){
            return 0;
        }

        if(!order){
            order = 'asc';
        }

        if(order === 'asc'){
            return number1 - number2;
        }
        else{
            return number2 - number1;
        }
    }


    /**
     * sort by initial element index
     * @param {HTMLElement} item1
     * @param {HTMLElement} item2
     * @return {number} - 0 if equal, <0 if item1 < item2, >0 if item1 > item2
     */
    static sortByIndex(item1, item2){

        if(!item1 || !item2){
            return 0;
        }

        let number1 = Number(item1.jplistIndex);
        let number2 = Number(item2.jplistIndex);

        if(isNaN(number1) || isNaN(number2)){
            return 0;
        }

        return number1 - number2;
    }

    // ---------------- DATE TIME ------------------------

    /**
     * month name that can be used in date time strings
     * from 0 for January to 11 for December
     * @returns {Array.<Array.<string>>}
     */
    static get months() {

        return [
            ['january', 'jan', 'jan.'],
            ['february', 'feb', 'feb.'],
            ['march', 'mar', 'mar.'],
            ['april', 'apr', 'apr.'],
            ['may'],
            ['june', 'jun.'],
            ['july', 'jul', 'jul.'],
            ['august', 'aug', 'aug.'],
            ['september', 'sep', 'sep.'],
            ['october', 'oct', 'oct.'],
            ['november', 'nov', 'nov.'],
            ['december', 'dec', 'dec.']
        ];
    }

    /**
     * sort datetime
     * @param {HTMLElement} item1
     * @param {HTMLElement} item2
     * @param {string=} path - can be any CSS selector - https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors;
     * empty path means the whole element; path shouldn't have 'default' value;
     * @param {string=} order - asc or desc
     * @param {string=} dateTimeFormat - for example, {month}/{day}/{year}
     * @return {number} - 0 if equal, <0 if item1 < item2, >0 if item1 > item2
     */
    static sortDateTime(item1, item2, path = '', order = 'asc', dateTimeFormat = ''){

        if(!item1 || !item2){
            return 0;
        }

        //find elements with the content to sort
        const el1 = path ? item1.querySelector(path) : item1;
        const el2 = path ? item2.querySelector(path) : item2;

        if(!el1 || !el2){
            return 0;
        }

        let datetime1 = el1.textContent.trim().toLowerCase();
        let datetime2 = el2.textContent.trim().toLowerCase();

        let date1;
        let date2;

        dateTimeFormat = dateTimeFormat.trim();

        if(!dateTimeFormat){

            date1 = new Date(Date.parse(datetime1));
            date2 = new Date(Date.parse(datetime2));
        }
        else{
            date1 = SortAction.getDateFromString(datetime1, dateTimeFormat);
            date2 = SortAction.getDateFromString(datetime2, dateTimeFormat);
        }

        if(date1.getTime() === date2.getTime()){
            return 0;
        }

        if(!order){
            order = 'asc';
        }

        if(order === 'asc'){
            return date1.getTime() > date2.getTime() ? 1 : -1;
        }
        else{
            return date1.getTime() < date2.getTime() ? 1 : -1;
        }
    }

    /**
     * get date time from string that contains wildcards like {year}, {month}, {day}, {hour}, {min}, {sec}
     * @param {string} dateTimeString - for example, 01/12/2017
     * @param {string} dateTimeFormat - for example, {month}/{day}/{year}
     * @return {Date}
     */
    static getDateFromString(dateTimeString, dateTimeFormat){

        //remove special characters
        dateTimeFormat = dateTimeFormat.replace(/\./g, '\\.');
        dateTimeFormat = dateTimeFormat.replace(/\(/g, '\\(');
        dateTimeFormat = dateTimeFormat.replace(/\)/g, '\\)');
        dateTimeFormat = dateTimeFormat.replace(/\[/g, '\\[');
        dateTimeFormat = dateTimeFormat.replace(/\]/g, '\\]');

        //get year
        let year = SortAction.getDateWildcardValue(dateTimeFormat, '{year}', dateTimeString);
        year = Number(year) || 1900;

        //get day
        let day = SortAction.getDateWildcardValue(dateTimeFormat, '{day}', dateTimeString);
        day = Number(day) || 1;

        //get month: integer value representing the month, beginning with 0 for January to 11 for December
        let month = SortAction.getDateWildcardValue(dateTimeFormat, '{month}', dateTimeString);
        month = SortAction.getMonthByWildcard(month);
        if(month === -1){
            month = 0;
        }

        //get hour: (0-23)
        let hour = SortAction.getDateWildcardValue(dateTimeFormat, '{hour}', dateTimeString);
        hour = Number(hour) || 0;

        //get minute: (0-59)
        let minute = SortAction.getDateWildcardValue(dateTimeFormat, '{min}', dateTimeString);
        minute = Number(minute) || 0;

        //get second: (0-59)
        let second = SortAction.getDateWildcardValue(dateTimeFormat, '{sec}', dateTimeString);
        second = Number(second) || 0;

        return new Date(year, month, day, hour, minute, second);
    }

    /**
     * get datetime format section/item
     * @param {string} dateTimeFormat - for example, {month}/{day}/{year} or any other string with wildcards; dateTimeFormat should not contain special characters like . ( ) [ ]
     * @param {string} wildcard - {year}|{month}|{day}|{hour}|{min}|{sec}
     * @param {string} datetimeString - for example, 01/15/2017
     * @return {string|null} - returns the specified wildcard value, for example 2017 for {year} wildcard
     */
    static getDateWildcardValue(dateTimeFormat, wildcard, datetimeString){

        let result = null;

        //replace the specified wildcard with the (.*)
        //for example, for wildcard=year the string can be: '{month}/{day}/{year}' => '{month}/{day}/(.*)'
        let replacedFormat = dateTimeFormat.replace(wildcard, '(.*)');

        //replace all other wildcard with .*
        //for example above it will be: '.*/.*/(.*)'
        const regexValue = replacedFormat.replace(/{year}|{month}|{day}|{hour}|{min}|{sec}/g, '.*');

        //for example, run '.*/.*/(.*)' regex on 01/15/2017
        const regex = new RegExp(regexValue, 'g');
        const match = regex.exec(datetimeString);

        //we get the wildcard value from the given string: 2017 in the example above
        if(match && match.length > 1){
            result = match[1];
        }

        return result;
    }

    /**
     * get month number by string
     * @param {string} monthNumberOrName - month number or name from date time string
     * @return {number} from 0 for January to 11 for December; -1 if not found;
     */
    static getMonthByWildcard(monthNumberOrName){

        monthNumberOrName = monthNumberOrName ? monthNumberOrName.trim().toLowerCase() : '';

        let monthIndex = Number(monthNumberOrName);

        if(!isNaN(monthIndex)){

            if(monthIndex - 1 < 0){
                return -1;
            }
            else {
                return monthIndex - 1;
            }
        }

        //find month index by value
        return SortAction.months.findIndex((monthAliasesArray) => {

            return monthAliasesArray.find(monthAlias => {
                return monthAlias.trim() === monthNumberOrName;
            });
        });
    }
}

export default SortAction;