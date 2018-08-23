import BasePaginationControlsGroup from '../base/groups/pagination/base-pagination-controls-group';
import BaseDropdownControl from '../base/controls/dropdown/base-dropdown.control';

/**
 * pagination control
 */
class PaginationControl extends BasePaginationControlsGroup{

    /**
     * constructor
     * @param {string} group
     * @param {string} name
     * @param {Array.<BaseControl>=} controls
     * @param {Map|null=} deepLinkParams - structure: [groupName, [{key, value}, ...]], ...
     */
    constructor(group, name, controls = [], deepLinkParams = null){
        super(group, name, controls, deepLinkParams);

        this.currentPage = 0;
        this.itemsPerPage = 0;
        this.range = 0;
        this.id = '';
    }

    /**
     * add control to the group
     * @param {BasePaginationControl} control
     */
    addControl(control){

        const basePaginationControl = super.addControl(control);

        //update properties - we take them from the latest pagination control in the group
        this.currentPage = basePaginationControl.currentPage;
        this.itemsPerPage = Number(basePaginationControl.itemsPerPage) || 0;
        this.range = basePaginationControl.range;

        //restore control state from the deep link value if needed
        this.restoreFromDeepLink(basePaginationControl);

        //this template is used for generating pagination buttons
        basePaginationControl.pageButtonsHolder = basePaginationControl.element.querySelector('[data-type="pages"]');

        if(basePaginationControl.pageButtonsHolder){
            basePaginationControl.btnTemplate = basePaginationControl.pageButtonsHolder.innerHTML;
        }

        //first, last, next and prev button
        basePaginationControl.firstButtons = basePaginationControl.element.querySelectorAll('[data-type="first"]');
        basePaginationControl.lastButtons = basePaginationControl.element.querySelectorAll('[data-type="last"]');
        basePaginationControl.prevButtons = basePaginationControl.element.querySelectorAll('[data-type="prev"]');
        basePaginationControl.nextButtons = basePaginationControl.element.querySelectorAll('[data-type="next"]');

        //event handlers
        PaginationControl.bindEventHandler(basePaginationControl.firstButtons, 'click', this.pageButtonClick.bind(this), basePaginationControl);
        PaginationControl.bindEventHandler(basePaginationControl.lastButtons, 'click', this.pageButtonClick.bind(this), basePaginationControl);
        PaginationControl.bindEventHandler(basePaginationControl.prevButtons, 'click', this.pageButtonClick.bind(this), basePaginationControl);
        PaginationControl.bindEventHandler(basePaginationControl.nextButtons, 'click', this.pageButtonClick.bind(this), basePaginationControl);

        //items per page select
        basePaginationControl.itemsPerPageSelects = Array.from(basePaginationControl.element.querySelectorAll('[data-type="items-per-page"]'));
        this.updateItemsPerPageSelect(basePaginationControl.itemsPerPageSelects);

        //items per page custom drop downs
        basePaginationControl.itemsPerPageDD = Array.from(basePaginationControl.element.querySelectorAll('[data-type="items-per-page-dd"]'));
        this.initCustomDropdowns(basePaginationControl);

        PaginationControl.bindEventHandler(basePaginationControl.itemsPerPageSelects, 'change', this.selectChange.bind(this), basePaginationControl);

        //information labels
        basePaginationControl.labels = basePaginationControl.element.querySelectorAll('[data-type="info"]');

        if(basePaginationControl.labels) {
            for (let label of basePaginationControl.labels) {
                label.template = label.innerHTML;
            }
        }
    }

    /**
     * update items per page value of select group
     * @param {Array.<HTMLElement>} selects
     */
    updateItemsPerPageSelect(selects){

        for(let select of selects){

            const option = Array.from(select.options).find(option => option.value === this.itemsPerPage.toString());

            if(option) {
                select.value = Number(this.itemsPerPage) || 0;
            }
            else{
                select.value = 0;
            }
        }
    }

