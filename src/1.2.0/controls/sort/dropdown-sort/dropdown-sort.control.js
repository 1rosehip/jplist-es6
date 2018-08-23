import BaseSortControlsGroup from '../../base/groups/sort/base-sort-controls-group';
import BaseSortControl from '../../base/controls/sort/base-sort.control';
import BaseDropdownControl from '../../base/controls/dropdown/base-dropdown.control';

/**
 * dropdown sort control
 */
class DropdownSortControl extends BaseSortControlsGroup{

    /**
     * constructor
     * @param {string} group
     * @param {string} name
     * @param {Array.<BaseControl>=} controls
     * @param {Map|null=} deepLinkParams - structure: [groupName, [{key, value}, ...]], ...
     */
    constructor(group, name, controls = [], deepLinkParams = null){
        super(group, name, controls, deepLinkParams);

        this.group = group;
        this.name = name;
        this.selected = null;
        this.id = '';
    }

    /**
     * add control to the group
     * @param {BaseSortControl} control
     */
    addControl(control){

        //a dropdown has the following custom properties:
        //  -- dropdown - custom dropdown behaviour, styles, classes
        //  -- buttons - the list of dropdown buttons, each of them is BaseSortControl
        const baseSortControl = super.addControl(control);

        //generate dropdown instance for the given control;
        //this instance adds dropdown classes, styles and behaviour
        baseSortControl.dropdown = new BaseDropdownControl(control.element);
        baseSortControl.buttons = [];

        //each button inside dropdown is a separate sort control that defined by data-path attribute;
        //they are stored in baseSortControl.buttons array
        let buttons = baseSortControl.element.querySelectorAll('[data-path]');

        for(let button of buttons){

            //all buttons inherits data-name and data-group attributes of the root dropdown
            button.setAttribute('data-name', this.name);
            button.setAttribute('data-group', this.group);
            button.setAttribute('data-jump', baseSortControl.jump);

            let btnSortControl = new BaseSortControl(button);

            //save newly created button in the baseSortControl.buttons array
            baseSortControl.buttons.push(btnSortControl);

            /**
             * on control button click -> update the selected control
             */
            btnSortControl.element.addEventListener('click', e => {

                e.preventDefault();

                //clicked button should be the selected one
                this.selected = btnSortControl;

                this.setSelectedButton(baseSortControl);

                for(let control of this.controls){
                    if(control.dropdown){
                        control.dropdown.close();
                    }
                }

                if(window.jplist) {

                    window.jplist.refresh(this.group, btnSortControl);
                }
            });
        }

        this.selected = DropdownSortControl.getSelectedButton(baseSortControl.buttons);
        this.setSelectedButton(baseSortControl);

        //check if control contains a link and it is in the deep links parameters
        if(baseSortControl.id){

            this.id = baseSortControl.id;

            const deepLinkParam = this.deepLinkParams.find(param => param.key === baseSortControl.id);

            if(deepLinkParam){

                const deepLinkBtn = baseSortControl.buttons.find(btn => {

                    const btnValue = btn.element.getAttribute('data-value');
                    return (deepLinkParam.value === btnValue) ? btn : null;
                });

                if(deepLinkBtn) {
                    this.selected = deepLinkBtn;
                    this.setSelectedButton(baseSortControl);
                }
            }
        }
    }

    /**
     * get sort options from all controls in the group
     * @return {Array.<object>} sortOptions
     */
    getSortOptions(){

        if(this.selected){
            return this.selected.getSortOptions();
        }

        return [];
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){

        if(this.id && this.selected){
            return this.id + '=' + this.selected.element.getAttribute('data-value') || '';
        }

        return '';
    }

    /**
     * get selected button that has data-selected="true" data attribute;
     * if there is no data-selected attribute -> take the first button
     * @param {Array.<BaseSortControl>} buttons
     * @return {BaseSortControl|null}
     */
    static getSelectedButton(buttons){

        if(buttons.length <= 0) return null;

        for(let button of buttons){
            if(button.element.getAttribute('data-selected') === 'true'){
                return button;
            }
        }

        return buttons[0];
    }

    /**
     * set selected button
     * @param {BaseSortControl} baseSortControl
     */
    setSelectedButton(baseSortControl){

        for(let control of this.controls){

            if(!control.dropdown) continue;

            //verify that dropdown has such button
            const dropdownBtn = baseSortControl.buttons.find(btn => this.selected.isEqualTo(btn));

            if(dropdownBtn){

                //update dropdown panels value
                control.dropdown.setPanelsContent(dropdownBtn.element.textContent);
            }
        }
    }
}

export default DropdownSortControl;