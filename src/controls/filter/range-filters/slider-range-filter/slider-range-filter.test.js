import SliderRangeFilter from './slider-range-filter.control';
import BaseRangeFilterControl from '../../../base/controls/filter/base-range-filter.control';

/**
 * generate html element for the specified markup
 * @param {string} markup
 * @returns {HTMLElement}
 */
const generateHTMLElement = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return div.firstChild;
};

describe('Range Slider Filter Control', () => {

    it('val1Elements number should be 1', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);
        expect(rangeSliderFilterControl.controls[0].val1Elements.length).toEqual(1);
    });

    it('val2Elements number should be 1', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);
        expect(rangeSliderFilterControl.controls[0].val2Elements.length).toEqual(1);
    });

    it('minElements number should be 1', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);
        expect(rangeSliderFilterControl.controls[0].minElements.length).toEqual(1);
    });

    it('maxElements number should be 1', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);
        expect(rangeSliderFilterControl.controls[0].maxElements.length).toEqual(1);
    });

    it('min value', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);
        expect(rangeSliderFilterControl.controls[0].minElements[0].textContent).toEqual('-100');
    });

    it('max value', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);
        expect(rangeSliderFilterControl.controls[0].maxElements[0].textContent).toEqual('800');
    });

    it('slider property should be defined', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);
        expect(rangeSliderFilterControl.controls[0].slider).toBeDefined();
    });

    it('Get range filter options: 1 range filter options', () => {

        const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

        const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800">
        
                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max
        
                 </div>
            `));

        rangeSliderFilterControl.addControl(baseRangeFilterControl1);

        expect(rangeSliderFilterControl.getRangeFilterOptions().length).toEqual(1);

        //{ path: '.like', min: -100, from: 50, to: 100, max: 800 }
    });

    /*
    describe('Get deep link', () => {

        it('aaa', () => {

            const rangeSliderFilterControl = new SliderRangeFilter('group1', 'name1');

            const baseRangeFilterControl1 = new BaseRangeFilterControl(generateHTMLElement(`
                <div
                    data-jplist-control="slider-range-filter"
                    data-path=".like"
                    data-group="group1"
                    data-name="name1"
                    data-selected="true"
                    data-min="-100"
                    data-from="50"
                    data-to="100"
                    data-max="800"
                    data-id="range1">

                     <span data-type="min"></span> Min |
                     <span data-type="value-1"></span> Likes |
                     <div class="jplist-slider" data-type="slider"></div>
                     <span data-type="value-2"></span> Likes |
                     <span data-type="max"></span> Max

                 </div>
            `));

            rangeSliderFilterControl.addControl(baseRangeFilterControl1);
            expect(rangeSliderFilterControl.getDeepLink()).toEqual('range1=50_100');
        });

    });*/
});