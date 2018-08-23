import BaseControlsGroup from '../base/groups/base-controls-group';
import FilterAction from "../../actions/filter/filter.action";
import BasePathFilterControl from "../base/controls/filter/base-path-filter.control";
import BaseTextFilterControl from "../base/controls/filter/base-text-filter.control";
import BaseRangeFilterControl from "../base/controls/filter/base-range-filter.control";

/**
 * counter control
 * Example:
 * <span
 *  data-jplist-control="counter"
 *  data-group="group1"
 *  data-format="({count})"
 *  data-path=".architecture"
 *  data-mode="filter"
 *  data-type="path">(<span data-type="count-value">6</span>)</span>
 */
class CounterControl extends BaseControlsGroup{

    /**
     * get counter value
     * @param {BaseControl} baseFilterControl
     * @return {number} count
     * @param {string} filterType - text, path or range
     * @param {Array.<object>} group
     */
    static getCounterValue(baseFilterControl, filterType, group){

        let count = 0;

        //there can be more than one block of items with the same group name
        //each itemsBlock has structure: {root: HTMLElement, items: Array.<HTMLElement>}
        for(let itemsBlock of group){

            let filtered = itemsBlock.items;

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

            count += filtered.length;
        }

        return count;
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

            if(!baseFilterControl || !e.jplistState || !e.jplistState.groups || !e.jplistState.groups.has(control.group)) return;

            //find group by name
            const group = e.jplistState.groups.get(control.group);

            const count = CounterControl.getCounterValue(baseFilterControl, control.filterType, group);

            this.render(count);
        }, false);
    }
}

export default CounterControl;