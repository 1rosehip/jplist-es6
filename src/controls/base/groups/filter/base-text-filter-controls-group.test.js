import BaseTextFilterControlsGroup from './base-text-filter-controls-group';
import BaseTextFilterControl from '../../controls/filter/base-text-filter.control';

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

describe('Base Text Filter Controls Group', () => {

    describe('Get Text Filter Options', () => {

        it('1 option', () => {
            const baseTextFilterControlsGroup = new BaseTextFilterControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
                />
           `);

            const control = new BaseTextFilterControl(element);
            baseTextFilterControlsGroup.addControl(control);
            expect(baseTextFilterControlsGroup.getTextFilterOptions().length).toEqual(1);
        });

        it('2 options', () => {
            const baseTextFilterControlsGroup = new BaseTextFilterControlsGroup('group1', 'name1', []);

            const element1 = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
                />
           `);

            const element2 = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".desc"
                    type="text"
                    value=""
                    placeholder="Filter by Description"
                />
           `);

            baseTextFilterControlsGroup.addControl(new BaseTextFilterControl(element1));
            baseTextFilterControlsGroup.addControl(new BaseTextFilterControl(element2));

            expect(baseTextFilterControlsGroup.getTextFilterOptions().length).toEqual(2);
        });
    });

    describe('Get Deep Link', () => {

        it('deep link without data-id', () => {
            const baseTextFilterControlsGroup = new BaseTextFilterControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
                />
           `);

            const control = new BaseTextFilterControl(element);
            baseTextFilterControlsGroup.addControl(control);

            expect(baseTextFilterControlsGroup.getDeepLink()).toEqual('');
        });

        it('deep link with data-id', () => {
            const baseTextFilterControlsGroup = new BaseTextFilterControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    data-id="tb"
                    type="text"
                    value="abc"
                    placeholder="Filter by Title"
                />
           `);

            const control = new BaseTextFilterControl(element);
            baseTextFilterControlsGroup.addControl(control);

            expect(baseTextFilterControlsGroup.getDeepLink()).toEqual('tb=abc');
        });

        it('2 controls with data-id', () => {
            const baseTextFilterControlsGroup = new BaseTextFilterControlsGroup('group1', 'name1', []);

            const element1 = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    data-id="tb1"
                    type="text"
                    value="abc"
                    placeholder="Filter by Title"
                />
           `);

            const element2 = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".desc"
                    data-id="tb2"
                    type="text"
                    value="def"
                    placeholder="Filter by Title"
                />
           `);

            const control1 = new BaseTextFilterControl(element1);
            const control2 = new BaseTextFilterControl(element2);

            baseTextFilterControlsGroup.addControl(control1);
            baseTextFilterControlsGroup.addControl(control2);

            expect(baseTextFilterControlsGroup.getDeepLink()).toEqual('tb1=abc&tb2=def');
        });

        it('the same controls should be distinct', () => {
            const baseTextFilterControlsGroup = new BaseTextFilterControlsGroup('group1', 'name1', []);

            const element1 = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    data-id="tb1"
                    type="text"
                    value="abc"
                    placeholder="Filter by Title"
                />
           `);

            const element2 = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    data-id="tb1"
                    type="text"
                    value="abc"
                    placeholder="Filter by Title"
                />
           `);

            const control1 = new BaseTextFilterControl(element1);
            const control2 = new BaseTextFilterControl(element2);

            baseTextFilterControlsGroup.addControl(control1);
            baseTextFilterControlsGroup.addControl(control2);

            expect(baseTextFilterControlsGroup.getDeepLink()).toEqual('tb1=abc');
        });
    });
});