import BasePathFilterControlsGroup from '../../../base/groups/filter/base-path-filter-controls-group';
import BasePathFilterControl from '../../../base/controls/filter/base-path-filter.control';
import BaseDropdownControl from '../../../base/controls/dropdown/base-dropdown.control';

/**
 * dropdown filter control
 */
class DropdownFilterControl extends BasePathFilterControlsGroup{

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
        this.selected = '';
        this.id = '';
    }

    /**
     * add control to the group
     * @param {BasePathFilterControl} control
     */
    addControl(control){

        //a dropdown has the following custom properties:
        //  -- dropdown - custom dropdown behaviour, styles, classes
        //  -- buttons - the list of dropdown buttons, each of them is BaseSortControl
        const basePathFilterControl = super.addControl(control);

        //generate dropdown instance for the given control;
        //this instance adds dropdown classes, styles and behaviour
        basePathFilterControl.dropdown = new BaseDropdownControl(control.element);
        basePathFilterControl.buttons = [];

        //each button inside dropdown is a separate path filter control that defined by data-path attribute;
        //they are stored in basePathFilterControl.buttons array
        let buttons = basePathFilterControl.element.querySelectorAll('[data-path]');

        for(let button of buttons){

            button.setAttribute('data-name', this.name);
            button.setAttribute('data-group', this.group);
            button.setAttribute('data-jump', basePathFilterControl.jump);

            let btnPathFilterControl = new BasePathFilterControl(button);

            //save newly created button in the basePathFilterControl.buttons array
            basePathFilterControl.buttons.push(btnPathFilterControl);

            /**
             * on control button click -> update the selected control
             */
            btnPathFilterControl.element.addEventListener('click', e => {

                e.preventDefault();

                //clicked button should be the selected one
                this.selected = btnPathFilterControl;

                this.setSelectedButton(basePathFilterControl);

                if(window.jplist) {

                    window.jplist.refresh(this.group, btnPathFilterControl);
                }
            });
        }

        this.selected = DropdownFilterControl.getSelectedButton(basePathFilterControl.buttons);
        this.setSelectedButton(basePathFilterControl);

        //check if control contains a link and it is in the deep links parameters
        if(basePathFilterControl.id){

            this.id = basePathFilterControl.id;

            const deepLinkParam = this.deepLinkParams.find(param => param.key === basePathFilterControl.id);

            if(deepLinkParam){

                const deepLinkBtn = basePathFilterControl.buttons.find(btn => {

                    const btnValue = btn.element.getAttribute('data-value');
                    return (deepLinkParam.value === btnValue) ? btn : null;
                });

                if(deepLinkBtn) {
                    this.selected = deepLinkBtn;
                    this.setSelectedButton(basePathFilterControl);
                }
            }
        }
    }

    /**
     * get path filter options from all controls in the group
     * @return {Array.<object>} pathFilterOptions
     */
    getPathFilterOptions(){

        if(this.selected){
            return [this.selected.getPathFilterOptions()];
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
     * @param {Array.<BasePathFilterControl>} buttons
     * @return {BasePathFilterControl|null}
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
     * @param {BasePathFilterControl} basePathFilterControl
     */
    setSelectedButton(basePathFilterControl){

        for(let control of this.controls){

            if(!control.dropdown) continue;

            //verify that dropdown has such button
            const dropdownBtn = basePathFilterControl.buttons.find(btn => this.selected.isEqualTo(btn));

            if(dropdownBtn){

                //update dropdown panels value
                control.dropdown.setPanelsContent(dropdownBtn.element.textContent);
            }

            control.dropdown.close();
        }
    }

}

export default DropdownFilterControl;