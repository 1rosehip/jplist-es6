import BasePaginationControl from './base-pagination.control';

/**
 * generate control for the specified markup
 * @param {string} markup
 * @returns {BasePaginationControl}
 */
const generateControl = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return new BasePaginationControl(div.firstChild);
};

describe('Base Pagination Control', () => {

    it('base pagination control type', () => {
        expect(generateControl(`
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
        `).type).toEqual('pagination');
    });

    it('base pagination control itemsPerPage default is 10', () => {
        expect(generateControl(`
         <div
            data-jplist-control="pagination"
            data-group="group1"
            data-name="name1"
            data-current-page="0">

            <button type="button" data-type="first">«</button>
            <button type="button" data-type="prev">‹</button>

            <button type="button" data-type="page">Page {pageNumber}</button>

            <button type="button" data-type="next">›</button>
            <button type="button" data-type="last">»</button>
        </div>
        `).itemsPerPage).toEqual(10);
    });

    it('base pagination control itemsPerPage', () => {
        expect(generateControl(`
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
        `).itemsPerPage).toEqual(2);
    });

    it('base pagination control currentPage default is 0', () => {
        expect(generateControl(`
         <div
            data-jplist-control="pagination"
            data-group="group1"
            data-name="name1"
            data-items-per-page="2">

            <button type="button" data-type="first">«</button>
            <button type="button" data-type="prev">‹</button>

            <button type="button" data-type="page">Page {pageNumber}</button>

            <button type="button" data-type="next">›</button>
            <button type="button" data-type="last">»</button>
        </div>
        `).currentPage).toEqual(0);
    });

    it('base pagination control currentPage', () => {
        expect(generateControl(`
         <div
            data-jplist-control="pagination"
            data-group="group1"
            data-name="name1"
            data-current-page="10">

            <button type="button" data-type="first">«</button>
            <button type="button" data-type="prev">‹</button>

            <button type="button" data-type="page">Page {pageNumber}</button>

            <button type="button" data-type="next">›</button>
            <button type="button" data-type="last">»</button>
        </div>
        `).currentPage).toEqual(10);
    });
});