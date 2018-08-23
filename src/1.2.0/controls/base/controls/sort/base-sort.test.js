import BaseSortControl from './base-sort.control';

/**
 * generate control for the specified markup
 * @param {string} markup
 * @returns {BaseSortControl}
 */
const generateControl = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return new BaseSortControl(div.firstChild);
};

describe('Base Sort Control', () => {

    it('base sort control type', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).type).toEqual('hidden-sort');
    });


    it('base sort control path', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).path).toEqual('.title');
    });

    it('base sort control path should be trimmed', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path="     .title      ">
        </div>
        `).path).toEqual('.title');
    });


    it('base sort control data type', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number">
        </div>
        `).dataType).toEqual('number');
    });

    it('base sort control data type should be trimmed', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="    number    ">
        </div>
        `).dataType).toEqual('number');
    });

    it('base sort control data type should be lower cased', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="NUMBER">
        </div>
        `).dataType).toEqual('number');
    });

    it('default data type is text', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).dataType).toEqual('text');
    });


    it('base sort control order', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number"
            data-order="desc">
        </div>
        `).order).toEqual('desc');
    });

    it('default order is asc', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).order).toEqual('asc');
    });

    it('base sort control order should be trimmed', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number"
            data-order="   desc   ">
        </div>
        `).order).toEqual('desc');
    });

    it('base sort control order should be lower cased', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number"
            data-order="DESC">
        </div>
        `).order).toEqual('desc');
    });


    it('base sort control regex', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number"
            data-order="desc"
            data-regex="[0-9]*">
        </div>
        `).regex).toEqual('[0-9]*');
    });


    it('base sort control date time format', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number"
            data-date-format="{month}/{day}/{year}">
        </div>
        `).dateTimeFormat).toEqual('{month}/{day}/{year}');
    });

    it('base sort control date time format should be trimmed', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number"
            data-date-format="     {month}/{day}/{year}     ">
        </div>
        `).dateTimeFormat).toEqual('{month}/{day}/{year}');
    });

    it('base sort control date time format should be lower cased', () => {
        expect(generateControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-type="number"
            data-date-format="{MONTH}/{DAY}/{YEAR}">
        </div>
        `).dateTimeFormat).toEqual('{month}/{day}/{year}');
    });


    describe('Multiple Sort', () => {

        it('no multiple sort => multipleSortsNumber should be 0', () => {
            expect(generateControl(`
             <div
                style="display: none"
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title">
            </div>
            `).multipleSortsNumber).toEqual(0);
            });

        it('multiple sort: multipleSortsNumber should be 2', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.multipleSortsNumber).toEqual(2);
        });

        it('multiple sort: path1', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.path1).toEqual('.likes');
        });

        it('multiple sort: order1', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.order1).toEqual('desc');
        });

        it('multiple sort: dataType1', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.dataType1).toEqual('number');
        });

        it('multiple sort: regex2', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"
                    data-regex-2="[0-9]+"></div>
            `);

            expect(control.regex2).toEqual('[0-9]+');
        });

        it('multiple sort: dateTimeFormat2', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"
                    data-regex-2="[0-9]+"
                    data-date-format-2="{day}/{month}/{year}"></div>
            `);

            expect(control.dateTimeFormat2).toEqual('{day}/{month}/{year}');
        });

        it('multiple sort: path2', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.path2).toEqual('.date');
        });

        it('multiple sort: order1 default value should be asc', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.order1).toEqual('asc');
        });

        it('multiple sort: dataType1 default value should be text', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.dataType1).toEqual('text');
        });


        it('multiple sort: dataType1 should be trimmed', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="     number      "
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.dataType1).toEqual('number');
        });

        it('multiple sort: dataType1 should be lower cased', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="NUMBER"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.dataType1).toEqual('number');
        });

        it('multiple sort: order1 should be trimmed', () => {
            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="      desc      "
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.order1).toEqual('desc');
        });

        it('multiple sort: order1 should be lower cased', () => {
            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="      DESC      "
                    data-type-1="number"
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"></div>
            `);

            expect(control.order1).toEqual('desc');
        });

        it('multiple sort: dateTimeFormat1 should be trimmed', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
                    data-date-format-1="     {day}/{month}/{year}          "
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"
                    data-regex-2="[0-9]+"
                    data-date-format-2="{day}/{month}/{year}"></div>
            `);

            expect(control.dateTimeFormat1).toEqual('{day}/{month}/{year}');
        });

        it('multiple sort: dateTimeFormat1 should be lower cased', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
                    data-date-format-1="{DAY}/{MONTH}/{YEAR}          "
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"
                    data-regex-2="[0-9]+"
                    data-date-format-2="{day}/{month}/{year}"></div>
            `);

            expect(control.dateTimeFormat1).toEqual('{day}/{month}/{year}');
        });
    });

    describe('Get sort options', () => {

        it('base sort control without data-path has 0 options', () => {

            const control = generateControl(`
             <div
                style="display: none"
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path2=".title"
                data-order="asc">
            </div>
            `);

            expect(control.getSortOptions().length).toEqual(0);
        });

        it('base sort control: 1 sort option', () => {

            const control = generateControl(`
             <div
                style="display: none"
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title">
            </div>
            `);

            expect(control.getSortOptions().length).toEqual(1);
        });

        it('base sort control: 2 sort options', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
                    data-date-format-1="{DAY}/{MONTH}/{YEAR}          "></div>
            `);

            expect(control.getSortOptions().length).toEqual(2);
        });

        it('base sort control: 3 sort options', () => {

            const control = generateControl(`
                <div style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group5"
    
                    data-path=".title"
                    data-order="asc"
                    data-type="text"
    
                    data-path-1=".likes"
                    data-order-1="desc"
                    data-type-1="number"
                    data-date-format-1="{DAY}/{MONTH}/{YEAR}          "
    
                    data-path-2=".date"
                    data-order-2="asc"
                    data-type-2="datetime"
                    data-regex-2="[0-9]+"
                    data-date-format-2="{day}/{month}/{year}"></div>
            `);

            expect(control.getSortOptions().length).toEqual(3);
        });
    });

    describe('isEqualTo', () => {

        it('the same control twice should return true', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-type="number">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-type="number">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('default data type', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-type="text">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('default data order', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-order="asc">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('the same control with different path should return false', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-type="number">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".desc"
                data-type="number">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('the same control with different dataType should return false', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-type="number">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-type="text">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('the same control with different order should return false', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-order="asc">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-order="desc">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('the same control with different regex should return false', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-regex="[0-9]*">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-regex="[a-z]*">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('the same control with different dateTimeFormat should return false', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-date-format="{year}">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-date-format="{day}">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('multiple sort', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-order-1="asc"
                data-type-1="number"
                data-regex-1="[0-9]+"
                data-date-format-1="{year}">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-order-1="asc"
                data-type-1="number"
                data-regex-1="[0-9]+"
                data-date-format-1="{year}">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(true);
        });

        it('different path1', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".desc1">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('different order1', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-order-1="asc">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-order-1="desc">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('different type-1', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-type-1="number">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-type-1="text">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('different regex-1', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-regex-1="[0-9]*">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-regex-1="[a-z]*">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });

        it('different data-date-format #1', () => {

            const control1 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-date-format-1="{year}">
            </div>
            `);

            const control2 = generateControl(`
             <div
                data-jplist-control="hidden-sort"
                data-group="group1"
                data-path=".title"
                data-path-1=".title1"
                data-date-format-1="{day}">
            </div>
            `);

            expect(control1.isEqualTo(control2)).toEqual(false);
        });
    });

});