    /**
     * init custom dropdowns
     * @param {BasePaginationControl} basePaginationControl
     */
    initCustomDropdowns(basePaginationControl){

        //@param {HTMLCollection} itemsPerPageDD
        const itemsPerPageDD = basePaginationControl.itemsPerPageDD;

        if(!itemsPerPageDD || itemsPerPageDD.length <=0) return;

        for(let dd of itemsPerPageDD){

            //create dropdown instance for each dd HTML structure;
            //this instance adds dropdown classes, styles and behaviour
            dd.dropdown = new BaseDropdownControl(dd);

            //all dropdown buttons are keeps as buttons property
            dd.buttons = Array.from(dd.querySelectorAll('[data-value]'));

            for(let button of dd.buttons){

                button.addEventListener('click', (e) => {

                    e.preventDefault();

                    this.itemsPerPage = Number(button.getAttribute('data-value')) || 0;

                    //set selected button in all dropdowns for the current this.itemsPerPage value
                    this.setSelectedButton();

                    dd.dropdown.close();

                    if(window.jplist) {

                        window.jplist.refresh(this.group, basePaginationControl);
                    }
                });
            }
        }

        //set selected button in all dropdowns for the current this.itemsPerPage value
        this.setSelectedButton();
    }

    // --------------------- BUTTONS ---------------------

    /**
     * set selected button in all dropdowns for the current this.itemsPerPage value
     */
    setSelectedButton(){

        for(let control of this.controls){

            if(!control.itemsPerPageDD) continue;

            for(let dd of control.itemsPerPageDD){

                if(!dd.buttons) continue;

                let selectedButton = dd.buttons.find(button => {

                    const btnValue = Number(button.getAttribute('data-value')) || 0;
                    return btnValue === this.itemsPerPage;
                });

                if(!selectedButton){

                    selectedButton = dd.buttons.find(button => {
                        const btnValue = Number(button.getAttribute('data-value')) || 0;
                        return btnValue === 0;
                    });
                }

                if(selectedButton){

                    dd.dropdown.setPanelsContent(selectedButton.textContent);
                }
            }
        }
    }

    // --------------------- OPTIONS ---------------------

    /**
     * there can be only 1 pagination options object;
     * in case of multiple -> get the latest
     * @return {object} pagination options
     */
    getPaginationOptions(){

        return {
            itemsPerPage: this.itemsPerPage,
            currentPage: this.currentPage,
            range: this.range
        };
    }

    /**
     * update controls according to the pagination options calculated using PaginationAction class;
     * @param {PaginationAction} paginationOptions
     */
    setPaginationOptions(paginationOptions){

        if(!paginationOptions) return;

        //update properties
        this.currentPage = paginationOptions.currentPage;
        this.itemsPerPage = paginationOptions.itemsPerPage;

        for(let control of this.controls){

            if(!control.btnTemplate || !control.pageButtonsHolder) continue;

            //remove all old buttons
            while (control.pageButtonsHolder.firstChild) {
                control.pageButtonsHolder.removeChild(control.pageButtonsHolder.firstChild);
            }

            //generate new buttons
            for (let i = paginationOptions.rangeStart; i <= paginationOptions.rangeEnd; i++) {

                //update button text macros and button attributes
                const div = document.createElement('div');
                div.innerHTML = control.btnTemplate.replace(new RegExp('{pageNumber}', 'g'), (i+1)).trim();
                const pageButton = div.firstChild;

                let btn = pageButton.querySelector('[data-type="page"]');
                if(!btn){
                    btn = pageButton;
                }

                btn.setAttribute('data-page', i.toString());

                if(i === this.currentPage){

                    btn.classList.add(control.selectedClass);
                    btn.setAttribute('data-selected', 'true');
                }

                //on page button click event handler
                btn.addEventListener('click', (e) => { this.pageButtonClick(e, btn, control); });

                //add button to the buttons holder
                control.pageButtonsHolder.appendChild(pageButton);
            }

            //update data-page attribute of first, last, prev and next buttons
            PaginationControl.setPageAttr(control.firstButtons, 0, this.currentPage !== 0, control.disabledClass);

            PaginationControl.setPageAttr(control.lastButtons,
                paginationOptions.pagesNumber - 1,
                this.currentPage !== paginationOptions.pagesNumber - 1,
                control.disabledClass);

            PaginationControl.setPageAttr(control.prevButtons,
                paginationOptions.prevPage,
                this.currentPage !== 0,
                control.disabledClass);

            PaginationControl.setPageAttr(control.nextButtons,
                paginationOptions.nextPage,
                this.currentPage !== paginationOptions.pagesNumber - 1,
                control.disabledClass);

            const infos = [
                {key: '{pageNumber}', value: paginationOptions.currentPage + 1},
                {key: '{pagesNumber}', value: paginationOptions.pagesNumber},
                {key: '{startItem}', value: paginationOptions.start + 1},
                {key: '{endItem}', value: paginationOptions.end},
                {key: '{itemsNumber}', value: paginationOptions.itemsNumber}
            ];

            //update information labels
            if(control.labels) {
                for (let label of control.labels) {

                    if(!label.template) continue;

                    let html = label.template;

                    for(let info of infos){
                        html = html.replace(new RegExp(info.key, 'g'), info.value);
                    }

                    label.innerHTML = html;
                }
            }

            //update whole control classes
            const classesToRemove = (Array.from(control.element.classList)).filter(className => className.startsWith('jplist-pages-number-') || className.startsWith('jplist-items-number-'));

            for(let className of classesToRemove){
                control.element.classList.remove(className);
            }

            control.element.classList.add('jplist-pages-number-' + paginationOptions.pagesNumber);
            control.element.classList.add('jplist-items-number-' + paginationOptions.itemsNumber);
        }
    }

