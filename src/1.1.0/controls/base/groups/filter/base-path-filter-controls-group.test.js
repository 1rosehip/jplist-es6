import BasePathFilterControlsGroup from './base-path-filter-controls-group';
import BasePathFilterControl from '../../controls/filter/base-path-filter.control';

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

describe('Base Path Filter Controls Group', () => {

    describe('Get Path Filter Options', () => {

        it('1 option', () => {
            const basePathFilterControlsGroup = new BasePathFilterControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                />
           `);

            const control = new BasePathFilterControl(element);
            basePathFilterControlsGroup.addControl(control);
            expect(basePathFilterControlsGroup.getPathFilterOptions().length).toEqual(1);
        });

        it('2 options', () => {
            const basePathFilterControlsGroup = new BasePathFilterControlsGroup('group1', 'name1', []);

            const element1 = generateHTMLElement(`
              
                <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                />
           `);

            const control1 = new BasePathFilterControl(element1);

            const element2 = generateHTMLElement(`
              
                <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".desc"
                />
           `);

            const control2 = new BasePathFilterControl(element2);

            basePathFilterControlsGroup.addControl(control1);
            basePathFilterControlsGroup.addControl(control2);

            expect(basePathFilterControlsGroup.getPathFilterOptions().length).toEqual(2);
        });
    });
});