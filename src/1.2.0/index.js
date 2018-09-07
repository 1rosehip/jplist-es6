/*

           |----
           |  /
           |  \
           |----
           |
          /*\
         // \\
        //   \\
       //=====\\
      //       \\
----| |=========| |----
 \  | |         | |  /
 /  | |    []   | |  \
----| |         | |----
    | |    []   | |
   /=\|         |/=\
  //=\\    []   //=\\
 //===\\       //===\\
//=====\\     //=====\\
||=====||=====||=====||
-----------------------
|||||||||||||||||||||||
-----------------------
||       *****       ||
||      |||||||      ||
||     ||  |  ||     ||
||    ||   |   ||    ||
||    ||  (|)  ||    ||
||   ||    |    ||   ||
||   ||    |    ||   ||
**===================**/

import jPList from './jplist';

//sort
import HiddenSortControl from './controls/sort/hidden-sort/hidden-sort.control';
import ButtonsSortControl from './controls/sort/buttons-sort/buttons-sort.control';
import RadioButtonsSortControl from './controls/sort/radio-buttons-sort/radio-buttons-sort.control';
import CheckboxSortControl from './controls/sort/checkbox-sort/checkbox-sort.control';
import SelectSortControl from './controls/sort/select-sort/select-sort.control';
import DropdownSortControl from './controls/sort/dropdown-sort/dropdown-sort.control';

//pagination
import PaginationControl from './controls/pagination/pagination.control';

//text filter
import TextboxFilterControl from './controls/filter/text-filters/textbox-filter/textbox-filter.control';
import CheckboxTextFilterControl from './controls/filter/text-filters/checkbox-text-filter/checkbox-text-filter.control';
import RadioButtonsTextFilterControl from './controls/filter/text-filters/radio-buttons-text-filter/radio-buttons-text-filter.control';
import ButtonsTextFilterControl from './controls/filter/text-filters/buttons-text-filter/buttons-text-filter.control';

//path filter
import SelectFilterControl from './controls/filter/path-filters/select-filter/select-filter.control';
import CheckboxPathFilterControl from './controls/filter/path-filters/checkbox-path-filter/checkbox-path-filter.control';
import RadioButtonsPathFilterControl from './controls/filter/path-filters/radio-buttons-path-filter/radio-buttons-path-filter.control';
import ButtonsPathFilterControl from './controls/filter/path-filters/buttons-path-filter/buttons-path-filter.control';
import DropdownFilterControl from './controls/filter/path-filters/dropdown-filter/dropdown-filter.control';

//range filter
import ButtonsRangeFilter from './controls/filter/range-filters/buttons-range-filter/buttons-range-filter.control';
import RangeSliderFilter from './controls/filter/range-filters/slider-range-filter/slider-range-filter.control';

//other
import NoResultsControl from './controls/no-results/no-results.control';
import DropdownControl from './controls/base/controls/dropdown/base-dropdown.control';
import LayoutControl from './controls/layout/layout.control';
import ResetControl from './controls/reset/reset.control';
import CounterControl from './controls/counter/counter.control';

(() => {
    'use strict';

    //custom events polyfill for IE 10+
    //https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    if (typeof window.CustomEvent !== 'function' ){

        const CustomEvent = (event, params) => {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent( 'CustomEvent' );
            evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
            return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    }

    /**
     * global jplist function, one per page
     */
    window.jplist = window.jplist || {};

    /**
     * registered control types
     * @type {Map}
     */
    window.jplist.controlTypes = window.jplist.controlTypes || new Map([
        ['hidden-sort', HiddenSortControl],
        ['sort-buttons', ButtonsSortControl],
        ['radio-buttons-sort', RadioButtonsSortControl],
        ['checkbox-sort', CheckboxSortControl],
        ['select-sort', SelectSortControl],
        ['dropdown-sort', DropdownSortControl],

        ['pagination', PaginationControl],

        ['textbox-filter', TextboxFilterControl],
        ['checkbox-text-filter', CheckboxTextFilterControl],
        ['radio-buttons-text-filter', RadioButtonsTextFilterControl],
        ['buttons-text-filter', ButtonsTextFilterControl],

        ['select-filter', SelectFilterControl],
        ['dropdown-filter', DropdownFilterControl],
        ['checkbox-path-filter', CheckboxPathFilterControl],
        ['radio-buttons-path-filter', RadioButtonsPathFilterControl],
        ['buttons-path-filter', ButtonsPathFilterControl],

        ['buttons-range-filter', ButtonsRangeFilter],
        ['slider-range-filter', RangeSliderFilter],

        ['no-results', NoResultsControl],
        ['dropdown', DropdownControl],
        ['layout', LayoutControl],
        ['reset', ResetControl],
        ['counter', CounterControl]
    ]);

    let jplist = new jPList();

    /**
     * external api
     */
    window.jplist.init = jplist.init.bind(jplist);
    window.jplist.refresh = jplist.refresh.bind(jplist);
    window.jplist.resetControls = jplist.resetControls.bind(jplist);
    window.jplist.resetControl = jplist.resetControl.bind(jplist);
    window.jplist.resetContent = jplist.resetContent.bind(jplist);
})();