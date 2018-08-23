/**
 * represents a group of controls with the same data-name and data-group attributes
 */
class BaseControlsGroup{

    /**
     * constructor
     * @param {string} group
     * @param {string} name
     * @param {Array.<BaseControl>} controls
     * @param {Map|null=} deepLinkParams - structure: [groupName, [{key, value}, ...]], ...
     */
    constructor(group, name, controls, deepLinkParams = null){

        this.group = (group || '').trim().toLowerCase();
        this.name = (name || 'default').trim();
        this.controls = controls || [];

        this.deepLinkParams = [];

        if(deepLinkParams && deepLinkParams.has(this.group)){

            this.deepLinkParams = deepLinkParams.get(this.group) || [];
        }
    }

    /**
     * add control to the group
     * @param {BaseControl} control
     */
    addControl(control){
        if(!control || control.name !== this.name || control.group !== this.group) return;

        this.controls.push(control);
    }

    /**
     * by default control's deep link is empty
     * @returns {string}
     */
    getDeepLink(){
        return '';
    }

}

export default BaseControlsGroup;