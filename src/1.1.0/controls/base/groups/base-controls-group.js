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

    /**
     * if multiple control in the group have data-jump attribute -> select the upper one
     * @return {string}
     */
    getJumpPath(){

        let selectedJumpPath = '';

        for(let control of this.controls){

            if(!control.jump) continue;

            //top is always the upper ))
            if(control.jump === 'top'){
               return 'top';
            }

            const el = document.querySelector(control.jump);

            if(!el) continue;

            const elRect = el.getBoundingClientRect();

            //make sure element is not hidden or disconnected
            if (!elRect.width && !elRect.height && !elRect.getClientRects().length) continue;

            if(!selectedJumpPath){

                //select the first data-jump as the default value
                selectedJumpPath = control.jump;
            }
            else{

                const prevEl = document.querySelector(selectedJumpPath);

                if(!prevEl) continue;

                const prevElRect = prevEl.getBoundingClientRect();

                //const elTop = elRect.top + window.pageYOffset - document.clientTop;
                //const elLeft = elRect.left + window.pageXOffset - document.clientLeft;
                //const prevElementTop = prevElRect.top + window.pageYOffset - document.clientTop;

                if(elRect.top < prevElRect.top){
                    selectedJumpPath = control.jump;
                }

            }
        }

        return selectedJumpPath;
    }

}

export default BaseControlsGroup;