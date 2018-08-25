import BaseControlsGroup from '../base/groups/base-controls-group';
import FilterAction from "../../actions/filter/filter.action";
import BasePathFilterControl from "../base/controls/filter/base-path-filter.control";
import BaseTextFilterControl from "../base/controls/filter/base-text-filter.control";
import BaseRangeFilterControl from "../base/controls/filter/base-range-filter.control";

/**
 * counter control
 * Example:
 * <span
     data-jplist-control="counter"
     data-group="group1"
     data-format="({count})"
     data-path=".title"
     data-mode="dynamic"
     data-name="counter-title-filter"
     data-filter-type="path"></span>
 */
class CounterControl extends BaseControlsGroup{

    /**
     * get dynamic counter value
     * @param {Array.<HTMLElement>} filtered
     * @param {BaseControl} baseFilterControl
     * @param {string} filterType - text, path or range
     * @return {number} count
     */
    static getDynamicCounterValue(baseFilterControl, filterType, filtered){

        let count = 0;

        filtered = CounterControl.getFilteredItems(baseFilterControl, filterType, filtered);

        return filtered.length;
    }

    /**
     * get static counter value
     * @param {BaseControl} baseFilterControl
     * @param {string} filterType - text, path or range
     * @param {Array.<object>} group
     * @return {number} count
     */
    static getStaticCounterValue(baseFilterControl, filterType, group){

        let count = 0;

        //there can be more than one block of items with the same group name
        //each itemsBlock has structure: {root: HTMLElement, items: Array.<HTMLElement>}
        for(let itemsBlock of group){

            let filtered = itemsBlock.items;

            filtered = CounterControl.getFilteredItems(baseFilterControl, filterType, filtered);

            count += filtered.length;
        }

        return count;
    }

    /**
     * get filtered items
     * @param {BaseControl} baseFilterControl
     * @param {string} filterType - text, path or range
     * @param {Array.<HTMLElement>} filtered
     * @return {Array.<HTMLElement>}
     */
    static getFilteredItems(baseFilterControl, filterType, filtered){

        switch(filterType){
            case 'text' : {
                filtered = FilterAction.textFilter(
                    filtered,
                    baseFilterControl.text,
                    baseFilterControl.path,
                    baseFilterControl.mode,
                    baseFilterControl.regex);
                break;
            }

            case 'path' : {
                filtered = FilterAction.pathFilter(filtered,
                    baseFilterControl.path,
                    baseFilterControl.isInverted);
                break;
            }

            case 'range' : {
                filtered = FilterAction.rangeFilter(filtered,
                    baseFilterControl.path,
                    baseFilterControl.from,
                    baseFilterControl.to,
                    baseFilterControl.min,
                    baseFilterControl.max);
                break;
            }
        }

        return filtered;
    }

    /**
     * render control HTML
     * @param {number} countValue
     */
    render(countValue){

        for(let control of this.controls){

            control.element.innerHTML = control.format.replace('{count}', countValue);
        }
    }

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BaseControl|null}
     */
    addControl(control){

        super.addControl(control);

        control.filterType = control.element.getAttribute('data-filter-type') || 'path'; //text, path or range
        control.format = control.element.getAttribute('data-format') || '{count}';
        control.mode = control.element.getAttribute('data-mode') || 'dynamic'; //static or dynamic

        let baseFilterControl = null;

        switch(control.filterType){

            case 'text' : {

                baseFilterControl = new BaseTextFilterControl(control.element);
                break;
            }

            case 'path' : {

                baseFilterControl = new BasePathFilterControl(control.element);
                break;
            }

            case 'range' : {

                baseFilterControl = new BaseRangeFilterControl(control.element);
                break;
            }
        }

        control.element.addEventListener('jplist.state', (e) => {

            if(!baseFilterControl || !e.jplistState) return;

            let count = 0;

            if(control.mode === 'static' && e.jplistState.groups && e.jplistState.groups.has(control.group)){

                //find group by name
                const group = e.jplistState.groups.get(control.group);

                count = CounterControl.getStaticCounterValue(baseFilterControl, control.filterType, group);
            }

            if(control.mode === 'dynamic' && e.jplistState.filtered && e.jplistState.filtered.length > 0){

                count = CounterControl.getDynamicCounterValue(baseFilterControl, control.filterType, e.jplistState.filtered);
            }

            //render counter HTML
            this.render(count);

        }, false);
    }
}

export default CounterControl;