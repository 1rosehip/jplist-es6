import CheckboxPathFilterControl from './checkbox-path-filter.control';
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

describe('Checkboxes Path Filter Control', () => {

    it('checkbox control should not be selected without checked property', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);
        expect(control.controls[0].selected).toEqual(false);
    });

    it('checkbox control should be selected with checked property', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);
        expect(control.controls[0].selected).toEqual(true);
    });

    it('2 selected checkbox controls', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);

        const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseControl2);
        expect(control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('2 non selected checkbox controls', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);

        const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl2);
        expect(!control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('first is selected, the second is not selected', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);

        const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl2);
        expect(control.controls[0].selected && !control.controls[1].selected).toBeTruthy();
    });

    it('first is not selected, the second is selected', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);

        const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseControl2);
        expect(!control.controls[0].selected && control.controls[1].selected).toBeTruthy();
    });

    it('selected checkbox should have selected class', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);
        expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    it('non selected checkbox should no have selected class', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);
        expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    it('third selected checkbox should have selected class', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);

        const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl2);

        const baseControl3 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".likes"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

        control.addControl(baseControl3);

        expect(control.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    it('third non selected checkbox should not have selected class', () => {

        const control = new CheckboxPathFilterControl('group1', 'name1');

        const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl1);

        const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

        control.addControl(baseControl2);

        const baseControl3 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".likes"
                        data-group="group1"
                        data-name="name1"
                    TEXT
                </input>
            `));

        control.addControl(baseControl3);

        expect(!control.controls[2].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    describe('change', () => {

        it('change 1 non selected checkbox -> change -> it should be selected', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected).toEqual(true);
        });

        it('change 1 non selected checkbox -> change -> it should contains selected class', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('change 1 selected checkbox -> change -> it should not be selected', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].selected).toEqual(true);
        });

        it('change 1 selected checkbox -> change -> it should not have selected class', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);
            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(!control.controls[0].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first selected, second non selected -> change the second -> both should be selected', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected && control.controls[1].selected).toEqual(true);
        });

        it('first selected, second non selected -> change the second -> both should have selected class', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);

            control.controls[1].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS) &&
                control.controls[1].element.classList.contains(SELECTED_CLASS)).toBeTruthy();
        });

        it('first non selected, second selected -> change the first -> both should be selected', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].selected && control.controls[1].selected).toEqual(true);
        });

        it('first non selected, second selected -> change the first -> both should have selected class', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);

            control.controls[0].element.dispatchEvent(new Event('change'));
            expect(control.controls[0].element.classList.contains(SELECTED_CLASS) &&
                control.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
        });
    });

    describe('Get path filter options', () => {

        it('1 non selected checkbox control -> 0 options', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);
            expect(control.getPathFilterOptions().length).toEqual(0);
        });

        it('1 selected checkbox control -> 1 option', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);
            expect(control.getPathFilterOptions().length).toEqual(1);
        });

        it('2 selected checkboxes  -> 2 options', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getPathFilterOptions().length).toEqual(2);
        });

        it('1 selected and 1 not selected checkboxes  -> 1 option', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getPathFilterOptions().length).toEqual(1);
        });

        it('2 not selected checkboxes  -> 0 options', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getPathFilterOptions().length).toEqual(0);
        });
    });

    describe('Get deep link', () => {

        it('1 non selected checkbox control without data-id', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            expect(control.getDeepLink()).toEqual('');
        });

        it('1 non selected checkbox control with data-id', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        data-id="abc">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            expect(control.getDeepLink()).toEqual('abc=0');
        });

        it('1 selected checkbox control without data-id', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked>
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('1 selected checkbox control with data-id', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked
                        data-id="abc">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);
            expect(control.getDeepLink()).toEqual('abc=1');
        });

        it('2 selected checkboxes with data-id', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        checked
                        data-id="cb2">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getDeepLink()).toEqual('cb1=1&cb2=1');
        });

        it('1 selected and 1 not selected checkboxes with data-id', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        data-id="cb2">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getDeepLink()).toEqual('cb1=1&cb2=0');
        });

        it('2 not selected checkboxes with data-id', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".desc"
                        data-group="group1"
                        data-name="name1"
                        data-id="cb2">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getDeepLink()).toEqual('cb1=0&cb2=0');
        });

        it('the same non selected checkbox should be distinct', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getDeepLink()).toEqual('cb1=0');
        });

        it('the same selected checkbox should be distinct', () => {

            const control = new CheckboxPathFilterControl('group1', 'name1');

            const baseControl1 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl1);

            const baseControl2 = new BasePathFilterControl(generateHTMLElement(`
                <input
                        type="checkbox"
                        data-jplist-control="checkbox-path-filter"
                        data-path=".title"
                        data-group="group1"
                        data-name="name1"
                        checked
                        data-id="cb1">
                    TEXT
                </input>
            `));

            control.addControl(baseControl2);
            expect(control.getDeepLink()).toEqual('cb1=1');
        });

    });
});