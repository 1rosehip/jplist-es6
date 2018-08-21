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

            this.textChanged(baseTextFilterControl);
        });

        //handle clear button
        baseTextFilterControl.clearButtonID = (baseTextFilterControl.element.getAttribute('data-clear-btn-id') || '').trim();

        if(baseTextFilterControl.clearButtonID){

            const clearBtn = document.getElementById(baseTextFilterControl.clearButtonID);

            if(clearBtn){

                /**
                 * on clear button click
                 */
                clearBtn.addEventListener('click', e => {

                    e.preventDefault();

                    baseTextFilterControl.text = '';

                    this.textChanged(baseTextFilterControl);
                });
            }
        }
    }

    /**
     * on text change
     */
    textChanged(baseTextFilterControl){

        this.controls.forEach(control => {

            if(control.isEqualTo(baseTextFilterControl, false)){

                control.element.value = baseTextFilterControl.initialText;
                control.text = baseTextFilterControl.initialText;
            }
        });

        if(window.jplist) {

            window.jplist.refresh(this.group, baseTextFilterControl);
        }
    }

}

export default TextboxFilterControl;