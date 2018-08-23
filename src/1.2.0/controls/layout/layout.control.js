import BaseControlsGroup from '../base/groups/base-controls-group';

const SELECTED_CLASS = 'jplist-selected';

/**
 * layout control
 */
class LayoutControl extends BaseControlsGroup{

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

        this.classNames = new Set();
        this.selectedClassName = '';
    }

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BaseControl|null}
     */
    addControl(control){

        super.addControl(control);

        control.groupClassName = control.element.getAttribute('data-class') || '';
        control.selected = control.element.getAttribute('data-selected') === 'true';

        //check if control contains a link and it is in the deep links parameters
        if(control.id){

            const deepLinkParam = this.deepLinkParams.find(param => param.key === control.id);

            if(deepLinkParam){
                control.selected = deepLinkParam.value === '1';
            }
            //else{
                //control.selected = false;
            //}
        }

        this.classNames.add(control.groupClassName);

        /**
         * on button click
         */
         control.element.addEventListener('click', (e) => {

             e.preventDefault();

             this.handleSelectedControls(control.groupClassName);

             this.handleClasses();

             if(window.jplist) {

                 window.jplist.refresh(this.group, control);
             }

         }, false);

        this.handleClasses();
    }

    /**
     * add / remove buttons classes
     */
     handleClasses(){

        const groups = document.querySelectorAll('[data-jplist-group="' + this.group + '"]');

        //remove classes from all groups
        this.resetAllGroups(groups);

        let selected = this.getLatestSelectedControl();

        if(!selected) return;

        this.handleSelectedControls(selected.groupClassName);

        //add specified class name to each group
        LayoutControl.addClassToGroups(selected.groupClassName, groups);
    }

    /**
     * get the latest selected control
     * @return {BaseControl} selected control
     */
     getLatestSelectedControl(){

        let selected = null;

        for(let control of this.controls){

            if(control.selected){
                selected = control;
            }
        }

        if(!selected && this.controls.length > 0){
            selected = this.controls[0];
        }

        return selected;
    }

    /**
     * remove classes from all groups
     * @param {NodeList} groups
     */
     resetAllGroups(groups){

        for(let group of groups){

            //remove all classes
            for(let cn of this.classNames){
                group.classList.remove(cn);
            }
        }
    }

    /**
     * handle selected controls
     * @param {string} selectedGroupClassName
     */
     handleSelectedControls(selectedGroupClassName){

        for(let control of this.controls){

            if(control.groupClassName === selectedGroupClassName){
                control.selected = true;
                control.element.classList.add(SELECTED_CLASS);
            }
            else{
                control.selected = false;
                control.element.classList.remove(SELECTED_CLASS);
            }
        }
    }

    /**
     * add specified class name to each group
     * @param {string} groupClassName
     * @param {NodeList} groups
     */
    static addClassToGroups(groupClassName, groups){

        for(let group of groups){

            //add class if needed
            group.classList.add(groupClassName);
        }
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){
        const arr = this.controls.map(control => {

            if(control.id){
                return control.selected ? control.id + '=1' : control.id + '=0';
            }
            else{
                return '';
            }

        }).filter(str => str !== '');
        const unique = Array.from(new Set(arr));
        return unique.join('&');
    }
}

export default LayoutControl;