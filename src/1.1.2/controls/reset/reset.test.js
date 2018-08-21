import ResetControl from './reset.control';
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

describe('Reset Control', () => {

    it('not implemented', () => {

        /*
        const resetControl = new ResetControl('group1', 'reset', []);

        const control1 = new BaseControl(generateHTMLElement(`
            <button
                    data-jplist-control="reset"
                    class="btn btn-secondary ml-3"
                    type="button">
                Reset
            </button>
        `));

        resetControl.addControl(control1);

        expect(resetControl.controls[0].groupClassName).toEqual('jplist-list');
        */
    });

});