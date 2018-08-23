import BaseRangeFilterControlsGroup from './base-path-filter-controls-group';
import BaseRangeFilterControl from '../../controls/filter/base-range-filter.control';

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

describe('Base Range Filter Controls Group', () => {

    describe('Get Range Filter Options', () => {

        it('1 option', () => {
            const baseRangeFilterControlsGroup = new BaseRangeFilterControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    data-from="10"
                    data-to="20"
                />
           `);

            const control = new BaseRangeFilterControl(element);
            baseRangeFilterControlsGroup.addControl(control);
            expect(baseRangeFilterControlsGroup.getPathFilterOptions().length).toEqual(1);
        });

        it('2 options', () => {
            const baseRangeFilterControlsGroup = new BaseRangeFilterControlsGroup('group1', 'name1', []);

            const element1 = generateHTMLElement(`
              
                <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    data-from="10"
                    data-to="20"
                />
           `);

            const control1 = new BaseRangeFilterControl(element1);

            const element2 = generateHTMLElement(`
              
                <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title"
                    data-from="15"
                    data-to="24"
                />
           `);

            const control2 = new BaseRangeFilterControl(element2);

            baseRangeFilterControlsGroup.addControl(control1);
            baseRangeFilterControlsGroup.addControl(control2);

            expect(baseRangeFilterControlsGroup.getPathFilterOptions().length).toEqual(2);
        });
    });
});