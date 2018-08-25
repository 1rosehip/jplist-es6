import CounterControl from './counter.control';
import BaseControl from '../base/controls/base.control';

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

describe('Counter Control', () => {

    it('mode should be static', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-mode="static"
                 data-name="counter-title-filter"
                 data-filter-type="path"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].mode).toEqual('static');
    });

    it('mode should be dynamic', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-mode="dynamic"
                 data-name="counter-title-filter"
                 data-filter-type="path"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].mode).toEqual('dynamic');
    });

    it('mode should be dynamic by default', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-name="counter-title-filter"
                 data-filter-type="path"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].mode).toEqual('dynamic');
    });

    it('format should be ({count})', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-mode="static"
                 data-name="counter-title-filter"
                 data-filter-type="path"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].format).toEqual('({count})');
    });

    it('format should be {count} by default', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-path=".title"
                 data-mode="static"
                 data-name="counter-title-filter"
                 data-filter-type="path"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].format).toEqual('{count}');
    });

    it('filterType should be path', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-mode="static"
                 data-name="counter-title-filter"
                 data-filter-type="path"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].filterType).toEqual('path');
    });

    it('filterType should be text', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-mode="static"
                 data-name="counter-title-filter"
                 data-filter-type="text"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].filterType).toEqual('text');
    });

    it('filterType should be range', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-mode="static"
                 data-name="counter-title-filter"
                 data-filter-type="range"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].filterType).toEqual('range');
    });

    it('filterType should be path by default', () => {

        const counterControlGroup = new CounterControl('group1', 'counter-title-filter', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <span
                 data-jplist-control="counter"
                 data-group="group1"
                 data-format="({count})"
                 data-path=".title"
                 data-mode="static"
                 data-name="counter-title-filter"></span>
        `));

        counterControlGroup.addControl(control1);

        expect(counterControlGroup.controls[0].filterType).toEqual('path');
    });

    /*
    it('if items number > 0 -> control should be hidden', () => {

        const noResultsControl = new NoResultsControl('group1', 'no-results', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <div data-jplist-control="no-results" data-group="group1" name="no-results">No Results Found</div>
        `));

        noResultsControl.addControl(control1);

        const stateEvent = new CustomEvent('jplist.state');

        stateEvent.jplistState = {
            options: {},
            itemsNumber: 1
        };

        control1.element.dispatchEvent(stateEvent);

        expect(noResultsControl.controls[0].element.style.display).toEqual('none');
    });

    it('if items number === 0 -> control should be visible', () => {

        const noResultsControl = new NoResultsControl('group1', 'no-results', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <div data-jplist-control="no-results" data-group="group1" name="no-results">No Results Found</div>
        `));

        noResultsControl.addControl(control1);

        const stateEvent = new CustomEvent('jplist.state');

        stateEvent.jplistState = {
            options: {},
            itemsNumber: 0
        };

        control1.element.dispatchEvent(stateEvent);

        expect(noResultsControl.controls[0].element.style.display).toEqual('');
    });*/

});