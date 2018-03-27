/**
 * pagination
 */
class PaginationAction{

    /**
     * Pagination
     * @constructor
     * @param {number} currentPage
     * @param {number} itemsPerPage
     * @param {number} itemsNumber
     */
    constructor(currentPage, itemsPerPage, itemsNumber){

        this.itemsNumber = Number(itemsNumber) || 0;
        this.itemsPerPage = Number.isInteger(itemsPerPage) ? Number(itemsPerPage) : this.itemsNumber;

        if(this.itemsPerPage === 0){
            this.itemsPerPage = itemsNumber;
        }

        this.pagesNumber = this.itemsPerPage === 0 ? 0 : Math.ceil(this.itemsNumber/this.itemsPerPage);

        //validate current page
        this.currentPage = Number(currentPage) || 0;

        if(this.currentPage > this.pagesNumber - 1){
            this.currentPage = 0;
        }

        this.start = this.currentPage * this.itemsPerPage;
        this.end = this.start + this.itemsPerPage;

        //validate the end
        if(this.end > this.itemsNumber){
            this.end = this.itemsNumber;
        }

        this.prevPage = this.currentPage <= 0 ? 0 : this.currentPage - 1;
        this.nextPage = this.pagesNumber === 0 ? 0 : (this.currentPage >= this.pagesNumber - 1 ? this.pagesNumber - 1 : this.currentPage + 1);
    }
}

export default PaginationAction;