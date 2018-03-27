import SortAction from './sort.action';

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

describe('Sort Action', () => {

    describe('Text Sort', () => {

        it('when both items are undefined -> should return 0', () => {

            const res = SortAction.sortText(undefined, undefined, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when first item is undefined -> should return 0', () => {

           const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

           const res = SortAction.sortText(undefined, item1, '.title', 'asc');
           expect(res).toEqual(0);
        });

        it('when second item is undefined -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const res = SortAction.sortText(item1, undefined, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when both items don\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.desc', 'asc');
            expect(res).toEqual(0);
        });

        it('when first items doesn\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="desc">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when second items doesn\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="desc">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });


        it('aaa < bbb for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(1);
        });

        it('aaa > bbb for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc');
            expect(res).toEqual(-1);
        });

        it('aaa = aaa for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('aaa = aaa for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc');
            expect(res).toEqual(0);
        });


        it('ккк < ллл for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ллл</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ккк</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(1);
        });

        it('ккк > ллл for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ллл</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ккк</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc');
            expect(res).toEqual(-1);
        });

        it('ккк = ккк for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ккк</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ккк</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('ккк = ккк for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ккк</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ккк</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc');
            expect(res).toEqual(0);
        });


        it('aaa < bbb for asc with trim()', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">   bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa    </p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(1);
        });

        it('aaa > bbb for desc with trim()', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">    bbb </p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">  aaa     </p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc');
            expect(res).toEqual(-1);
        });

        it('aaa = aaa for asc with trim()', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">       aaa</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa        </p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });


        it('aaa < bbb for asc check case', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aAA</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(1);
        });

        it('aaa > bbb for desc check case', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bBb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">AaA</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc');
            expect(res).toEqual(-1);
        });

        it('aaa = aaa for asc check case', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aAA</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">AAa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('aaa = aaa for desc check case', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaA</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">AAa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc');
            expect(res).toEqual(0);
        });


        it('aaa < bbb for asc with regex', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">111bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc', '[0-9]*');
            expect(res).toEqual(1);
        });

        it('aaa > bbb for desc with regex', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">222bbb333</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc', '[0-9]*');
            expect(res).toEqual(-1);
        });

        it('aaa = aaa for asc with regex', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa2</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">1aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'asc', '[0-9]*');
            expect(res).toEqual(0);
        });

        it('aaa = aaa for desc with regex', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aa3a</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">a1aa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', 'desc', '[0-9]*');
            expect(res).toEqual(0);
        });


        it('default order should be asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title');
            expect(res).toEqual(1);
        });

        it('default order should be asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '.title', '');
            expect(res).toEqual(1);
        });


        it('aaa < bbb for asc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '', 'asc');
            expect(res).toEqual(1);
        });

        it('aaa > bbb for desc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '', 'desc');
            expect(res).toEqual(-1);
        });

        it('aaa = aaa for asc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '', 'asc');
            expect(res).toEqual(0);
        });

        it('aaa = aaa for desc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortText(item1, item2, '', 'desc');
            expect(res).toEqual(0);
        });

    });

    describe('Sort Numbers', () => {

        it('when both items are undefined -> should return 0', () => {

            const res = SortAction.sortNumbers(undefined, undefined, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when first item is undefined -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
           `);

            const res = SortAction.sortNumbers(undefined, item1, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when second item is undefined -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">20</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, undefined, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when both items don\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">30</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">40</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.desc', 'asc');
            expect(res).toEqual(0);
        });

        it('when first items doesn\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="desc">50</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when second items doesn\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">40</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="desc">20</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('10 < 12 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toBeGreaterThanOrEqual(1);
        });

        it('10 > 12 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'desc');
            expect(res).toBeLessThanOrEqual(-1);
        });

        it('10 = 10 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('10 = 10 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'desc');
            expect(res).toEqual(0);
        });


        it('10 < 12 for asc trimmed', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">   12   </p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">   10   </p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toBeGreaterThanOrEqual(1);
        });

        it('10 > 12 for desc trimmed', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">   12   </p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">   10   </p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'desc');
            expect(res).toBeLessThanOrEqual(-1);
        });


        it('10 < 12 for asc with regex', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa12bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ddd10fff</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toBeGreaterThanOrEqual(1);
        });

        it('10 > 12 for desc with regex', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ggg12ddd</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">sss10ddd</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'desc');
            expect(res).toBeLessThanOrEqual(-1);
        });


        it('10.05 < 12.50 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12.50</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10.05</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toBeGreaterThanOrEqual(1);
        });

        it('10.15 > 12.03 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12.03</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10.15</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'desc');
            expect(res).toBeLessThanOrEqual(-1);
        });


        it('NaN > 12 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toBeLessThanOrEqual(-1);
        });

        it('NaN > 12 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'desc');
            expect(res).toBeLessThanOrEqual(-1);
        });

        it('NaN = NaN for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('NaN = NaN for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', 'desc');
            expect(res).toEqual(0);
        });


        it('default order should be asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">40</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">20</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title');
            expect(res).toBeGreaterThanOrEqual(1);
        });

        it('default order should be asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">40</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">20</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '.title', '');
            expect(res).toBeGreaterThanOrEqual(1);
        });


        it('10 < 12 for asc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '', 'asc');
            expect(res).toBeGreaterThanOrEqual(1);
        });

        it('10 > 12 for desc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '', 'desc');
            expect(res).toBeLessThanOrEqual(-1);
        });

        it('10 = 10 for asc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '', 'asc');
            expect(res).toEqual(0);
        });

        it('10 = 10 for desc with the empty path', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            const res = SortAction.sortNumbers(item1, item2, '', 'desc');
            expect(res).toEqual(0);
        });
    });

    describe('Sort DateTime', () => {

        it('when both items are undefined -> should return 0', () => {

            const res = SortAction.sortDateTime(undefined, undefined, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when first item is undefined -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12/01/2017</p>
                </div>
           `);

            const res = SortAction.sortDateTime(undefined, item1, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when second item is undefined -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">15/03/2016</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, undefined, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when both items don\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">18.01.2001</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">19.02.2017</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.desc', 'asc');
            expect(res).toEqual(0);
        });

        it('when first items doesn\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="desc">15/04/2011</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">6/7/2010</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });

        it('when second items doesn\'t have such path -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="desc">8.9.2001</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc');
            expect(res).toEqual(0);
        });


        it('9.10.2000 < 8.9.2001 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">8.9.2001</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{day}.{month}.{year}');
            expect(res).toEqual(-1);
        });

        it('9.10.2000 < 10.10.2000 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10.10.2000</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{day}.{month}.{year}');
            expect(res).toEqual(-1);
        });

        it('9.10.2000 < 9.11.2000 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">9.11.2000</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{day}.{month}.{year}');
            expect(res).toEqual(-1);
        });


        it('9.10.2000 > 8.9.2001 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">8.9.2001</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'desc', '{day}.{month}.{year}');
            expect(res).toEqual(1);
        });

        it('9.10.2000 > 10.10.2000 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10.10.2000</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'desc', '{day}.{month}.{year}');
            expect(res).toEqual(1);
        });

        it('9.10.2000 > 9.11.2000 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">9.11.2000</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'desc', '{day}.{month}.{year}');
            expect(res).toEqual(1);
        });


        it('01/15/2010 > 01/10/2007 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/10/2007</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{month}/{day}/{year}');
            expect(res).toEqual(1);
        });

        it('02/15/2010 > 01/15/2010 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">02/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/10/2007</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{month}/{day}/{year}');
            expect(res).toEqual(1);
        });

        it('01/15/2010 > 01/14/2010 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/14/2010</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{month}/{day}/{year}');
            expect(res).toEqual(1);
        });


        it('01/15/2010 > 01/10/2007 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/10/2007</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'desc', '{month}/{day}/{year}');
            expect(res).toEqual(-1);
        });

        it('02/15/2010 > 01/15/2010 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">02/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/10/2007</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'desc', '{month}/{day}/{year}');
            expect(res).toEqual(-1);
        });

        it('01/15/2010 > 01/14/2010 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/14/2010</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'desc', '{month}/{day}/{year}');
            expect(res).toEqual(-1);
        });


        it('01/15/2010 = 01/15/2010 for asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{month}/{day}/{year}');
            expect(res).toEqual(0);
        });

        it('01/15/2010 = 01/15/2010 for desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">01/15/2010</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'desc', '{month}/{day}/{year}');
            expect(res).toEqual(0);
        });


        it('default order should be asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">9.10.2000</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">8.9.2001</p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', '', '{day}.{month}.{year}');
            expect(res).toEqual(-1);
        });

        it('the value should be trimmed', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">     9.10.2000       </p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">    8.9.2001      </p>
                </div>
            `);

            const res = SortAction.sortDateTime(item1, item2, '.title', 'asc', '{day}.{month}.{year}');
            expect(res).toEqual(-1);
        });

    });

    describe('Get Month By Wildcard', () => {

        it('Month undefined should be -1', () =>{
            expect(SortAction.getMonthByWildcard(undefined)).toEqual(-1);
        });

        it('Month aaa should be -1', () =>{
            expect(SortAction.getMonthByWildcard('aaa')).toEqual(-1);
        });

        it('Month -10 should be undefined', () =>{
            expect(SortAction.getMonthByWildcard('-10')).toEqual(-1);
        });

        it('Month 0 should be undefined', () =>{
            expect(SortAction.getMonthByWildcard('0')).toEqual(-1);
        });

        it('Month number 1 is January (0)', () =>{
            expect(SortAction.getMonthByWildcard('1')).toEqual(0);
        });

        it('Month number 01 is January (0)', () =>{
            expect(SortAction.getMonthByWildcard('01')).toEqual(0);
        });

        it('Month number 2 is February (1)', () =>{
            expect(SortAction.getMonthByWildcard('2')).toEqual(1);
        });

        it('Month number 02 is February (1)', () =>{
            expect(SortAction.getMonthByWildcard('02')).toEqual(1);
        });

        it('Month number 3 is March (2)', () =>{
            expect(SortAction.getMonthByWildcard('3')).toEqual(2);
        });

        it('Month number 03 is March (2)', () =>{
            expect(SortAction.getMonthByWildcard('03')).toEqual(2);
        });

        it('Month number 4 is April (3)', () =>{
            expect(SortAction.getMonthByWildcard('4')).toEqual(3);
        });

        it('Month number 04 is April (3)', () =>{
            expect(SortAction.getMonthByWildcard('04')).toEqual(3);
        });

        it('Month number 5 is May (4)', () =>{
            expect(SortAction.getMonthByWildcard('5')).toEqual(4);
        });

        it('Month number 05 is May (4)', () =>{
            expect(SortAction.getMonthByWildcard('05')).toEqual(4);
        });

        it('Month number 6 is June (5)', () =>{
            expect(SortAction.getMonthByWildcard('6')).toEqual(5);
        });

        it('Month number 06 is June (5)', () =>{
            expect(SortAction.getMonthByWildcard('06')).toEqual(5);
        });

        it('Month number 7 is July (6)', () =>{
            expect(SortAction.getMonthByWildcard('7')).toEqual(6);
        });

        it('Month number 07 is July (6)', () =>{
            expect(SortAction.getMonthByWildcard('07')).toEqual(6);
        });

        it('Month number 8 is August (7)', () =>{
            expect(SortAction.getMonthByWildcard('8')).toEqual(7);
        });

        it('Month number 08 is August (7)', () =>{
            expect(SortAction.getMonthByWildcard('08')).toEqual(7);
        });

        it('Month number 9 is September (8)', () =>{
            expect(SortAction.getMonthByWildcard('9')).toEqual(8);
        });

        it('Month number 09 is September (8)', () =>{
            expect(SortAction.getMonthByWildcard('09')).toEqual(8);
        });

        it('Month number 10 is October (9)', () =>{
            expect(SortAction.getMonthByWildcard('10')).toEqual(9);
        });

        it('Month number 11 is November (10)', () =>{
            expect(SortAction.getMonthByWildcard('11')).toEqual(10);
        });

        it('Month number 12 is December (11)', () =>{
            expect(SortAction.getMonthByWildcard('12')).toEqual(11);
        });

        it('Month jan', () =>{
            expect(SortAction.getMonthByWildcard('jan')).toEqual(0);
        });

        it('Month february', () =>{
            expect(SortAction.getMonthByWildcard('february')).toEqual(1);
        });

        it('Month mar.', () =>{
            expect(SortAction.getMonthByWildcard('mar.')).toEqual(2);
        });
    });

    describe('Get Date Wildcard Value', () => {

        it('year wildcard #1', () => {

            const res = SortAction.getDateWildcardValue('{month}/{day}/{year}', '{year}', '01/15/2017');
            expect(res).toEqual('2017');
        });

        it('year wildcard #2', () => {

            const res = SortAction.getDateWildcardValue('{month}-{day}-{year}', '{year}', '01-15-2017');
            expect(res).toEqual('2017');
        });

        it('day wildcard #1', () => {

            const res = SortAction.getDateWildcardValue('{month}/{day}/{year}', '{day}', '01/15/2017');
            expect(res).toEqual('15');
        });

        it('day wildcard #2', () => {

            const res = SortAction.getDateWildcardValue('{month}-{day}-{year}', '{day}', '01-15-2017');
            expect(res).toEqual('15');
        });

        it('month wildcard #1', () => {

            const res = SortAction.getDateWildcardValue('{day} {month} {year}', '{month}', '23 February 2018');
            expect(res).toEqual('February');
        });

        it('day wildcard #2', () => {

            const res = SortAction.getDateWildcardValue('{month}/{day}/{year}', '{month}', '01/15/2017');
            expect(res).toEqual('01');
        });
    });

    describe('Get Date From String', () => {

        it('23 February 2018', () => {

            const res = SortAction.getDateFromString('23 February 2018', '{day} {month} {year}');
            expect(res).toEqual(new Date(2018, 1, 23));
        });

        it('12.05.2017', () => {

            const res = SortAction.getDateFromString('12.05.2017', '{day}.{month}.{year}');
            expect(res).toEqual(new Date(2017, 4, 12));
        });

        it('01/15/2010', () => {

            const res = SortAction.getDateFromString('01/15/2010', '{month}/{day}/{year}');
            expect(res).toEqual(new Date(2010, 0, 15));
        });
    });

    describe('Sort by Index', () => {

        it('when both items are undefined -> should return 0', () => {

            const res = SortAction.sortByIndex(undefined, undefined);
            expect(res).toEqual(0);
        });

        it('when first item is undefined -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
           `);

            const res = SortAction.sortByIndex(undefined, item1);
            expect(res).toEqual(0);
        });

        it('when second item is undefined -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">20</p>
                </div>
            `);

            const res = SortAction.sortByIndex(item1, undefined);
            expect(res).toEqual(0);
        });

        it('when both items don\'t have jplistIndex -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">30</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">40</p>
                </div>
            `);

            const res = SortAction.sortByIndex(item1, item2);
            expect(res).toEqual(0);
        });

        it('when first items doesn\'t have jplistIndex -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="desc">50</p>
                </div>
            `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">10</p>
                </div>
            `);

            item2.jplistIndex = 1;

            const res = SortAction.sortByIndex(item1, item2);
            expect(res).toEqual(0);
        });

        it('when second items doesn\'t have jplistIndex -> should return 0', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">40</p>
                </div>
            `);

            item1.jplistIndex = 1;

            const item2 = generateHTMLElement(`
                <div>
                    <p class="desc">20</p>
                </div>
            `);

            const res = SortAction.sortByIndex(item1, item2);
            expect(res).toEqual(0);
        });

        it('10 < 12', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">sss</p>
                </div>
            `);
            item1.jplistIndex = 10;

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">sss</p>
                </div>
            `);
            item2.jplistIndex = 12;

            const res = SortAction.sortByIndex(item1, item2);
            expect(res).toBeLessThanOrEqual(-1);
        });

        it('10 = 10', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">rrr</p>
                </div>
            `);
            item1.jplistIndex = 10;

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ttt</p>
                </div>
            `);
            item2.jplistIndex = 10;

            const res = SortAction.sortByIndex(item1, item2);
            expect(res).toEqual(0);
        });
    });

    describe('General Sort', () => {

        it('no options provided -> should returns the same items order', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, undefined);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });

        it('empty options provided -> should returns the same items order', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, []);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });

        it('no options provided and items have jplistIndex -> should return items according jplistIndex', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);
            item1.jplistIndex = 2;

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);
            item2.jplistIndex = 1;

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);
            item3.jplistIndex = 0;

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, undefined);
            expect(sorted[0] === item3 && sorted[1] === item2 && sorted[2] === item1).toBeTruthy();
        });

        it('1 options with the default path -> should returns the same items order', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [{
                path: 'default',
                dataType: 'text',
                order: 'asc'
            }]);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });

        it('2 options with the default path -> should returns the same items order', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: 'default',
                    dataType: 'text',
                    order: 'asc'
                },
                {
                    path: 'default',
                    dataType: 'number',
                    order: 'desc'
                }]);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });


        it('sort [bbb, ccc, aaa] asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'asc'
                }
            ]);
            expect(sorted[0] === item3 && sorted[1] === item1 && sorted[2] === item2).toBeTruthy();
        });

        it('sort [ccc, bbb, aaa] asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'asc'
                }
            ]);
            expect(sorted[0] === item3 && sorted[1] === item2 && sorted[2] === item1).toBeTruthy();
        });

        it('sort [aaa, bbb, ccc] asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'asc'
                }
            ]);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });


        it('sort [bbb, ccc, aaa] desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'desc'
                }
            ]);
            expect(sorted[0] === item2 && sorted[1] === item1 && sorted[2] === item3).toBeTruthy();
        });

        it('sort [ccc, bbb, aaa] desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'desc'
                }
            ]);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });

        it('sort [aaa, bbb, ccc] desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'desc'
                }
            ]);
            expect(sorted[0] === item3 && sorted[1] === item2 && sorted[2] === item1).toBeTruthy();
        });


        it('sort [2, 3, 1] asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">2</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">3</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">1</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'number',
                    order: 'asc'
                }
            ]);
            expect(sorted[0] === item3 && sorted[1] === item1 && sorted[2] === item2).toBeTruthy();
        });

        it('sort [3, 2, 1] asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">3</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">2</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">1</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'number',
                    order: 'asc'
                }
            ]);
            expect(sorted[0] === item3 && sorted[1] === item2 && sorted[2] === item1).toBeTruthy();
        });

        it('sort [1, 2, 3] asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">1</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">2</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">3</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'number',
                    order: 'asc'
                }
            ]);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });


        it('sort [2, 3, 1] desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">2</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">3</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">1</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'number',
                    order: 'desc'
                }
            ]);
            expect(sorted[0] === item2 && sorted[1] === item1 && sorted[2] === item3).toBeTruthy();
        });

        it('sort [3, 2, 1] desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">3</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">2</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">1</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'number',
                    order: 'desc'
                }
            ]);
            expect(sorted[0] === item1 && sorted[1] === item2 && sorted[2] === item3).toBeTruthy();
        });

        it('sort [1, 2, 3] desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">1</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">2</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">3</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'number',
                    order: 'desc'
                }
            ]);
            expect(sorted[0] === item3 && sorted[1] === item2 && sorted[2] === item1).toBeTruthy();
        });


        it('sort [12.01.2017, 15.05.2018, 13.06.2000] asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12.01.2017</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">15.05.2018</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">13.06.2000</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'datetime',
                    order: 'asc',
                    dateTimeFormat: '{day}.{month}.{year}'
                }
            ]);
            expect(sorted[0] === item3 && sorted[1] === item1 && sorted[2] === item2).toBeTruthy();
        });

        it('sort [12.01.2017, 15.05.2018, 13.06.2000] desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">12.01.2017</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">15.05.2018</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">13.06.2000</p>
                </div>
           `);

            const items = [item1, item2, item3];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'datetime',
                    order: 'desc',
                    dateTimeFormat: '{day}.{month}.{year}'
                }
            ]);
            expect(sorted[0] === item2 && sorted[1] === item1 && sorted[2] === item3).toBeTruthy();
        });


        it('double sort text asc, number asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                    <p class="likes">20</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                    <p class="likes">1</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                    <p class="likes">10</p>
                </div>
           `);

            const item4 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                    <p class="likes">10</p>
                </div>
           `);

            const items = [item1, item2, item3, item4];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'asc'
                },
                {
                    path: '.likes',
                    dataType: 'number',
                    order: 'asc'
                }
            ]);

            expect(sorted[0] === item3 &&
                sorted[1] === item4 &&
                sorted[2] === item1 &&
                sorted[3] === item2).toBeTruthy();
        });

        it('double sort text asc, number desc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                    <p class="likes">20</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                    <p class="likes">1</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                    <p class="likes">10</p>
                </div>
           `);

            const item4 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                    <p class="likes">10</p>
                </div>
           `);

            const items = [item1, item2, item3, item4];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'asc'
                },
                {
                    path: '.likes',
                    dataType: 'number',
                    order: 'desc'
                }
            ]);

            expect(sorted[0] === item3 &&
                sorted[1] === item1 &&
                sorted[2] === item4 &&
                sorted[3] === item2).toBeTruthy();
        });

        it('double sort text asc, number asc, datetime asc', () => {

            const item1 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                    <p class="likes">20</p>
                    <p class="date">12.01.2017</p>
                </div>
           `);

            const item2 = generateHTMLElement(`
                <div>
                    <p class="title">ccc</p>
                    <p class="likes">1</p>
                    <p class="date">15.05.2018</p>
                </div>
           `);

            const item3 = generateHTMLElement(`
                <div>
                    <p class="title">aaa</p>
                    <p class="likes">10</p>
                    <p class="date">13.06.2000</p>
                </div>
           `);

            const item4 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                    <p class="likes">10</p>
                    <p class="date">13.06.2000</p>
                </div>
           `);

            const item5 = generateHTMLElement(`
                <div>
                    <p class="title">bbb</p>
                    <p class="likes">20</p>
                    <p class="date">12.01.2010</p>
                </div>
           `);

            const items = [item1, item2, item3, item4, item5];
            const sorted = SortAction.sort(items, [
                {
                    path: '.title',
                    dataType: 'text',
                    order: 'asc'
                },
                {
                    path: '.likes',
                    dataType: 'number',
                    order: 'asc'
                },
                {
                    path: '.date',
                    dataType: 'datetime',
                    order: 'asc'
                }
            ]);

            expect(sorted[0] === item3 &&
                sorted[1] === item4 &&
                sorted[2] === item5 &&
                sorted[3] === item1 &&
                sorted[4] === item2).toBeTruthy();
        });

    });

});