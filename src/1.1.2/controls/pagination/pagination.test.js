import PaginationControl from './pagination.control';
import BasePaginationControl from '../base/controls/pagination/base-pagination.control';

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

describe('Pagination Control', () => {

    it('1 pagination control currentPage', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.currentPage).toEqual(10);
    });

    it('1 pagination control itemsPerPage', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="12"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.itemsPerPage).toEqual(12);
    });

    it('2 pagination controls currentPage -> get the latest', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
            <div
                data-jplist-control="pagination"
                data-group="group1"
                data-name="name1"
                data-items-per-page="2"
                data-current-page="10">
    
                <button type="button" data-type="first">«</button>
                <button type="button" data-type="prev">‹</button>
    
                <div class="jplist-holder" data-type="pages">
                    <button type="button" data-type="page">Page {pageNumber}</button>
                </div>
    
                <button type="button" data-type="next">›</button>
                <button type="button" data-type="last">»</button>
            </div>
        `));

        paginationControl.addControl(basePaginationControl1);

        const basePaginationControl2 = new BasePaginationControl(generateHTMLElement(`
            <div
                data-jplist-control="pagination"
                data-group="group1"
                data-name="name1"
                data-items-per-page="2"
                data-current-page="100">
    
                <button type="button" data-type="first">«</button>
                <button type="button" data-type="prev">‹</button>
    
                <div class="jplist-holder" data-type="pages">
                    <button type="button" data-type="page">Page {pageNumber}</button>
                </div>
    
                <button type="button" data-type="next">›</button>
                <button type="button" data-type="last">»</button>
            </div>
        `));

        paginationControl.addControl(basePaginationControl2);

        expect(paginationControl.currentPage).toEqual(100);
    });

    it('2 pagination controls itemsPerPage -> get the latest', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
            <div
                data-jplist-control="pagination"
                data-group="group1"
                data-name="name1"
                data-items-per-page="2"
                data-current-page="10">
    
                <button type="button" data-type="first">«</button>
                <button type="button" data-type="prev">‹</button>
    
                <div class="jplist-holder" data-type="pages">
                    <button type="button" data-type="page">Page {pageNumber}</button>
                </div>
    
                <button type="button" data-type="next">›</button>
                <button type="button" data-type="last">»</button>
            </div>
        `));

        paginationControl.addControl(basePaginationControl1);

        const basePaginationControl2 = new BasePaginationControl(generateHTMLElement(`
            <div
                data-jplist-control="pagination"
                data-group="group1"
                data-name="name1"
                data-items-per-page="20"
                data-current-page="100">
    
                <button type="button" data-type="first">«</button>
                <button type="button" data-type="prev">‹</button>
    
                <div class="jplist-holder" data-type="pages">
                    <button type="button" data-type="page">Page {pageNumber}</button>
                </div>
    
                <button type="button" data-type="next">›</button>
                <button type="button" data-type="last">»</button>
            </div>
        `));

        paginationControl.addControl(basePaginationControl2);

        expect(paginationControl.itemsPerPage).toEqual(20);
    });

    it('pagination control btnTemplate', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.controls[0].btnTemplate).toBeDefined();
    });

    it('pagination control firstButtons', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.controls[0].firstButtons).toBeDefined();
    });


    it('pagination control first button should have jplist-disabled class', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);

        paginationControl.setPaginationOptions({
            pagesNumber: 10,
            currentPage: 0,
            prevPage: 0,
            nextPage: 1
        });

        expect(paginationControl.controls[0].firstButtons[0].classList.contains('jplist-disabled')).toEqual(true);
    });

    it('pagination control first button should have disabled class', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0"
                    data-disabled-class="disabled">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);

        paginationControl.setPaginationOptions({
            pagesNumber: 10,
            currentPage: 0,
            prevPage: 0,
            nextPage: 1
        });

        expect(paginationControl.controls[0].firstButtons[0].classList.contains('disabled')).toEqual(true);
    });

    it('pagination control prev button should have jplist-disabled class', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);

        paginationControl.setPaginationOptions({
            pagesNumber: 10,
            currentPage: 0,
            prevPage: 0,
            nextPage: 1
        });

        expect(paginationControl.controls[0].prevButtons[0].classList.contains('jplist-disabled')).toEqual(true);
    });

    it('pagination control prev button should have disabled class', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0"
                    data-disabled-class="disabled">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);

        paginationControl.setPaginationOptions({
            pagesNumber: 10,
            currentPage: 0,
            prevPage: 0,
            nextPage: 1
        });

        expect(paginationControl.controls[0].prevButtons[0].classList.contains('disabled')).toEqual(true);
    });

    it('pagination control page #0 button should have jplist-selected class', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);

        paginationControl.setPaginationOptions({
            pagesNumber: 10,
            currentPage: 0,
            prevPage: 0,
            nextPage: 1,
            rangeStart: 0,
            rangeEnd: 10
        });

        expect(paginationControl.controls[0].pageButtonsHolder.querySelector('[data-type="page"]').classList.contains('jplist-selected')).toEqual(true);
    });

    it('pagination control page #0 button should have "active" class', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0"
                    data-selected-class="active">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);

        paginationControl.setPaginationOptions({
            pagesNumber: 10,
            currentPage: 0,
            prevPage: 0,
            nextPage: 1,
            rangeStart: 0,
            rangeEnd: 10
        });

        expect(paginationControl.controls[0].pageButtonsHolder.querySelector('[data-type="page"]').classList.contains('active')).toEqual(true);
    });

    it('pagination control lastButtons', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.controls[0].lastButtons).toBeDefined();
    });

    it('pagination control prevButtons', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.controls[0].prevButtons).toBeDefined();
    });

    it('pagination control nextButtons', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.controls[0].nextButtons).toBeDefined();
    });

    it('bootstrap pagination control with nav as root element', () => {

        const paginationControl = new PaginationControl('group1', 'name1');

        const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
            <nav
                 data-jplist-control="pagination"
                 data-group="group1"
                 data-name="name1"
                 data-items-per-page="5"
                 data-current-page="3">
                 
                <ul class="pagination">

                    <li class="page-item" data-type="first"><a class="page-link" href="#">«</a></li>
                    <li class="page-item" data-type="prev"><a class="page-link" href="#">‹</a></li>

                    <li class="page-item" data-type="page"><a class="page-link" href="#">{pageNumber}</a></li>

                    <li class="page-item" data-type="next"><a class="page-link" href="#">›</a></li>
                    <li class="page-item" data-type="last"><a class="page-link" href="#">»</a></li>
                </ul>
            </nav>
        `));

        paginationControl.addControl(basePaginationControl1);
        expect(paginationControl.currentPage).toEqual(3);
    });

    describe('Get Pagination Options', () => {

        it('1 pagination control currentPage', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.getPaginationOptions().currentPage).toEqual(10);
        });

        it('1 pagination control itemsPerPage', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.getPaginationOptions().itemsPerPage).toEqual(2);
        });

        it('2 pagination controls - the latest currentPage', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            const basePaginationControl2 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="100">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl2);

            expect(paginationControl.getPaginationOptions().currentPage).toEqual(100);
        });

        it('2 pagination controls - the latest itemsPerPage', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            const basePaginationControl2 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="20"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl2);

            expect(paginationControl.getPaginationOptions().itemsPerPage).toEqual(20);
        });
    });

    describe('Set Pagination Options', () => {

        it('1 pagination control should have 10 page buttons', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            paginationControl.setPaginationOptions({
                pagesNumber: 10,
                currentPage: 0,
                prevPage: 0,
                nextPage: 1,
                rangeStart: 0,
                rangeEnd: 9
            });

            expect(paginationControl.controls[0].element.querySelector('.jplist-holder').querySelectorAll('[data-page]').length).toEqual(10);
        });

        it('second page button should have data-selected="true"', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            paginationControl.setPaginationOptions({
                pagesNumber: 10,
                currentPage: 1,
                prevPage: 0,
                nextPage: 1,
                rangeStart: 0,
                rangeEnd: 10
            });

            const buttons = paginationControl.controls[0].element.querySelectorAll('[data-page]');

            expect(buttons[3].getAttribute('data-selected')).toEqual('true');
        });

        it('second page button should have jplist-selected class"', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            paginationControl.setPaginationOptions({
                pagesNumber: 10,
                currentPage: 1,
                prevPage: 0,
                nextPage: 1,
                rangeStart: 0,
                rangeEnd: 10
            });

            const buttons = paginationControl.controls[0].element.querySelectorAll('[data-page]');

            expect(buttons[3].classList.contains('jplist-selected')).toBeTruthy();
        });

        it('"first" button should have data-page="0" attribute', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            paginationControl.setPaginationOptions({
                pagesNumber: 10,
                currentPage: 1
            });

            const buttons = paginationControl.controls[0].element.querySelectorAll('[data-page]');

            expect(buttons[0].getAttribute('data-page')).toEqual('0');
        });

        it('"last" button should have data-page="9" attribute', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            paginationControl.setPaginationOptions({
                pagesNumber: 10,
                currentPage: 1,
                prevPage: 0,
                nextPage: 1,
                rangeStart: 0,
                rangeEnd: 9
            });

            const buttons = paginationControl.controls[0].element.querySelectorAll('[data-page]');

            expect(buttons[13].getAttribute('data-page')).toEqual('9');
        });

        it('"prev" button should have data-page="4" attribute', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            paginationControl.setPaginationOptions({
                pagesNumber: 10,
                currentPage: 5,
                prevPage: 4,
                nextPage: 6
            });

            const buttons = paginationControl.controls[0].element.querySelectorAll('[data-page]');

            expect(buttons[1].getAttribute('data-page')).toEqual('4');
        });

        it('"next" button should have data-page="6" attribute', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            paginationControl.setPaginationOptions({
                pagesNumber: 10,
                currentPage: 5,
                prevPage: 4,
                nextPage: 6,
                rangeStart: 0,
                rangeEnd: 9
            });

            const buttons = paginationControl.controls[0].element.querySelectorAll('[data-page]');

            expect(buttons[12].getAttribute('data-page')).toEqual('6');
        });
    });

    describe('Deep Link', () => {

        it('1 pagination control without data-id', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.getDeepLink()).toEqual('');
        });

        it('1 pagination control with data-id', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10"
                    data-id="paging">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.getDeepLink()).toEqual('paging=10-2');
        });

        it('2 pagination controls with the different data-id -> get the latest', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10"
                    data-id="paging">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);

            const basePaginationControl2 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10"
                    data-id="aaa">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl2);

            expect(paginationControl.getDeepLink()).toEqual('aaa=10-2');
        });

        it('pagination control has default current page = 10, but in deep link it = 5', () => {

            const map = new Map();
            map.set('group1', [
                {
                    key: 'paging',
                    value: '5-2'
                }
            ]);

            const paginationControl = new PaginationControl('group1', 'name1', [], map);

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10"
                    data-id="paging">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.currentPage).toEqual(5);
        });

        it('pagination control has default itemsPerPage = 2, but in deep link it = 7', () => {

            const map = new Map();
            map.set('group1', [
                {
                    key: 'paging',
                    value: '5-7'
                }
            ]);

            const paginationControl = new PaginationControl('group1', 'name1', [], map);

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="10"
                    data-id="paging">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.itemsPerPage).toEqual(7);
        });

    });

    describe('Items per page select', () => {

        it('items per page select should be defined', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
        
                    <select data-type="items-per-page">
                        <option value="3"> 3 per page </option>
                        <option value="5"> 5 per page </option>
                        <option value="10"> 10 per page </option>
                        <option value="0"> view all </option>
                    </select>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.controls[0].itemsPerPageSelects).toBeDefined();
        });
    });

    describe('Items per page dropdown', () => {

        it('items per page dropdown should be defined', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.controls[0].itemsPerPageDD).toBeDefined();
        });

        it('first dropdown should have dropdown property', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.controls[0].itemsPerPageDD[0].dropdown).toBeDefined();
        });

        it('second dropdown should have dropdown property', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                    
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.controls[0].itemsPerPageDD[1].dropdown).toBeDefined();
        });

        it('first dropdown should have buttons property', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.controls[0].itemsPerPageDD[0].buttons).toBeDefined();
        });

        it('first dropdown should have 4 buttons', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.controls[0].itemsPerPageDD[0].buttons.length).toEqual(4);
        });

        it('click on 5 items per page -> itemsPerPage property should = 5', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            paginationControl.controls[0].itemsPerPageDD[0].buttons[1].dispatchEvent(new Event('click'));
            expect(paginationControl.itemsPerPage).toEqual(5);
        });

        it('click on 5 items per page -> dropdown panel should have "5 per page" text', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                    <div
                        data-type="items-per-page-dd"
                        class="jplist-dd">
        
                        <div data-type="panel" class="jplist-dd-panel">Items per page</div>
                        <div data-type="content" class="jplist-dd-content">
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="3"
                                    data-selected="true"> 3 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="5"> 5 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="10"> 10 per page </div>
        
                            <div
                                    class="jplist-dd-item"
                                    data-value="0"> view all </div>
                        </div>
                    </div>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            paginationControl.controls[0].itemsPerPageDD[0].buttons[1].dispatchEvent(new Event('click'));
            expect(paginationControl.controls[0].itemsPerPageDD[0].dropdown.panels[0].textContent).toEqual(' 5 per page ');
        });
    });

    describe('Info labels', () => {

        it('labels should be defined', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
        
                    <select data-type="items-per-page">
                        <option value="3"> 3 per page </option>
                        <option value="5"> 5 per page </option>
                        <option value="10"> 10 per page </option>
                        <option value="0"> view all </option>
                    </select>
                    
                    <span data-type="info">
                        Page {pageNumber} of {pagesNumber}
                    </span>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            expect(paginationControl.controls[0].labels).toBeDefined();
        });

        it('labels macros', () => {

            const paginationControl = new PaginationControl('group1', 'name1');

            const basePaginationControl1 = new BasePaginationControl(generateHTMLElement(`
                <div
                        data-jplist-control="pagination"
                        data-group="group1"
                        data-name="name1"
                        data-items-per-page="2"
                        data-current-page="1">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <div class="jplist-holder" data-type="pages">
                        <button type="button" data-type="page">Page {pageNumber}</button>
                    </div>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
        
                    <select data-type="items-per-page">
                        <option value="3"> 3 per page </option>
                        <option value="5"> 5 per page </option>
                        <option value="10"> 10 per page </option>
                        <option value="0"> view all </option>
                    </select>
                    
                    <span data-type="info">{pageNumber},{pagesNumber},{startItem},{endItem},{itemsNumber}</span>
                </div>
            `));

            paginationControl.addControl(basePaginationControl1);
            paginationControl.setPaginationOptions({
                pagesNumber: 8,
                currentPage: 1,
                start: 2,
                end: 4,
                itemsNumber: 16
            });

            expect(paginationControl.controls[0].labels[0].innerHTML).toEqual('2,8,3,4,16');
        });
    });
});