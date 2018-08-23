import BaseRangeFilterControl from './base-range-filter.control';

/**
 * generate control for the specified markup
 * @param {string} markup
 * @returns {BaseRangeFilterControl}
 */
const generateControl = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return new BaseRangeFilterControl(div.firstChild);
};

describe('Base Range Filter Control', () => {

    it('control type', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
         />
        `).type).toEqual('abc-filter');
    });

    it('control path', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
         />
        `).path).toEqual('.title');
    });

    it('control path should be trimmed', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path="       .title      "
         />
        `).path).toEqual('.title');
    });

    it('control from', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="10"
                data-from="15"
                data-to="20"
                data-max="25"
         />
        `).from).toEqual(15);
    });

    it('control from is not defined -> -Infinity', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-to="20"
                data-max="25"
         />
        `).from).toEqual(-Infinity);
    });

    it('control from 0', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="0"
                data-from="0"
                data-to="20"
                data-max="25"
         />
        `).from).toEqual(0);
    });

    it('control to', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="10"
                data-from="15"
                data-to="20"
                data-max="25"
         />
        `).to).toEqual(20);
    });

    it('control to is not defined -> Infinity', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="10"
                data-from="15"
         />
        `).to).toEqual(Infinity);
    });

    it('control max', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="10"
                data-from="15"
                data-to="20"
                data-max="25"
         />
        `).max).toEqual(25);
    });

    it('control max is 0', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="-10"
                data-from="-15"
                data-to="0"
                data-max="0"
         />
        `).max).toEqual(0);
    });

    it('control max is aaa', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="-10"
                data-from="-15"
                data-to="0"
                data-max="aaa"
         />
        `).max).toEqual(0);
    });

    it('control default max', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-from="15"
                data-to="20"
         />
        `).max).toEqual(20);
    });

    it('control min', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="10"
                data-from="15"
                data-to="20"
                data-max="25"
         />
        `).min).toEqual(10);
    });

    it('control min is 0', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="0"
                data-from="15"
                data-to="20"
                data-max="25"
         />
        `).min).toEqual(0);
    });

    it('control default min', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-from="15"
                data-to="20"
         />
        `).min).toEqual(15);
    });

    it('control min is aaa', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="aaa"
                data-from="15"
                data-to="20"
                data-max="25"
         />
        `).min).toEqual(15);
    });

    it('"or" logic property is null by default', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="aaa"
                data-from="15"
                data-to="20"
                data-max="25"
         />
        `).or).toEqual(null);
    });

    it('"or" logic = test', () => {
        expect(generateControl(`
         <div
                data-jplist-control="abc-filter"
                data-group="group1"
                data-path=".title"
                data-min="aaa"
                data-from="15"
                data-to="20"
                data-max="25"
                data-or="test"
         />
        `).or).toEqual('test');
    });

    describe('isEqualTo', () => {

        it('isEqualTo in case of same properties', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="20"
                    data-max="25"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="20"
                    data-max="25"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('isEqualTo in case of same properties with default min/max', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-from="15"
                    data-to="20"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="15"
                    data-from="15"
                    data-to="20"
                    data-max="20"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('isEqualTo in case of the different "from" values', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="20"
                    data-max="25"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="16"
                    data-to="20"
                    data-max="25"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('isEqualTo in case of the different "to" values', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="20"
                    data-max="25"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="21"
                    data-max="25"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('isEqualTo in case of the different "min" values', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="20"
                    data-max="25"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="9"
                    data-from="15"
                    data-to="20"
                    data-max="25"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('isEqualTo in case of the different "max" values', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="20"
                    data-max="25"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
                    data-min="10"
                    data-from="15"
                    data-to="20"
                    data-max="26"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });
    });

});