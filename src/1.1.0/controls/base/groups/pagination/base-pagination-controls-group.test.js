import BasePaginationControlsGroup from './base-pagination-controls-group';
import BasePaginationControl from '../../controls/pagination/base-pagination.control';

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

describe('Base Pagination Controls Group', () => {

    describe('Get Pagination Options', () => {

        it('pagination options -> itemsPerPage', () => {
            const basePaginationControlsGroup = new BasePaginationControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
           `);

            const control = new BasePaginationControl(element);
            basePaginationControlsGroup.addControl(control);
            expect(basePaginationControlsGroup.getPaginationOptions().itemsPerPage).toEqual(2);
        });

        it('pagination options -> itemsPerPage', () => {
            const basePaginationControlsGroup = new BasePaginationControlsGroup('group1', 'name1', []);

            const element = generateHTMLElement(`
              
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="1">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
           `);

            const control = new BasePaginationControl(element);
            basePaginationControlsGroup.addControl(control);
            expect(basePaginationControlsGroup.getPaginationOptions().currentPage).toEqual(1);
        });

        it('multiple pagination options -> it receives the latest itemsPerPage property', () => {

            const basePaginationControlsGroup = new BasePaginationControlsGroup('group1', 'name1', []);

            const element1 = generateHTMLElement(`
              
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
           `);

            const control1 = new BasePaginationControl(element1);
            basePaginationControlsGroup.addControl(control1);

            const element2 = generateHTMLElement(`
              
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="3"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
           `);

            const control2 = new BasePaginationControl(element2);
            basePaginationControlsGroup.addControl(control2);

            expect(basePaginationControlsGroup.getPaginationOptions().itemsPerPage).toEqual(3);
        });
    });
});