    // --------------------- EVENT HANDLERS ---------------------

    /**
     * page, first, last, prev and next button onclick handler
     * @param {HTMLElement} btn
     * @param {BasePaginationControl} control
     */
    pageButtonClick(e, btn, control){

        if(e) {
            e.preventDefault();
        }

        const pageNumber = btn ? btn.getAttribute('data-page') : e.target.getAttribute('data-page');
        this.currentPage = Number(pageNumber) || 0;

        if(window.jplist) {

            window.jplist.refresh(this.group, control);
        }
    }

    /**
     * on items per page select change
     * @param {object} e
     * @param {HTMLElement} select
     * @param {BasePaginationControl} basePaginationControl
     */
    selectChange(e, select, basePaginationControl){

        e.preventDefault();

        const itemsPerPage = Number(e.target.value);

        if(!isNaN(itemsPerPage)){

            this.itemsPerPage = itemsPerPage;

            //update the selected values of all controls
            for(let control of this.controls){
                this.updateItemsPerPageSelect(control.itemsPerPageSelects);
            }
        }

        if(window.jplist) {

            window.jplist.refresh(this.group, basePaginationControl);
        }
    }

    // --------------------- DEEP LINK ---------------------

    /**
     * restore control state from the deep link value
     * @param {BasePaginationControl} basePaginationControl
     */
    restoreFromDeepLink(basePaginationControl){

        if(basePaginationControl.id){

            this.id = basePaginationControl.id;

            const deepLinkParam = this.deepLinkParams.find(param => param.key === basePaginationControl.id);

            if(deepLinkParam){

                const parts = deepLinkParam.value.split('-');

                if(parts.length !== 2) return;

                const currentPage = Number(parts[0]);
                const itemsPerPage = Number(parts[1]);

                if(isNaN(currentPage) || isNaN(itemsPerPage)) return;

                this.currentPage = currentPage;
                this.itemsPerPage = itemsPerPage;
            }
        }
    }

    /**
     * by default control's deep link is empty
     * @returns {string}
     */
    getDeepLink(){

        if(this.id){
            return this.id + '=' + this.currentPage + '-' + this.itemsPerPage;
        }

        return '';
    }

    // --------------------- HELPERS ---------------------

    /**
     * update page button attributes and styles of the elements collection
     * @param {HTMLCollection} items
     * @param {number} page
     * @param {boolean} isEnabled
     * @param {string} disabledClass
     */
    static setPageAttr(items, page, isEnabled, disabledClass){

        if(!items) return;

        for(let item of items){
            item.setAttribute('data-page', page);

            if(isEnabled){
                item.classList.remove(disabledClass);
            }
            else{
                item.classList.add(disabledClass);
            }
        }
    }

    /**
     * bind event handler to the items collection
     * @param {HTMLCollection} items
     * @param {string} eventName
     * @param {Function} func
     * @param {BasePaginationControl} basePaginationControl
     */
    static bindEventHandler(items, eventName, func, basePaginationControl){

        if(!items) return;

        for(let item of items){
            item.addEventListener(eventName, (e) => {func(e, item, basePaginationControl); });
        }
    }
}

export default PaginationControl;