import RadioButtonsTextFilterControl from './radio-buttons-text-filter.control';
import BaseTextFilterControl from '../../../base/controls/filter/base-text-filter.control';

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

describe('Radio Buttons Text Filter Control', () => {

    it('name', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
             <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1"
                value="aaa"
                checked>
                TEXT
            </input>            
        `));

        control.addControl(baseTextFilterControl);
        expect(control.controls[0].name).toEqual('name1');
    });

    it('single selected radio', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                name="r1"
                value="aaa"
                checked>
                TEXT
            </input>      
            
        `));

        control.addControl(baseTextFilterControl);
        expect(control.controls[0].selected).toEqual(true);
    });

    it('single non selected radio', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                value="aaa"
                name="r1">
                TEXT
            </input>      
            
        `));

        control.addControl(baseTextFilterControl);
        expect(control.controls[0].selected).toEqual(false);
    });

    it('2 non selected radios', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
            
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                value="aaa"
                name="r1">
                TEXT
            </input> 
        `));

        const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                value="bbb"
                name="r1">
                TEXT
            </input> 
        `));

        control.addControl(baseTextFilterControl);
        control.addControl(baseTextFilterControl2);
        expect(!control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('2 selected radios -> only the last one should be selected', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                value="aaa"
                name="r1">
                TEXT
            </input> 
        `));

        const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                checked
                value="bbb"
                name="r1">
                TEXT
            </input> 
        `));

        control.addControl(baseTextFilterControl);
        control.addControl(baseTextFilterControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('2 selected radios -> only the last one should contain selected class', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                value="aaa"
                name="r1">
                TEXT
            </input> 
        `));

        const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                checked
                value="bbb"
                name="r1">
                TEXT
            </input>               
        `));

        control.addControl(baseTextFilterControl);
        control.addControl(baseTextFilterControl2);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS) &&
            control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    it('first radio selected, second radio non selected', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                value="aaa"
                name="r1">
                TEXT
            </input> 
        `));

        const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                value="bbb"
                name="r1">
                TEXT
            </input>               
        `));

        control.addControl(baseTextFilterControl);
        control.addControl(baseTextFilterControl2);
        expect(control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('first radio non selected, second radio selected', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                value="aaa"
                name="r1">
                TEXT
            </input> 
        `));

        const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".desc"
                data-group="group1"
                data-name="name1"
                checked
                value="bbb"
                name="r1">
                TEXT
            </input>               
        `));

        control.addControl(baseTextFilterControl);
        control.addControl(baseTextFilterControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('selected radio should have selected class', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
               
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                checked
                value="aaa"
                name="r1">
                TEXT
            </input> 
        `));

        control.addControl(baseTextFilterControl);
        expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    it('non selected radio should not have selected class', () => {

        const control = new RadioButtonsTextFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
            <input
                type="radio"
                data-jplist-control="radio-buttons-text-filter"
                data-path=".title"
                data-group="group1"
                data-name="name1"
                value="aaa"
                name="r1">
                TEXT
            </input> 
                
        `));

        control.addControl(baseTextFilterControl);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
    });

    describe('change', () => {

        it('change 1 non selected radio ->  should be selected', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
            `));

            control.addControl(baseTextFilterControl);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('change 1 non selected radio ->  should contains selected class', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
            `));

            control.addControl(baseTextFilterControl);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> it should be selected', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[1].selected).toEqual(true);
        });

        it('first selected, second non selected -> change the second -> it should have selected class', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>
                    
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> first should not be selected', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].selected).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> first should not have selected class', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            value="bbb"
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first non selected, second selected -> change the first -> it should be selected', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="bbb"
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> it should have selected class', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            value="bbb"
                            checked
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> the second should not be selected', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="bbb"
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[1].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> the second should not have selected class', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                    
                `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="bbb"
                            name="r1">
                        TEXT
                    </input>                  
                `));


            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });
    });

    describe('Get text filter options', () => {

        it('1 non selected -> 0 options', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
                     <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            expect(control.getTextFilterOptions().length).toEqual(0);
        });

        it('1 selected -> 1 option', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
                     <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            expect(control.getTextFilterOptions().length).toEqual(1);
        });

        it('2 selected -> 1 option', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);
            expect(control.getTextFilterOptions().length).toEqual(1);
        });

    });

    describe('Get deep link', () => {

        it('1 non selected radio control without data-id', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 non selected radio control with data-id', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            data-id="abc"
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected radio control without data-id', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected radio control with data-id', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            data-id="abc"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            expect(control.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected radios with data-id', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
                 
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            data-id="radio1"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                 
                   <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".desc"
                            data-group="group1"
                            data-name="name1"
                            checked
                            data-id="radio2"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);
            control.addControl(baseTextFilterControl2);
            expect(control.getDeepLink()).toEqual('radio2=1');
        });

        it('the same selected control should be distinct', () => {

            const control = new RadioButtonsTextFilterControl('group1', 'name1');

            const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            value="aaa"
                            data-id="radio1"
                            name="r1">
                        TEXT
                    </input>
                
            `));

            control.addControl(baseTextFilterControl);

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
               
                    <input
                            type="radio"
                            data-jplist-control="radio-buttons-text-filter"
                            data-path=".title"
                            data-group="group1"
                            data-name="name1"
                            checked
                            data-id="radio1"
                            name="r1">
                        TEXT
                    </input>
                
                
            `));

            control.addControl(baseTextFilterControl2);

            expect(control.getDeepLink()).toEqual('radio1=1');
        });

    });
});