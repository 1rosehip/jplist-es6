import RadioButtonsSortControl from './radio-buttons-sort.control';
import BaseSortControl from '../../base/controls/sort/base-sort.control';

/**
 * generate html element for the specified markup
 * @param {string} markup
 * @returns {HTMLElement}
 */
const generateHTMLElement = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return div.firstChild;
};

const SELECTED_CLASS = 'jplist-selected';

describe('Radio Buttons Sort Control', () => {

    it('name', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].name).toEqual('sort1');
    });

    it('single selected radio', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].selected).toEqual(true);
    });

    it('single non selected radio', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].selected).toEqual(false);
    });

    it('2 non selected radios', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(!control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('2 selected radios -> only the last one should be selected', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('2 selected radios -> only the last one should contain selected class', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS) &&
            control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    it('first radio selected, second radio non selected', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('first radio non selected, second radio selected', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('selected radio should have selected class', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    it('non selected radio should not have selected class', () => {

        const control = new RadioButtonsSortControl('group1', 'sort1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

        control.addControl(baseSortControl1);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    describe('change', () => {

        it('change 1 non selected radio ->  should be selected', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
                `));

            control.addControl(baseSortControl1);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('change 1 non selected radio ->  should contains selected class', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            control.addControl(baseSortControl1);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> it should be selected', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[1].selected).toEqual(true);
        });

        it('first selected, second non selected -> change the second -> it should have selected class', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                checked
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".desc"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> first should not be selected', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                checked
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".desc"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].selected).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> first should not have selected class', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                checked
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".desc"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first non selected, second selected -> change the first -> it should be selected', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                checked
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> it should have selected class', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".desc"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                checked
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> the second should not be selected', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                   
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".desc"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                checked
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[1].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> the second should not have selected class', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".title"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    
                        <input
                                type="radio"
                                data-jplist-control="radio-buttons-sort"
                                data-path=".desc"
                                data-group="group1"
                                data-order="asc"
                                data-type="text"
                                checked
                                name="sort1">
                            Sort by title asc
                        </input>
                    
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });
    });

    describe('Get sort options', () => {

        it('1 non selected -> 0 options', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions().length).toEqual(0);
        });

        it('1 selected -> 1 option', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions().length).toEqual(1);
        });

        it('2 selected -> 1 option', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getSortOptions().length).toEqual(1);
        });

    });

    describe('Get deep link', () => {

        it('1 non selected radio control without data-id', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 non selected radio control with data-id', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            data-id="abc"
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected radio control without data-id', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected radio control with data-id', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            data-id="abc"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected radios with data-id', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                 
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            data-id="radio1"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                 
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".desc"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            data-id="radio2"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getDeepLink()).toEqual('radio2=1');
        });

        it('2 same controls should be distinct ', () => {

            const control = new RadioButtonsSortControl('group1', 'sort1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                 
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            data-id="radio1"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                 
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-sort"
                            data-path=".title"
                            data-group="group1"
                            data-order="asc"
                            data-type="text"
                            data-id="radio1"
                            checked
                            name="sort1">
                        Sort by title asc
                    </input>
                
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getDeepLink()).toEqual('radio1=1');
        });

    });

});