import NoResultsControl from './no-results.control';
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

describe('No Results Control', () => {

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
    });

});