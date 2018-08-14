import BaseControlsGroup from '../base-controls-group';
import BaseTextFilterControl from '../../controls/filter/base-text-filter.control';

/**
 * represents a group of text filter controls with the same data-name and data-group attributes
 */
class BaseTextFilterControlsGroup extends BaseControlsGroup{

    /**
     * get text filter options from all controls in the group
     * @return {Array.<object>} text filter options
     */
    getTextFilterOptions(){

        let options = [];

        for(let control of this.controls){
            options = options.concat(control.getTextFilterOptions());
        }

        return options;
    }

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BaseTextFilterControl|null}
     */
    addControl(control){

        if(control.name !== this.name || control.group !== this.group){
            return null;
        }

        const baseTextFilterControl = new BaseTextFilterControl(control.element);

        this.controls.push(baseTextFilterControl);

        return baseTextFilterControl;
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){

        const dl = this.controls.map(control => control.id && control.text.trim() !== '' ? (control.id + '=' + control.text.trim()) : '').filter(str => str !== '');

        const unique = Array.from(new Set(dl));
        return unique.join('&');
    }
}

export default BaseTextFilterControlsGroup;
