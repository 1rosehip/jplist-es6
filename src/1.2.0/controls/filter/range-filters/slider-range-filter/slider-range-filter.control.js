import BaseRangeFilterControlsGroup from '../../../base/groups/filter/base-range-filter-controls-group';
import BaseSliderControl from '../../../base/controls/slider/base-slider.control';

/**
 * range slider filter
 */
class SliderRangeFilter extends BaseRangeFilterControlsGroup{

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
     * @param {BaseControl} control
     */
    addControl(control){

        const rangeSliderFilterControl = super.addControl(control);

        const sliderEl = control.element.querySelector('[data-type="slider"]');
        rangeSliderFilterControl.val1Elements = control.element.querySelectorAll('[data-type="value-1"]');
        rangeSliderFilterControl.val2Elements = control.element.querySelectorAll('[data-type="value-2"]');
        rangeSliderFilterControl.minElements = control.element.querySelectorAll('[data-type="min"]');
        rangeSliderFilterControl.maxElements = control.element.querySelectorAll('[data-type="max"]');
        const valInput1 = control.element.querySelector('[data-type="value-1-input"]');
        const valInput2 = control.element.querySelector('[data-type="value-2-input"]');

        if(!sliderEl) return;

        //control properties
        const orientation = control.element.getAttribute('data-orientation') || 'horizontal'; //'vertical'

        for(let el of rangeSliderFilterControl.minElements){
            el.textContent = rangeSliderFilterControl.min;
        }

        for(let el of rangeSliderFilterControl.maxElements){
            el.textContent = rangeSliderFilterControl.max;
        }

        //check if control contains a link and it is in the deep links parameters
        if(rangeSliderFilterControl.id){

            const deepLinkParam = this.deepLinkParams.find(param => param.key === rangeSliderFilterControl.id);

            if(deepLinkParam && deepLinkParam.value){
                const parts = deepLinkParam.value.split('_');

                if(parts.length === 2){

                    rangeSliderFilterControl.from = Number(parts[0]) || 0;
                    rangeSliderFilterControl.to = Number(parts[1]) || 0;
                }
            }
        }

        rangeSliderFilterControl.slider = new BaseSliderControl(
            sliderEl,
            orientation === 'vertical',
            rangeSliderFilterControl.min,
            rangeSliderFilterControl.from,
            rangeSliderFilterControl.to,
            rangeSliderFilterControl.max,
            rangeSliderFilterControl.step,
            valInput1, valInput2,
            (value1, value2) => {
                
                //setup values for input
                if (valInput1 && valInput2) {
                    valInput1.value = Math.round(value1);
                    valInput2.value = Math.round(value2);
                }

                for(let el of rangeSliderFilterControl.val1Elements){
                    el.textContent = Math.round(value1);
                }

                for(let el of rangeSliderFilterControl.val2Elements){
                    el.textContent = Math.round(value2);
                }

                for(let control of this.controls){

                    if(!control.slider) continue;

                    control.slider.setValues(value1, value2, false);
                }

                if(window.jplist) {

                    window.jplist.refresh(this.group, rangeSliderFilterControl);
                }
        });
    }

    /**
     * get range filter options from all controls in the group
     * @return {Array.<object>} path filter options
     */
    getRangeFilterOptions(){

        let options = [];

        for(let control of this.controls){

            if(!control.slider || !control.slider.handler1 || !control.slider.handler2) continue;

            const controlOptions = control.getRangeFilterOptions();
            controlOptions.from = control.slider.handler1.value;
            controlOptions.to = control.slider.handler2.value;

            options = options.concat(controlOptions);
        }

        return options;
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){

        const arr = this.controls.map(control => {

            if(!control.id || !control.slider || !control.slider.handler1 || !control.slider.handler2) return '';

            return control.id + '=' + control.slider.handler1.value + '_' + control.slider.handler2.value;
        }).filter(str => str !== '');

        const unique = Array.from(new Set(arr));

        return unique.join('&');

    }
}

export default SliderRangeFilter;