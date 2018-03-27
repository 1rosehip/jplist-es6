import ButtonsSortControl from './buttons-sort.control';
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

describe('Sort Buttons Control', () => {

    describe('Checkbox mode', () => {

        it('checkbox mode control should not be selected without data-selected="true" property', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="checkbox"> <!-- radio / checkbox -->
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should not be selected with data-selected="false" property', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
            <button
                    data-jplist-control="sort-buttons"
                    data-group="group1"
                    data-name="name1"
                    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
                   
                    data-selected="false"
                    data-mode="checkbox"> <!-- radio / checkbox -->
                TEXT
            </button>
        `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should be selected with data-selected="true" property', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
            <button
                    data-jplist-control="sort-buttons"
                    data-group="group1"
                    data-name="name1"
                    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
                   
                    data-selected="true"
                    data-mode="checkbox"> <!-- radio / checkbox -->
                TEXT
            </button>
        `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].selected).toEqual(true);
        });

        it('checkbox mode control should have data-mode = checkbox property', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
            <button
                    data-jplist-control="sort-buttons"
                    data-group="group1"
                    data-name="name1"
                    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
                   
                    data-mode="checkbox"> <!-- radio / checkbox -->
                TEXT
            </button>
        `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].mode).toEqual('checkbox');
        });

        it('2 selected checkbox controls', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.controls[0].selected && buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('2 non selected checkbox controls', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="checkbox"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="checkbox"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(!buttonsSortControl.controls[0].selected && !buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('first is selected, the second is not selected', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-selected="true"
                        data-mode="checkbox"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="checkbox"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.controls[0].selected && !buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('first is not selected, the second is selected', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                      
                        data-mode="checkbox"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(!buttonsSortControl.controls[0].selected && buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('selected checkbox should have selected class', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('non selected checkbox should no have selected class', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(!buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third selected checkbox should have selected class', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            buttonsSortControl.addControl(baseSortControl3);
            expect(buttonsSortControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third non selected checkbox should not have selected class', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            buttonsSortControl.addControl(baseSortControl3);
            expect(!buttonsSortControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        describe('click', () => {

            it('click on 1 non selected checkbox -> it should be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected checkbox -> it should contains selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('click on 1 selected checkbox -> it should not be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.controls[0].element.click();
                expect(!buttonsSortControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 selected checkbox -> it should not have selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            
                            data-selected="true"
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.controls[0].element.click();
                expect(!buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> both should be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[1].element.click();
                expect(buttonsSortControl.controls[0].selected && buttonsSortControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> both should have selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[1].element.click();
                expect(buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonsSortControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> both should be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].selected && buttonsSortControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> both should have selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="checkbox"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonsSortControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Radio mode', () => {

        it('by default data-mode is radio', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].mode).toEqual('radio');
        });

        it('radio mode control should have data-mode = radio property', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="radio"> <!-- radio / checkbox -->
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].mode).toEqual('radio');
        });

        it('single selected radio', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].selected).toEqual(true);
        });

        it('single non selected radio', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].selected).toEqual(false);
        });

        it('2 non selected radios', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="desc"
                        data-type="text"
                       
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(!buttonsSortControl.controls[0].selected && !buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should be selected', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(!buttonsSortControl.controls[0].selected && buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should contain selected class', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(!buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                buttonsSortControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first radio selected, second radio non selected', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="desc"
                        data-type="text"
                       
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.controls[0].selected && !buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('first radio non selected, second radio selected', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(!buttonsSortControl.controls[0].selected && buttonsSortControl.controls[1].selected).toBeTruthy();
        });

        it('selected radio should have selected class', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('non selected radio should not have selected class', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="radio"> 
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(!buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        describe('click', () => {

            it('click on 1 non selected radio ->  should be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected radio ->  should contains selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> it should be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[1].element.click();
                expect(buttonsSortControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> it should have selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[1].element.click();
                expect(buttonsSortControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".desc"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[1].element.click();
                expect(!buttonsSortControl.controls[0].selected).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not have selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".desc"
                            data-order="asc"
                            data-type="text"
                           
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[1].element.click();
                expect(!buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> it should be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".desc"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> it should have selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".desc"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[0].element.click();
                expect(buttonsSortControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not be selected', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".desc"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[0].element.click();
                expect(!buttonsSortControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not have selected class', () => {

                const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

                const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));

                const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                    <button
                            data-jplist-control="sort-buttons"
                            data-group="group1"
                            data-name="name1"
                            
                            data-path=".desc"
                            data-order="asc"
                            data-type="text"
                           
                            data-selected="true"
                            data-mode="radio"> 
                        TEXT
                    </button>
                `));


                buttonsSortControl.addControl(baseSortControl1);
                buttonsSortControl.addControl(baseSortControl2);

                buttonsSortControl.controls[0].element.click();
                expect(!buttonsSortControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Get sort options', () => {

        it('1 non selected checkbox control -> 1 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getSortOptions().length).toEqual(1);
        });

        it('1 non selected checkbox control -> 1 option with path = default', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getSortOptions()[0].path).toEqual('default');
        });

        it('1 selected checkbox control -> 1 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getSortOptions().length).toEqual(1);
        });

        it('2 selected checkboxes  -> 2 options', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getSortOptions().length).toEqual(2);
        });

        it('1 selected and 1 not selected checkboxes  -> 2 options', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getSortOptions().length).toEqual(2);
        });

        it('1 not selected and 1 selected checkbox -> the last option should have default path (it\'t always the latest)', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getSortOptions()[1].path).toEqual('default');
        });

        it('2 not selected checkboxes  -> 1 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getSortOptions().length).toEqual(1);
        });

        it('2 not selected checkboxes  -> 1 option path = default', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getSortOptions()[0].path).toEqual('default');
        });

        it('1 non selected radio control -> 0 options', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getSortOptions().length).toEqual(0);
        });

        it('1 selected radio control -> 1 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getSortOptions().length).toEqual(1);
        });

        it('2 selected radios  -> 1 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getSortOptions().length).toEqual(1);
        });

        it('1 selected radio and 1 selected checkbox  -> 2 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getSortOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 selected checkbox  -> 2 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            buttonsSortControl.addControl(baseSortControl3);
            expect(buttonsSortControl.getSortOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 non selected checkbox  -> 2 option', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            buttonsSortControl.addControl(baseSortControl3);
            expect(buttonsSortControl.getSortOptions().length).toEqual(2);
        });
    });

    describe('Get deep link', () => {

        it('1 non selected checkbox control without data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('1 non selected checkbox control with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="abc"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('1 selected checkbox control without data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('1 selected checkbox control with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-id="abc"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected checkboxes with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-id="cb1"
                        
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                        data-id="cb2"
                       
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('cb1=1&cb2=1');
        });

        it('1 selected and 1 not selected checkboxes with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="cb1"
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="cb2"
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('cb1=1');
        });

        it('2 not selected checkboxes with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-id="cb1"
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="cb2"
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('the same not selected checkboxes', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-id="cb1"
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-id="cb1"
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('the same selected checkboxes should be distinct', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-id="cb1"
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-id="cb1"
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('cb1=1');
        });


        it('1 non selected radio control without data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('1 non selected radio control with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="abc"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control without data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-selected="true"
                        data-id="abc"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            expect(buttonsSortControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected radios with data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="radio1"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="radio2"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('radio2=1');
        });


        it('1 selected radio and 1 selected checkbox data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="radio1"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="cb1"
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('cb1=1&radio1=1');
        });

        it('2 selected radios and 1 selected checkbox data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-id="radio1"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="radio2"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="cb1"
                        data-selected="true"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            buttonsSortControl.addControl(baseSortControl3);
            expect(buttonsSortControl.getDeepLink()).toEqual('cb1=1&radio2=1');
        });

        it('2 selected radios and 1 non selected checkbox data-id', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="radio1"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="radio2"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".desc"
                        data-order="desc"
                        data-type="text"
                       
                        data-id="cb1"
                        data-selected="false"
                        data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            buttonsSortControl.addControl(baseSortControl3);
            expect(buttonsSortControl.getDeepLink()).toEqual('radio2=1');
        });

        it('the same radios should be distinct', () => {

            const buttonsSortControl = new ButtonsSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="radio1"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl2 = new BaseSortControl(generateHTMLElement(`
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                       
                        data-id="radio1"
                        data-selected="true"
                        data-mode="radio">
                    TEXT
                </button>
            `));

            buttonsSortControl.addControl(baseSortControl1);
            buttonsSortControl.addControl(baseSortControl2);
            expect(buttonsSortControl.getDeepLink()).toEqual('radio1=1');
        });

    });

});