import ButtonsPathFilter from './buttons-path-filter.control';
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

describe('Buttons Path Filter Control', () => {

    describe('Checkbox mode', () => {

        it('checkbox mode control should not be selected without data-selected="true" property', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should not be selected with data-selected="false" property', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="false"
                    data-mode="checkbox">
                    TEXT
                </button>
        `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should be selected with data-selected="true" property', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
        `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].selected).toEqual(true);
        });

        it('checkbox mode control should have data-mode = checkbox property', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
        `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].mode).toEqual('checkbox');
        });

        it('2 selected checkbox controls', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.controls[0].selected && buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 non selected checkbox controls', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(!buttonPathFilterControl.controls[0].selected && !buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first is selected, the second is not selected', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.controls[0].selected && !buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first is not selected, the second is selected', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(!buttonPathFilterControl.controls[0].selected && buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('selected checkbox should have selected class', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('non selected checkbox should no have selected class', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(!buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third selected checkbox should have selected class', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".likes"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            buttonPathFilterControl.addControl(baseSortControl3);
            expect(buttonPathFilterControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third non selected checkbox should not have selected class', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".likes"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            buttonPathFilterControl.addControl(baseSortControl3);
            expect(!buttonPathFilterControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        describe('click', () => {

            it('click on 1 non selected checkbox -> it should be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected checkbox -> it should contains selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('click on 1 selected checkbox -> it should not be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.controls[0].element.click();
                expect(!buttonPathFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 selected checkbox -> it should not have selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.controls[0].element.click();
                expect(!buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> both should be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[1].element.click();
                expect(buttonPathFilterControl.controls[0].selected && buttonPathFilterControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> both should have selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[1].element.click();
                expect(buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonPathFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> both should be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].selected && buttonPathFilterControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> both should have selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonPathFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Radio mode', () => {

        it('by default data-mode is radio', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].mode).toEqual('radio');
        });

        it('radio mode control should have data-mode = radio property', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].mode).toEqual('radio');
        });

        it('single selected radio', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].selected).toEqual(true);
        });

        it('single non selected radio', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].selected).toEqual(false);
        });

        it('2 non selected radios', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(!buttonPathFilterControl.controls[0].selected && !buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should be selected', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(!buttonPathFilterControl.controls[0].selected && buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should contain selected class', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(!buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                buttonPathFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first radio selected, second radio non selected', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.controls[0].selected && !buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first radio non selected, second radio selected', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(!buttonPathFilterControl.controls[0].selected && buttonPathFilterControl.controls[1].selected).toBeTruthy();
        });

        it('selected radio should have selected class', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('non selected radio should not have selected class', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(!buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        describe('click', () => {

            it('click on 1 non selected radio ->  should be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected radio ->  should contains selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> it should be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[1].element.click();
                expect(buttonPathFilterControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> it should have selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[1].element.click();
                expect(buttonPathFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[1].element.click();
                expect(!buttonPathFilterControl.controls[0].selected).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not have selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[1].element.click();
                expect(!buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> it should be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> it should have selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[0].element.click();
                expect(buttonPathFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not be selected', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[0].element.click();
                expect(!buttonPathFilterControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not have selected class', () => {

                const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

                const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonPathFilterControl.addControl(basePathFilterControl1);
                buttonPathFilterControl.addControl(basePathFilterControl2);

                buttonPathFilterControl.controls[0].element.click();
                expect(!buttonPathFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Get path filter options', () => {

        it('1 non selected checkbox control -> 0 options', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(0);
        });

        it('1 selected checkbox control -> 1 option', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(1);
        });

        it('2 selected checkboxes  -> 2 options', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(2);
        });

        it('1 selected and 1 not selected checkboxes  -> 1 option', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(1);
        });

        it('2 not selected checkboxes  -> 0 options', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(0);
        });

        it('1 non selected radio control -> 0 options', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(0);
        });

        it('1 selected radio control -> 1 option', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(1);
        });

        it('2 selected radios  -> 1 option', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(1);
        });

        it('1 selected radio and 1 selected checkbox  -> 2 option', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 selected checkbox  -> 2 option', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            buttonPathFilterControl.addControl(baseSortControl3);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 non selected checkbox  -> 1 option', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            buttonPathFilterControl.addControl(baseSortControl3);
            expect(buttonPathFilterControl.getPathFilterOptions().length).toEqual(1);
        });
    });

    describe('Get deep link', () => {

        it('1 non selected checkbox control without data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('');
        });

        it('1 non selected checkbox control with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="abc"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('abc=0');
        });

        it('1 selected checkbox control without data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected checkbox control with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="abc"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected checkboxes with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb2"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=1&cb2=1');
        });

        it('1 selected and 1 not selected checkboxes with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb2"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=1&cb2=0');
        });

        it('2 not selected checkboxes with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb2"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=0&cb2=0');
        });

        it('the same non selected checkbox should be distinct', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=0');
        });

        it('the same selected checkbox should be distinct', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=1');
        });

        it('1 non selected radio control without data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('');
        });

        it('1 non selected radio control with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="abc"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control without data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="abc"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected radios with data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('radio2=1');
        });

        it('the same radio should be distinct', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('radio1=1');
        });


        it('1 selected radio and 1 selected checkbox data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=1&radio1=1');
        });

        it('2 selected radios and 1 selected checkbox data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                 <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const baseSortControl3 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            buttonPathFilterControl.addControl(baseSortControl3);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=1&radio2=1');
        });

        it('2 selected radios and 1 non selected checkbox data-id', () => {

            const buttonPathFilterControl = new ButtonsPathFilter('group1', 'default');

            const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
                 <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const baseSortControl3 = new BasePathFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonPathFilterControl.addControl(basePathFilterControl1);
            buttonPathFilterControl.addControl(basePathFilterControl2);
            buttonPathFilterControl.addControl(baseSortControl3);
            expect(buttonPathFilterControl.getDeepLink()).toEqual('cb1=0&radio2=1');
        });

    });

});