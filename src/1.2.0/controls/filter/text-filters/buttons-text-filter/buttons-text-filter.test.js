import ButtonsTextFilter from './buttons-text-filter.control';
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

describe('Buttons Text Filter Control', () => {

    describe('Checkbox mode', () => {

        it('checkbox mode control should not be selected without data-selected="true" property', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should not be selected with data-selected="false" property', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="false"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
        `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].selected).toEqual(false);
        });

        it('checkbox mode control should be selected with data-selected="true" property', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
        `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].selected).toEqual(true);
        });

        it('checkbox mode control should have data-mode = checkbox property', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
        `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].mode).toEqual('checkbox');
        });

        it('2 selected checkbox controls', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.controls[0].selected && buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 non selected checkbox controls', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(!buttonTextFilterControl.controls[0].selected && !buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first is selected, the second is not selected', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.controls[0].selected && !buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first is not selected, the second is selected', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(!buttonTextFilterControl.controls[0].selected && buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('selected checkbox should have selected class', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('non selected checkbox should no have selected class', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(!buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third selected checkbox should have selected class', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".likes"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            buttonTextFilterControl.addControl(baseSortControl3);
            expect(buttonTextFilterControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        it('third non selected checkbox should not have selected class', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".likes"
                    data-group="group1"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            buttonTextFilterControl.addControl(baseSortControl3);
            expect(!buttonTextFilterControl.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });

        describe('click', () => {

            it('click on 1 non selected checkbox -> it should be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected checkbox -> it should contains selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('click on 1 selected checkbox -> it should not be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.controls[0].element.click();
                expect(!buttonTextFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 selected checkbox -> it should not have selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.controls[0].element.click();
                expect(!buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> both should be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        value="bbb"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[1].element.click();
                expect(buttonTextFilterControl.controls[0].selected && buttonTextFilterControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> both should have selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        value="bbb"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[1].element.click();
                expect(buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonTextFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> both should be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-selected="true"
                        value="bbb"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].selected && buttonTextFilterControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> both should have selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-selected="true"
                        value="bbb"
                        data-mode="checkbox">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                    buttonTextFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Radio mode', () => {

        it('by default data-mode is radio', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-selected="true">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].mode).toEqual('radio');
        });

        it('radio mode control should have data-mode = radio property', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].mode).toEqual('radio');
        });

        it('single selected radio', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].selected).toEqual(true);
        });

        it('single non selected radio', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].selected).toEqual(false);
        });

        it('2 non selected radios', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    value="bbb"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(!buttonTextFilterControl.controls[0].selected && !buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should be selected', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    value="bbb"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(!buttonTextFilterControl.controls[0].selected && buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('2 selected radios -> only the last one should contain selected class', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    value="aaa"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(!buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS) &&
                buttonTextFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first radio selected, second radio non selected', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.controls[0].selected && !buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('first radio non selected, second radio selected', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(!buttonTextFilterControl.controls[0].selected && buttonTextFilterControl.controls[1].selected).toBeTruthy();
        });

        it('selected radio should have selected class', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('non selected radio should not have selected class', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(!buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        describe('click', () => {

            it('click on 1 non selected radio ->  should be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].selected).toEqual(true);
            });

            it('click on 1 non selected radio ->  should contains selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> it should be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[1].element.click();
                expect(buttonTextFilterControl.controls[1].selected).toEqual(true);
            });

            it('first selected, second non selected -> click on the second -> it should have selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[1].element.click();
                expect(buttonTextFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[1].element.click();
                expect(!buttonTextFilterControl.controls[0].selected).toBeTruthy();
            });

            it('first selected, second non selected -> click on the second -> first should not have selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[1].element.click();
                expect(!buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
            });

            it('first non selected, second selected -> click on the first -> it should be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> it should have selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[0].element.click();
                expect(buttonTextFilterControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not be selected', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        data-selected="true"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[0].element.click();
                expect(!buttonTextFilterControl.controls[1].selected).toEqual(true);
            });

            it('first non selected, second selected -> click on the first -> the second should not have selected class', () => {

                const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

                const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".title"
                        data-group="group1"
                        value="aaa"
                        data-mode="radio">
                        TEXT
                    </button>
                `));

                const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                    <button
                        data-jplist-control="buttons-text-filter"
                        data-text=".desc"
                        data-group="group1"
                        value="aaa"
                        data-selected="true"
                        data-mode="radio">
                        TEXT
                    </button>
                `));


                buttonTextFilterControl.addControl(baseTextFilterControl1);
                buttonTextFilterControl.addControl(baseTextFilterControl2);

                buttonTextFilterControl.controls[0].element.click();
                expect(!buttonTextFilterControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
            });
        });

    });

    describe('Get text filter options', () => {

        it('1 non selected checkbox control -> 0 options', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(0);
        });

        it('1 selected checkbox control -> 1 option', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(1);
        });

        it('2 selected checkboxes  -> 2 options', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(2);
        });

        it('1 selected and 1 not selected checkboxes  -> 1 option', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(1);
        });

        it('2 not selected checkboxes  -> 0 options', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(0);
        });

        it('1 non selected radio control -> 0 options', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(0);
        });

        it('1 selected radio control -> 1 option', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(1);
        });

        it('2 selected radios  -> 1 option', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(1);
        });

        it('1 selected radio and 1 selected checkbox  -> 2 option', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 selected checkbox  -> 2 option', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            buttonTextFilterControl.addControl(baseSortControl3);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(2);
        });

        it('2 selected radios and 1 non selected checkbox  -> 1 option', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-selected="true"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseSortControl3 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            buttonTextFilterControl.addControl(baseSortControl3);
            expect(buttonTextFilterControl.getTextFilterOptions().length).toEqual(1);
        });
    });

    describe('Get deep link', () => {

        it('1 non selected checkbox control without data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('');
        });

        it('1 non selected checkbox control with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="abc"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('abc=0');
        });

        it('1 selected checkbox control without data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected checkbox control with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="abc"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected checkboxes with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb2"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=1&cb2=1');
        });

        it('1 selected and 1 not selected checkboxes with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="cb2"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=1&cb2=0');
        });

        it('2 not selected checkboxes with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="cb2"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=0&cb2=0');
        });

        it('the same non selected checkbox should be distinct', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=0');
        });

        it('the same selected checkbox should be distinct', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="cb1"
                    value="aaa"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="cb1"
                    value="aaa"
                    data-selected="true"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=1');
        });

        it('1 non selected radio control without data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('');
        });

        it('1 non selected radio control with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-id="abc"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control without data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('');
        });

        it('1 selected radio control with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="abc"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected radios with data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('radio2=1');
        });

        it('the same radio should be distinct', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('radio1=1');
        });


        it('1 selected radio and 1 selected checkbox data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=1&radio1=1');
        });

        it('2 selected radios and 1 selected checkbox data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                 <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const baseSortControl3 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            buttonTextFilterControl.addControl(baseSortControl3);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=1&radio2=1');
        });

        it('2 selected radios and 1 non selected checkbox data-id', () => {

            const buttonTextFilterControl = new ButtonsTextFilter('group1', 'default');

            const baseTextFilterControl1 = new BaseTextFilterControl(generateHTMLElement(`
                 <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".title"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio1"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const baseTextFilterControl2 = new BaseTextFilterControl(generateHTMLElement(`
               <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-selected="true"
                    data-id="radio2"
                    value="aaa"
                    data-mode="radio">
                    TEXT
                 </button>
            `));

            const baseSortControl3 = new BaseTextFilterControl(generateHTMLElement(`
                <button
                    data-jplist-control="buttons-text-filter"
                    data-text=".desc"
                    data-group="group1"
                    data-id="cb1"
                    value="aaa"
                    data-mode="checkbox">
                    TEXT
                </button>
            `));

            buttonTextFilterControl.addControl(baseTextFilterControl1);
            buttonTextFilterControl.addControl(baseTextFilterControl2);
            buttonTextFilterControl.addControl(baseSortControl3);
            expect(buttonTextFilterControl.getDeepLink()).toEqual('cb1=0&radio2=1');
        });

    });

});