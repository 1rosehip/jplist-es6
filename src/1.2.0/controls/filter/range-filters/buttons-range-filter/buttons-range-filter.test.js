import ButtonsRangeFilter from './buttons-range-filter.control';
import BaseRangeFilterControl from '../../../base/controls/filter/base-range-filter.control';

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

describe('Buttons Range Filter Control', () => {

    describe('Checkbox mode', () => {

        it('checkbox mode control should not be selected without data-selected="true" property', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-range-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should not be selected with data-selected="false" property', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="false"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
        `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should be selected with data-selected="true" property', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
        `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].selected).toEqual(true);
        });

        it('checkbox mode control should have data-mode = checkbox property', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
        `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].mode).toEqual('checkbox');
        });

        it('2 selected checkbox controls', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.controls[0].selected && buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 non selected checkbox controls', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(!buttonRangeFilterControl.controls[0].selected && !buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first is selected, the second is not selected', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.controls[0].selected && !buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first is not selected, the second is selected', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(!buttonRangeFilterControl.controls[0].selected && buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('selected checkbox should have selected class', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('non selected checkbox should no have selected class', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(!buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third selected checkbox should have selected class', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".likes"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="40"
                    data-to="60">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            buttonRangeFilterControl.addControl(baseSortControl3);
            expect(buttonRangeFilterControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third non selected checkbox should not have selected class', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".likes"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="12"
                    data-to="22">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            buttonRangeFilterControl.addControl(baseSortControl3);
            expect(!buttonRangeFilterControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        describe('click', () => {

            it('click on 1 non selected checkbox -> it should be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected checkbox -> it should contains selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('click on 1 selected checkbox -> it should not be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.controls[0].element.click();
                expect(!buttonRangeFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 selected checkbox -> it should not have selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.controls[0].element.click();
                expect(!buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> both should be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="checkbox"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[1].element.click();
                expect(buttonRangeFilterControl.controls[0].selected && buttonRangeFilterControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> both should have selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="checkbox"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[1].element.click();
                expect(buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonRangeFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> both should be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].selected && buttonRangeFilterControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> both should have selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="checkbox"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="checkbox"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonRangeFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Radio mode', () => {

        it('by default data-mode is radio', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].mode).toEqual('radio');
        });

        it('radio mode control should have data-mode = radio property', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].mode).toEqual('radio');
        });

        it('single selected radio', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].selected).toEqual(true);
        });

        it('single non selected radio', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].selected).toEqual(false);
        });

        it('2 non selected radios', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(!buttonRangeFilterControl.controls[0].selected && !buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should be selected', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(!buttonRangeFilterControl.controls[0].selected && buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should contain selected class', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(!buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                buttonRangeFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first radio selected, second radio non selected', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.controls[0].selected && !buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first radio non selected, second radio selected', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(!buttonRangeFilterControl.controls[0].selected && buttonRangeFilterControl.controls[1].selected).toBeTruthy();
        });

        it('selected radio should have selected class', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('non selected radio should not have selected class', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(!buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        describe('click', () => {

            it('click on 1 non selected radio ->  should be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected radio ->  should contains selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> it should be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[1].element.click();
                expect(buttonRangeFilterControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> it should have selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[1].element.click();
                expect(buttonRangeFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));

                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[1].element.click();
                expect(!buttonRangeFilterControl.controls[0].selected).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not have selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[1].element.click();
                expect(!buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> it should be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> it should have selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[0].element.click();
                expect(buttonRangeFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not be selected', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[0].element.click();
                expect(!buttonRangeFilterControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not have selected class', () => {

                const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

                const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-mode="radio"
                        data-from="10"
                        data-to="20">
                        TEXT
                    </button>
                `));

                const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio"
                        data-from="15"
                        data-to="25">
                        TEXT
                    </button>
                `));


                buttonRangeFilterControl.addControl(baseRangeFilterControl1);
                buttonRangeFilterControl.addControl(basePathFilterControl2);

                buttonRangeFilterControl.controls[0].element.click();
                expect(!buttonRangeFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Get range filter options', () => {

        it('1 non selected checkbox control -> 0 options', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(0);
        });

        it('1 selected checkbox control -> 1 option', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(1);
        });

        it('2 selected checkboxes  -> 2 options', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(2);
        });

        it('1 selected and 1 not selected checkboxes  -> 1 option', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(1);
        });

        it('2 not selected checkboxes  -> 0 options', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(0);
        });

        it('1 non selected radio control -> 0 options', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(0);
        });

        it('1 selected radio control -> 1 option', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(1);
        });

        it('2 selected radios  -> 1 option', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(1);
        });

        it('1 selected radio and 1 selected checkbox  -> 2 option', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 selected checkbox  -> 2 option', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="12"
                    data-to="23">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            buttonRangeFilterControl.addControl(baseSortControl3);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 non selected checkbox  -> 1 option', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="13"
                    data-to="24">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            buttonRangeFilterControl.addControl(baseSortControl3);
            expect(buttonRangeFilterControl.getRangeFilterOptions().length).toEqual(1);
        });
    });

    describe('Get deep link', () => {

        it('1 non selected checkbox control without data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('');
        });

        it('1 non selected checkbox control with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="abc"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('abc=0');
        });

        it('1 selected checkbox control without data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected checkbox control with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="abc"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected checkboxes with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb2"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=1&cb2=1');
        });

        it('1 selected and 1 not selected checkboxes with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb2"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=1&cb2=0');
        });

        it('2 not selected checkboxes with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb2"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=0&cb2=0');
        });

        it('the same non selected checkbox should be distinct', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="12"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=0');
        });

        it('the same selected checkbox should be distinct', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="cb1"
                    data-selected="true"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=1');
        });

        it('1 non selected radio control without data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('');
        });

        it('1 non selected radio control with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-id="abc"
                    data-mode="radio"
                    data-from="15"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control without data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="abc"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected radios with data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    data-mode="radio"
                    data-from="15"
                    data-to="26">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('radio2=1');
        });

        it('the same radio should be distinct', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio"
                    data-from="12"
                    data-to="25">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('radio1=1');
        });


        it('1 selected radio and 1 selected checkbox data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="15"
                    data-to="26">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=1&radio1=1');
        });

        it('2 selected radios and 1 selected checkbox data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                 <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                 </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    data-mode="radio"
                    data-from="15"
                    data-to="26">
                    TEXT
                 </button>
            `));

            const baseSortControl3 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="40"
                    data-to="50">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            buttonRangeFilterControl.addControl(baseSortControl3);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=1&radio2=1');
        });

        it('2 selected radios and 1 non selected checkbox data-id', () => {

            const buttonRangeFilterControl = new ButtonsRangeFilter('group1', 'default');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                 <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    data-mode="radio"
                    data-from="10"
                    data-to="20">
                    TEXT
                 </button>
            `));

            const basePathFilterControl2 = new BaseRangeFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    data-mode="radio"
                    data-from="15"
                    data-to="26">
                    TEXT
                 </button>
            `));

            const baseSortControl3 = new BaseRangeFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-path-filter"
                    data-path=".desc"
                    data-group="group1"
                    data-id="cb1"
                    data-mode="checkbox"
                    data-from="30"
                    data-to="40">
                    TEXT
                </button>
            `));

            buttonRangeFilterControl.addControl(baseRangeFilterControl1);
            buttonRangeFilterControl.addControl(basePathFilterControl2);
            buttonRangeFilterControl.addControl(baseSortControl3);
            expect(buttonRangeFilterControl.getDeepLink()).toEqual('cb1=0&radio2=1');
        });

    });

});