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

            //keep panels initial html
            for(let panel of this.panels){
                panel.initialContent = panel.innerHTML;
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

        if(!this.panels) return;

        for(let panel of this.panels){

            /**
             * on panel click
             */
            panel.addEventListener('click', e => {

                e.stopPropagation();

                let atLeastOnePanelIsOpened = false;

                for(let dropdownContent of this.contents){

                    dropdownContent.classList.toggle('jplist-dd-visible');

                    if(dropdownContent.classList.contains('jplist-dd-visible')){
                        atLeastOnePanelIsOpened = true;
                    }
                }

                if(atLeastOnePanelIsOpened){
                    panel.classList.add('jplist-dd-opened');
                }
                else{
                    panel.classList.remove('jplist-dd-opened');
                }
            });

            /**
             * close dropdowns on body click
             */
            document.body.addEventListener('click', e => {

                for(let dropdownContent of this.contents){

                    dropdownContent.classList.remove('jplist-dd-visible');
                }

                for(let panel of this.panels){
                    panel.classList.remove('jplist-dd-opened');
                }
            });
        }
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
}

export default BaseDropdownControl;