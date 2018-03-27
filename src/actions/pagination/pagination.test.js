import PaginationAction from './pagination.action';

describe('Pagination', function(){

    it('if items number is NaN -> it should be 0', function(){

        const pagination = new PaginationAction(0, 10, 'aaa');
        expect(pagination.itemsNumber).toEqual(0);
    });

    it('if items number is NaN -> it should be 0', function(){

        const pagination = new PaginationAction(0, 10, undefined);
        expect(pagination.itemsNumber).toEqual(0);
    });

    it('if items number is NaN -> it should be 0', function(){

        const pagination = new PaginationAction(0, 10, null);
        expect(pagination.itemsNumber).toEqual(0);
    });

    it('if items number is numeric -> it should be this number', function(){

        const pagination = new PaginationAction(0, 10, 100);
        expect(pagination.itemsNumber).toEqual(100);
    });

    it('if items on page is numeric -> it should be this number', function(){

        const pagination = new PaginationAction(0, 10, 100);
        expect(pagination.itemsPerPage).toEqual(10);
    });

    it('if items on page is NaN -> it should has itemsNumber value', function(){

        const pagination = new PaginationAction(0, 'aaa', 100);
        expect(pagination.itemsPerPage).toEqual(100);
    });

    it('if items on page is NaN -> it should has itemsNumber value', function(){

        const pagination = new PaginationAction(0, undefined, 100);
        expect(pagination.itemsPerPage).toEqual(100);
    });

    it('if items on page is NaN -> it should has itemsNumber value', function(){

        const pagination = new PaginationAction(0, null, 100);
        expect(pagination.itemsPerPage).toEqual(100);
    });

    it('if itemsPerPage=0 -> change it to the itemsPerPage', function(){

        const pagination = new PaginationAction(0, 0, 100);
        expect(pagination.itemsPerPage).toEqual(100);
    });

    it('if itemsPerPage=0 -> change it to the itemsPerPage -> pagesNumber should be 1', function(){

        const pagination = new PaginationAction(0, 0, 100);
        expect(pagination.pagesNumber).toEqual(1);
    });

    it('pagesNumber should be 10', function(){

        const pagination = new PaginationAction(0, 10, 100);
        expect(pagination.pagesNumber).toEqual(10);
    });

    it('if current page is NaN -> it should be 0', function(){

        const pagination = new PaginationAction('aaa', 10, 100);
        expect(pagination.currentPage).toEqual(0);
    });

    it('if current page is NaN -> it should be 0', function(){

        const pagination = new PaginationAction(undefined, 10, 100);
        expect(pagination.currentPage).toEqual(0);
    });

    it('if current page is NaN -> it should be 0', function(){

        const pagination = new PaginationAction(null, 10, 100);
        expect(pagination.currentPage).toEqual(0);
    });

    it('current page should be 3', function(){

        const pagination = new PaginationAction(3, 10, 100);
        expect(pagination.currentPage).toEqual(3);
    });

    it('if current page > pages number -> it should be 0', function(){

        const pagination = new PaginationAction(11, 10, 100);
        expect(pagination.currentPage).toEqual(0);
    });

    it('if current page > pages number -> it should be 0', function(){

        const pagination = new PaginationAction(10, 10, 100);
        expect(pagination.currentPage).toEqual(0);
    });

    it('current page should be 9', function(){

        const pagination = new PaginationAction(9, 10, 100);
        expect(pagination.currentPage).toEqual(9);
    });

    it('start should be 0', function(){

        const pagination = new PaginationAction(0, 10, 100);
        expect(pagination.start).toEqual(0);
    });

    it('start should be 30', function(){

        const pagination = new PaginationAction(3, 10, 100);
        expect(pagination.start).toEqual(30);
    });

    it('end should be 40', function(){

        const pagination = new PaginationAction(3, 10, 100);
        expect(pagination.end).toEqual(40);
    });

    it('end should be 0', function(){

        const pagination = new PaginationAction(0, 10, 100);
        expect(pagination.end).toEqual(10);
    });

    it('prev page should be 0', function(){

        const pagination = new PaginationAction(0, 10, 100);
        expect(pagination.prevPage).toEqual(0);
    });

    it('prev page should be 0', function(){

        const pagination = new PaginationAction(1, 10, 100);
        expect(pagination.prevPage).toEqual(0);
    });

    it('prev page should be 2', function(){

        const pagination = new PaginationAction(3, 10, 100);
        expect(pagination.prevPage).toEqual(2);
    });

    it('next page should be 0', function(){

        const pagination = new PaginationAction(0, 10, 0);
        expect(pagination.nextPage).toEqual(0);
    });

    it('next page should be 0', function(){

        const pagination = new PaginationAction(0, 0, 100);
        expect(pagination.nextPage).toEqual(0);
    });

    it('next page should be 9', function(){

        const pagination = new PaginationAction(9, 10, 100);
        expect(pagination.nextPage).toEqual(9);
    });

    it('next page should be 4', function(){

        const pagination = new PaginationAction(3, 10, 100);
        expect(pagination.nextPage).toEqual(4);
    });

    it('next page should be 0', function(){

        const pagination = new PaginationAction(0, 0, 0);
        expect(pagination.nextPage).toEqual(0);
    });
});
