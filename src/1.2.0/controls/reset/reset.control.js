import BaseControlsGroup from '../base/groups/base-controls-group';

/**
 * reset control
 */
class ResetControl extends BaseControlsGroup{

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BaseControl|null}
     */
    addControl(control){

        super.addControl(control);

        /**
         * on button click
         */
        control.element.addEventListener('click', (e) => {

            e.preventDefault();

            if(window.jplist) {

                window.jplist.resetControls(this.group, control);
            }

        }, false);
    }

}

export default ResetControl;