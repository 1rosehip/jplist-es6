import CheckboxSortControl from './checkbox-sort.control';
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

describe('Checkboxes Sort Control', () => {

    it('checkbox control should not be selected without checked property', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input 
                        type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-group="group1"
                                                
                        data-path=".title"
                        data-order="asc"
                        data-type="text"> 
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].selected).toEqual(false);
    });

    it('checkbox control should not be selected', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
            <input type="checkbox"
                    data-jplist-control="checkbox-sort"
                        data-name="default"
                    data-group="group1"
                    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"> 
                TEXT
            </input>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].selected).toEqual(false);
    });

    it('checkbox control should be selected with checked property', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
            <input type="checkbox"
                    data-jplist-control="checkbox-sort"
                        data-name="default"
                    data-group="group1"
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
                    checked> 
                TEXT
            </input>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].selected).toEqual(true);
    });

    it('2 selected checkbox controls', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked>
                    TEXT
                </input>
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('2 non selected checkbox controls', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"> 
                    TEXT
                </input>
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"> 
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(!control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('first is selected, the second is not selected', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked> 
                    TEXT
                </input>
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"> 
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('first is not selected, the second is selected', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"> 
                    TEXT
                </input>
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"
                        checked> 
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('selected checkbox should have selected class', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    it('non selected checkbox should no have selected class', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    it('third selected checkbox should have selected class', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

        const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        control.addControl(baseSortControl3);
        expect(control.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    it('third non selected checkbox should not have selected class', () => {

        const control = new CheckboxSortControl('group1', 'default');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

        const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        >
                    TEXT
                </input>
            `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        control.addControl(baseSortControl3);
        expect(!control.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    describe('change', () => {

        it('change 1 non selected checkbox -> it should be selected', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-group="group1"    
                            data-name="default"     
                            data-path=".title"
                            data-order="asc"
                            data-type="text"> 
                        TEXT
                    </input>
                `));

            control.addControl(baseSortControl1);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('change 1 non selected checkbox -> it should contains selected class', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-name="default"
                            data-group="group1"                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"> 
                        TEXT
                    </input>
                `));

            control.addControl(baseSortControl1);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('change 1 selected checkbox -> it should not be selected', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-group="group1" 
                            data-name="default"                                
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            checked> 
                        TEXT
                    </input>
                `));

            control.addControl(baseSortControl1);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].selected).toEqual(true);
        });

        it('change 1 selected checkbox -> it should not have selected class', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-group="group1"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            checked> 
                        TEXT
                    </input>
                `));

            control.addControl(baseSortControl1);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> both should be selected', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-group="group1"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            checked> 
                        TEXT
                    </input>
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-group="group1"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"> 
                        TEXT
                    </input>
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected && control.controls[1].selected).toEqual(true);
        });

        it('first selected, second non selected -> change the second -> both should have selected class', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-name="default"
                            data-group="group1"                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            checked> 
                        TEXT
                    </input>
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-name="default"
                            data-group="group1"                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"> 
                        TEXT
                    </input>
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS) &&
                control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first non selected, second selected -> change the first -> both should be selected', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-name="default"
                            data-group="group1"                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"> 
                        TEXT
                    </input>
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-name="default"
                            data-group="group1"                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            checked> 
                        TEXT
                    </input>
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected && control.controls[1].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> both should have selected class', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-name="default"
                            data-group="group1"                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"> 
                        TEXT
                    </input>
                `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <input type="checkbox"
                            data-jplist-control="checkbox-sort"
                            data-name="default"
                            data-group="group1"                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"                           
                            checked>
                        TEXT
                    </input>
                `));


            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS) &&
                control.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });
    });

    describe('Get sort options', () => {

        it('1 non selected checkbox control -> 1 option', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions().length).toEqual(1);
        });

        it('1 non selected checkbox control -> 1 option with path = default', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions()[0].path).toEqual('default');
        });

        it('1 selected checkbox control -> 1 option', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"checked
                        >
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions().length).toEqual(1);
        });

        it('2 selected checkboxes  -> 2 options', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"checked
                        >
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"checked
                        >
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getSortOptions().length).toEqual(2);
        });

        it('1 selected and 1 not selected checkboxes  -> 2 options', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"checked
                        >
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                        >
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getSortOptions().length).toEqual(2);
        });

        it('1 not selected and 1 selected checkbox -> the last option should have default path (it\'t always the latest)', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        >
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"checked
                        >
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getSortOptions()[1].path).toEqual('default');
        });

        it('2 not selected checkboxes  -> 1 option', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        >
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                        >
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getSortOptions().length).toEqual(1);
        });

        it('2 not selected checkboxes  -> 1 option path = default', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        >
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                        >
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getSortOptions()[0].path).toEqual('default');
        });

    });

    describe('Get deep link', () => {

        it('1 non selected checkbox control without data-id', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 non selected checkbox control with data-id', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-id="abc">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('abc=0');
        });

        it('1 selected checkbox control without data-id', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected checkbox control with data-id', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked
                        data-id="abc">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected checkboxes with data-id', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-id="cb1"                        
                        checked>
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                        data-id="cb2"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getDeepLink()).toEqual('cb1=1&cb2=1');
        });

        it('1 selected and 1 not selected checkboxes with data-id', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-id="cb1"
                        checked>
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                        data-id="cb2">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getDeepLink()).toEqual('cb1=1&cb2=0');
        });

        it('2 not selected checkboxes with data-id', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-id="cb1">
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                        data-id="cb2">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getDeepLink()).toEqual('cb1=0&cb2=0');
        });

        it('same non selected control twice should be distinct', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-id="cb1">
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getDeepLink()).toEqual('cb1=0');
        });

        it('same selected control twice should be distinct', () => {

            const control = new CheckboxSortControl('group1', 'default');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked
                        data-id="cb1">
                    TEXT
                </input>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <input type="checkbox"
                        data-jplist-control="checkbox-sort"
                        data-name="default"
                        data-group="group1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        checked
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseSortControl1);
            control.addControl(baseSortControl2);
            expect(control.getDeepLink()).toEqual('cb1=1');
        });

    });
    
});