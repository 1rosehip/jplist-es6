import BaseSortControlsGroup from '../../base/groups/sort/base-sort-controls-group';

/**
 * hidden sort jPList control
 *
 * HTML structure:
 * ----------------
 * <div
 *      style="display: none"
 *      data-jplist-control="hidden-sort"
 *      data-group="group1"
 *      data-path=".title"
 *      data-type="number"> <!-- possible values: text, number, datetime -->
 * </div>
 *
 * Usage in JS:
 * -------------
 * import HiddenSort from './controls/sort/hidden-sort.control';
 * let control = document.getElementById('my-hidden-sort-control');
 * const hiddenSort = new HiddenSort(control);
 * console.log(hiddenSort.type);
 */
class HiddenSortControl extends BaseSortControlsGroup{}

export default HiddenSortControl;
