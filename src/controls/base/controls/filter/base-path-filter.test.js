import BasePathFilterControl from './base-path-filter.control';

/**
 * generate control for the specified markup
 * @param {string} markup
 * @returns {BasePathFilterControl}
 */
const generateControl = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return new BasePathFilterControl(div.firstChild);
};

describe('Base Path Filter Control', () => {

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

    describe('isEqualTo', () => {

        it('isEqualTo in case of the same paths', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('isEqualTo in case of the different paths', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".title"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
                    data-path=".desc"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('default paths', () => {

            const control1 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
             />
            `);

            const control2 = generateControl(`
             <div
                    data-jplist-control="abc-filter"
                    data-group="group1"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });
    });

});