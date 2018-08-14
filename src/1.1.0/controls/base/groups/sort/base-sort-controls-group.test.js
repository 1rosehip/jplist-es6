import BaseSortControlsGroup from './base-sort-controls-group';
import BaseSortControl from '../../controls/sort/base-sort.control';

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

describe('Base Sort Controls Group', () => {

    describe('Get Sort Options', () => {

        it('1 sort option', () => {
            const baseSortControlsGroup = new BaseSortControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title"
                    data-name="name1">
                </div>
           `);

            const control = new BaseSortControl(element);
            baseSortControlsGroup.addControl(control);
            expect(baseSortControlsGroup.getSortOptions().length).toEqual(1);
        });

        it('2 sort options', () => {
            const baseSortControlsGroup = new BaseSortControlsGroup('group1', 'name1', []);

            const element1 = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title"
                    data-name="name1">
                </div>
           `);

            const element2 = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".desc"
                    data-name="name1">
                </div>
           `);

            baseSortControlsGroup.addControl(new BaseSortControl(element1));
            baseSortControlsGroup.addControl(new BaseSortControl(element2));

            expect(baseSortControlsGroup.getSortOptions().length).toEqual(2);
        });
    });
});