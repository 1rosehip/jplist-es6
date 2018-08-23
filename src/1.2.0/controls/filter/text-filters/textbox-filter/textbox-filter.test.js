import TextboxFilterControl from './textbox-filter.control';
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

describe('Textbox Filter Control', () => {

    it('1 textbox filter control', () => {

        const textboxFilterControl = new TextboxFilterControl('group1', 'name1');

        const baseTextFilterControl = new BaseTextFilterControl(generateHTMLElement(`
            <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
            />
        `));

        textboxFilterControl.addControl(baseTextFilterControl);
        expect(textboxFilterControl.controls.length).toEqual(1);
    });

    //TODO: multiple textbox control, 1 changes -> all other should change
    //TODO: textbox control with a button
});