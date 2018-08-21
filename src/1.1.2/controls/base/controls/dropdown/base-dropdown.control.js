import './base-dropdown.control.css';

/**
 * base dropdown control
 */
class BaseDropdownControl{


    /**
     * control type defined in data-jplist-control attribute;
     * for example, data-jplist-control="hidden-sort" has type='hidden-sort'
     * @param {HTMLElement} element
     */
    constructor(element){

        if(element) {

            this.element = element;

            if(!this.element) return;

            //dropdown panel elements defined by data-type="panel" data attribute; can be multiple;
            this.panels = this.element.querySelectorAll('[data-type="panel"]');
            this.element.openedClass = (this.element.getAttribute('data-opened-class') || 'jplist-dd-opened').trim();

            //keep panels initial html
            for(let panel of this.panels){
                panel.initialContent = panel.innerHTML;
                panel.element = element;
            }

            //dropdown content elements defined by data-type="content" data attribute; can be multiple;
            this.contents = this.element.querySelectorAll('[data-type="content"]');

            //handle panels onclick event
            this.handlePanelsClick();
        }
    }

    /**
     * handle panels onclick event
     */
    handlePanelsClick(){

        if(!this.panels || this.panels.length <= 0) return;

        for(let panel of this.panels){

            /**
             * on panel click
             */
            panel.addEventListener('click', e => {

                //e.stopPropagation();

                let atLeastOnePanelIsOpened = false;

                for(let dropdownContent of this.contents){

                    dropdownContent.classList.toggle(panel.element.openedClass);

                    if(dropdownContent.classList.contains(panel.element.openedClass)){
                        atLeastOnePanelIsOpened = true;
                    }
                }

                if(atLeastOnePanelIsOpened){
                    panel.classList.add(panel.element.openedClass);
                    panel.element.classList.add(panel.element.openedClass);
                }
                else{
                    panel.classList.remove(panel.element.openedClass);
                    panel.element.classList.remove(panel.element.openedClass);
                }
            });
        }

        /**
         * close dropdowns on body click
         */
        document.addEventListener('click', e => {

            if (!this.element.contains(e.target)) { // or use: event.target.closest(selector) === null

                this.close();
            }
        });
    }

    /**
     * set panels content
     * @param {string} content
     */
    setPanelsContent(content){

        for(let panel of this.panels){
            panel.innerHTML = content;
        }
    }

    /**
     * restore panels content
     */
    restorePanelsContent(){

        for(let panel of this.panels){

            if(panel.initialContent) {
                panel.innerHTML = panel.initialContent;
            }
        }
    }

    /**
     * close dropdown
     */
    close(){
        for(let dropdownContent of this.contents){

            dropdownContent.classList.remove(this.panels[0].element.openedClass);
        }

        for(let panel of this.panels){
            panel.classList.remove(panel.element.openedClass);
            panel.element.classList.remove(panel.element.openedClass);
        }
    }
}

export default BaseDropdownControl;