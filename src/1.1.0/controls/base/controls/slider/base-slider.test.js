import BaseSliderControl from './base-slider.control';

/**
 * generate base control for the specified markup
 * @param {string} markup
 * @returns {BaseSliderControl}
 */
const generateBaseControl = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return div.firstChild;
};

describe('Base Slider Control', () => {

    it('isVertical = false', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `));

        expect(control.isVertical).toEqual(false);
    });

    it('isVertical = true', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `), true);

        expect(control.isVertical).toEqual(true);
    });

    it('min = 0', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `));

        expect(control.min).toEqual(0);
    });

    it('min = 10', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `), false, 10);

        expect(control.min).toEqual(10);
    });

    it('max = 0', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `));

        expect(control.max).toEqual(0);
    });

    it('max = 100', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `), false, 0, 0, 0, 100);

        expect(control.max).toEqual(100);
    });

    it('element should have class jplist-slider', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `));

        expect(control.element.classList.contains('jplist-slider')).toEqual(true);
    });

    it('vertical element should have class jplist-slider-vertical', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `), true);

        expect(control.element.classList.contains('jplist-slider-vertical')).toEqual(true);
    });

    it('horizontal element should not have class jplist-slider-vertical', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `), false);

        expect(control.element.classList.contains('jplist-slider-vertical')).toEqual(false);
    });

    it('callback', () => {

        const func = () => {};

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `), false, 0, 0, 0, 0, func);

        expect(control.callback).toEqual(func);
    });

    it('handler1 should be defined', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `));

        expect(control.handler1).toBeDefined();
    });

    it('handler2 should be defined', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `));

        expect(control.handler2).toBeDefined();
    });

    it('range should be defined', () => {

        const control = new BaseSliderControl(generateBaseControl(`
            <div></div>
        `));

        expect(control.range).toBeDefined();
    });
});