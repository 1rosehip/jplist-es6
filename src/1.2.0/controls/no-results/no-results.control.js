import BaseControlsGroup from '../base/groups/base-controls-group';

/**
 * no results control
 * Example:
 * <div data-jplist-control="no-results" data-group="group1" name="no-results">No Results Found</div>
 */
class NoResultsControl extends BaseControlsGroup{

    /**
     * add control to the group
     * @param {BaseControl} control
     * @return {BaseControl|null}
     */
    addControl(control){

        super.addControl(control);

        control.element.addEventListener('jplist.state', (e) => {

            if(!e.jplistState) return;

            const itemsNumber = Number(e.jplistState.itemsNumber) || 0;
            control.element.style.display = itemsNumber === 0 ? '' : 'none';

        }, false);

    }
}

export default NoResultsControl;