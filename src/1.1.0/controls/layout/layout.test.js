import LayoutControl from './layout.control';
import BaseControl from '../base/controls/base.control';

const SELECTED_CLASS = 'jplist-selected';

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

describe('Layout Control', () => {

    it('groupClassName should = jplist-list', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        layoutControl.addControl(control1);

        expect(layoutControl.controls[0].groupClassName).toEqual('jplist-list');
    });

    it('control should be selected', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout"
                data-selected="true">List</button>
        `));

        layoutControl.addControl(control1);

        expect(layoutControl.controls[0].selected).toEqual(true);

    });

    it('selected control should have jplist-selected class', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout"
                data-selected="true">List</button>
        `));

        layoutControl.addControl(control1);

        expect(layoutControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(true);

    });

    it('1 non selected control should be selected', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        layoutControl.addControl(control1);

        expect(layoutControl.controls[0].selected).toEqual(true);

    });

    it('2 non selected controls -> first should be selected', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        const control2 = new BaseControl(generateHTMLElement(`
                
            <button
                type="button"
                data-class="jplist-grid"
                data-group="group1"
                data-name="layout">Grid</button>   
        `));

        layoutControl.addControl(control1);
        layoutControl.addControl(control2);

        expect(layoutControl.controls[0].selected).toEqual(true);

    });

    it('second selected control', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        const control2 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-grid"
                data-group="group1"
                data-name="layout"
                data-selected="true">Grid</button>   
        `));

        layoutControl.addControl(control1);
        layoutControl.addControl(control2);

        expect(layoutControl.controls[1].selected).toEqual(true);

    });

    it('first control should not be selected', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        const control2 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-grid"
                data-group="group1"
                data-name="layout"
                data-selected="true">Grid</button>   
        `));

        layoutControl.addControl(control1);
        layoutControl.addControl(control2);

        expect(layoutControl.controls[0].selected).toEqual(false);

    });

    it('second selected control should have jplist-selected class', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        const control2 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-grid"
                data-group="group1"
                data-name="layout"
                data-selected="true">Grid</button>   
        `));

        layoutControl.addControl(control1);
        layoutControl.addControl(control2);

        expect(layoutControl.controls[1].element.classList.contains(SELECTED_CLASS)).toEqual(true);
    });

    it('first control should not have jplist-selected class', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        const control2 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-grid"
                data-group="group1"
                data-name="layout"
                data-selected="true">Grid</button>   
        `));

        layoutControl.addControl(control1);
        layoutControl.addControl(control2);

        expect(layoutControl.controls[0].element.classList.contains(SELECTED_CLASS)).toEqual(false);
    });

    it('click on the second control -> second should be selected', () => {

        const layoutControl = new LayoutControl('group1', 'layout', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-list"
                data-group="group1"
                data-name="layout">List</button>
        `));

        const control2 = new BaseControl(generateHTMLElement(`
            <button
                type="button"
                data-class="jplist-grid"
                data-group="group1"
                data-name="layout">Grid</button>   
        `));

        layoutControl.addControl(control1);
        layoutControl.addControl(control2);

        control2.element.dispatchEvent(new Event('click'));

        expect(layoutControl.controls[1].selected).toEqual(true);

    });

    describe('Get deep link', () => {

        it('1 control without data-id', () => {

            const layoutControl = new LayoutControl('group1', 'layout');

            const control1 = new BaseControl(generateHTMLElement(`
                <button
                    type="button"
                    data-class="jplist-list"
                    data-group="group1"
                    data-name="layout">List</button>
            `));

            layoutControl.addControl(control1);
            expect(layoutControl.getDeepLink()).toEqual('');
        });

        it('1 control with data-id', () => {

            const layoutControl = new LayoutControl('group1', 'layout');

            const control1 = new BaseControl(generateHTMLElement(`
                <button
                    type="button"
                    data-class="jplist-list"
                    data-group="group1"
                    data-name="layout"
                    data-id=list>List</button>
            `));

            layoutControl.addControl(control1);
            expect(layoutControl.getDeepLink()).toEqual('list=1');
        });

        it('2 controls with data-id', () => {

            const layoutControl = new LayoutControl('group1', 'layout', []);

            const control1 = new BaseControl(generateHTMLElement(`
                <button
                    type="button"
                    data-class="jplist-list"
                    data-group="group1"
                    data-name="layout"
                    data-id="list">List</button>
            `));

            const control2 = new BaseControl(generateHTMLElement(`
                
                <button
                    type="button"
                    data-class="jplist-grid"
                    data-group="group1"
                    data-name="layout"
                    data-id="grid"
                    data-selected="true">Grid</button>   
            `));

            layoutControl.addControl(control1);
            layoutControl.addControl(control2);

            expect(layoutControl.getDeepLink()).toEqual('list=0&grid=1');

        });

    });
});