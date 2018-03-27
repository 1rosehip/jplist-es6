import BaseTextFilterControlsGroup from '../../../base/groups/filter/base-text-filter-controls-group';

/**
 * text box filter control
 */
class TextboxFilterControl extends BaseTextFilterControlsGroup{

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
    }

    /**
     * add control to the group
     * @param {BaseTextFilterControl} control
     */
    addControl(control){

        const baseTextFilterControl = super.addControl(control);

        //check if control contains a link and it is in the deep links parameters
        if(baseTextFilterControl.id){

            const deepLinkParam = this.deepLinkParams.find(param => param.key === baseTextFilterControl.id);

            if(deepLinkParam){
                baseTextFilterControl.text = deepLinkParam.value;
                baseTextFilterControl.element.value = deepLinkParam.value;
            }
        }

        /**
         * on control event
         */
        baseTextFilterControl.element.addEventListener('keyup', e => {

            e.preventDefault();

            baseTextFilterControl.text = e.target.value;

            this.controls.forEach(control => {

                if(control.isEqualTo(baseTextFilterControl, false)){

                    control.element.value = baseTextFilterControl.text;
                    control.text = baseTextFilterControl.text;
                }
            });

            if(window.jplist) {

                window.jplist.refresh(this.group);
            }
        });
    }

}

export default TextboxFilterControl;