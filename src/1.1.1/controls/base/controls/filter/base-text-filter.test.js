import BaseTextFilterControl from './base-text-filter.control';

/**
 * generate control for the specified markup
 * @param {string} markup
 * @returns {BaseTextFilterControl}
 */
const generateControl = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return new BaseTextFilterControl(div.firstChild);
};

describe('Base Text Filter Control', () => {

    it('base text filter control type', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).type).toEqual('textbox-filter');
    });

    it('control path', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).path).toEqual('.title');
    });

    it('control path should be trimmed', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path="      .title        "
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).path).toEqual('.title');
    });

    it('control regex', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                value=""
                placeholder="Filter by Title"
                data-regex="[0-9]*"
         />
        `).regex).toEqual('[0-9]*');
    });

    it('control data-text', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                data-text="abc"
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).text).toEqual('abc');
    });

    it('control text value if data-text is missing', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                value="ccc"
                placeholder="Filter by Title"
         />
        `).text).toEqual('ccc');
    });

    it('control default text value should be ""', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                placeholder="Filter by Title"
         />
        `).text).toEqual('');
    });

    it('control text should be trimmed', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                data-text="      abc    "
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).text).toEqual('abc');
    });

    it('control text should be trimmed', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                data-text="      abc    "
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).text).toEqual('abc');
    });

    it('control mode', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                data-mode="startsWith"
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).mode).toEqual('startsWith');
    });

    it('control mode should be trimmed', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                data-mode="      startsWith    "
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).mode).toEqual('startsWith');
    });

    it('default mode is "contains"', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).mode).toEqual('contains');
    });

    it('"or" logic property is null by default', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                value=""
                placeholder="Filter by Title"
         />
        `).or).toEqual(null);
    });

    it('"or" logic = test', () => {
        expect(generateControl(`
         <input
                data-jplist-control="textbox-filter"
                data-group="group1"
                data-path=".title"
                type="text"
                value=""
                data-or="test"
                placeholder="Filter by Title"
         />
        `).or).toEqual('test');
    });

    describe('isEqualTo', () => {

        it('the same controls', () => {

            const control1 = generateControl(`
              <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
             />
            `);

            const control2 = generateControl(`
             <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('different paths', () => {

            const control1 = generateControl(`
              <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
             />
            `);

            const control2 = generateControl(`
             <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".desc"
                    type="text"
                    value=""
                    placeholder="Filter by Title"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('by default different texts should not be ignored', () => {

            const control1 = generateControl(`
              <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="1"
                    placeholder="Filter by Title"
             />
            `);

            const control2 = generateControl(`
             <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="2"
                    placeholder="Filter by Title"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('texts should be ignored if false param is passed', () => {

            const control1 = generateControl(`
              <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="1"
                    placeholder="Filter by Title"
             />
            `);

            const control2 = generateControl(`
             <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="2"
                    placeholder="Filter by Title"
             />
            `);

            expect(control1.isEqualTo(control2, false)).toEqual(true);
        });

        it('includeValue = true', () => {

            const control1 = generateControl(`
              <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="1"
                    placeholder="Filter by Title"
             />
            `);

            const control2 = generateControl(`
             <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="2"
                    placeholder="Filter by Title"
             />
            `);

            expect(control1.isEqualTo(control2, true)).toEqual(false);
        });

        it('different modes', () => {

            const control1 = generateControl(`
              <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    data-mode="startsWith"
                    placeholder="Filter by Title"
             />
            `);

            const control2 = generateControl(`
             <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    placeholder="Filter by Title"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('different regex', () => {

            const control1 = generateControl(`
              <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    data-regex="[0-9]+"
                    placeholder="Filter by Title"
             />
            `);

            const control2 = generateControl(`
             <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    data-regex="[a-z]+"
                    placeholder="Filter by Title"
             />
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });
    });
});