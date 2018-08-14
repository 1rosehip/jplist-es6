import RadioButtonsPathFilterControl from './radio-buttons-path-filter.control';
import BasePathFilterControl from '../../../base/controls/filter/base-path-filter.control';

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

describe('Radio Buttons Path Filter Control', () => {

    it('name', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
             <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1"
                checked>
                TEXT
            </input>            
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].name).toEqual('name1');
    });

    it('single selected radio', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1"
                checked>
                TEXT
            </input>      
            
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].selected).toEqual(true);
    });

    it('single non selected radio', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1">
                TEXT
            </input>      
            
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].selected).toEqual(false);
    });

    it('2 non selected radios', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
            
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1">
                TEXT
            </input> 
        `));

        const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                name="r1">
                TEXT
            </input> 
        `));

        control.addControl(basePathFilterControl);
        control.addControl(basePathFilterControl2);
        expect(!control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('2 selected radios -> only the last one should be selected', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                name="r1">
                TEXT
            </input> 
        `));

        const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                checked
                name="r1">
                TEXT
            </input> 
        `));

        control.addControl(basePathFilterControl);
        control.addControl(basePathFilterControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('2 selected radios -> only the last one should contain selected class', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                name="r1">
                TEXT
            </input> 
        `));

        const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                checked
                name="r1">
                TEXT
            </input>               
        `));

        control.addControl(basePathFilterControl);
        control.addControl(basePathFilterControl2);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS) &&
            control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    it('first radio selected, second radio non selected', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                name="r1">
                TEXT
            </input> 
        `));

        const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                name="r1">
                TEXT
            </input>               
        `));

        control.addControl(basePathFilterControl);
        control.addControl(basePathFilterControl2);
        expect(control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('first radio non selected, second radio selected', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1">
                TEXT
            </input> 
        `));

        const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                checked
                name="r1">
                TEXT
            </input>               
        `));

        control.addControl(basePathFilterControl);
        control.addControl(basePathFilterControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('selected radio should have selected class', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
               
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                name="r1">
                TEXT
            </input> 
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    it('non selected radio should not have selected class', () => {

        const control = new RadioButtonsPathFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-path-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1">
                TEXT
            </input> 
                
        `));

        control.addControl(basePathFilterControl);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    describe('change', () => {

        it('change 1 non selected radio ->  should be selected', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
            `));

            control.addControl(basePathFilterControl);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('change 1 non selected radio ->  should contains selected class', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
            `));

            control.addControl(basePathFilterControl);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> it should be selected', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[1].selected).toEqual(true);
        });

        it('first selected, second non selected -> change the second -> it should have selected class', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                    
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> first should not be selected', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].selected).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> first should not have selected class', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first non selected, second selected -> change the first -> it should be selected', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> it should have selected class', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> the second should not be selected', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[1].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> the second should not have selected class', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });
    });

    describe('Get path filter options', () => {

        it('1 non selected -> 0 options', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
                     <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions().length).toEqual(0);
        });

        it('1 selected -> 1 option', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
                     <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions().length).toEqual(1);
        });

        it('2 selected -> 1 option', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);
            expect(control.getPathFilterOptions().length).toEqual(1);
        });

    });

    describe('Get deep link', () => {

        it('1 non selected radio control without data-id', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 non selected radio control with data-id', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            data-id="abc"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected radio control without data-id', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected radio control with data-id', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            data-id="abc"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            expect(control.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected radios with data-id', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
                 
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            data-id="radio1"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                 
                   <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            data-id="radio2"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);
            control.addControl(basePathFilterControl2);
            expect(control.getDeepLink()).toEqual('radio2=1');
        });

        it('the same selected control should be distinct', () => {

            const control = new RadioButtonsPathFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            data-id="radio1"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(basePathFilterControl);

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-path-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            data-id="radio1"
                            name="r1">
                        TEXT
                    </input>
                
                
            `));

            control.addControl(basePathFilterControl2);

            expect(control.getDeepLink()).toEqual('radio1=1');
        });

    });
});