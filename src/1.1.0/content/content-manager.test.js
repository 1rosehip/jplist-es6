import ContentManager from './content-manager';
import HiddenSortControl from '../controls/sort/hidden-sort/hidden-sort.control';
import ButtonsSortControl from '../controls/sort/buttons-sort/buttons-sort.control';
import PaginationControl from '../controls/pagination/pagination.control';
import TextboxFilterControl from '../controls/filter/text-filters/textbox-filter/textbox-filter.control';

/**
 * generate html element for the specified markup
 * @param {string} markup
 * @returns {HTMLElement}
 */
const generateHTMLElement = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return div;
};

describe('Content Manager', () => {

    describe('Find Groups', () => {

        it('groups html is undefined', () => {
            const res = ContentManager.findGroups(undefined);
            expect(res.size).toEqual(0);
        });


        it('1 group', () => {

            const content = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
           `);

            const res = ContentManager.findGroups(content.querySelectorAll('[data-jplist-group]'));
            expect(res.size).toEqual(1);
        });

        it('2 groups', () => {

            const content = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
                
                <div data-jplist-group="group2">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
           `);

            const res = ContentManager.findGroups(content.querySelectorAll('[data-jplist-group]'));
            expect(res.size).toEqual(2);
        });


        it('group1 key should have the following value: array of length 1', () => {

            const content = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
           `);

            const res = ContentManager.findGroups(content.querySelectorAll('[data-jplist-group]'));
            expect(res.get('group1').length).toEqual(1);
        });

        it('group1 key should have the following value: array of length 2', () => {

            const content = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
                
                <div class="spacer"></div>
                
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
           `);

            const res = ContentManager.findGroups(content.querySelectorAll('[data-jplist-group]'));
            expect(res.get('group1').length).toEqual(2);
        });


        it('first items groups length is 2', () => {

            const content = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
                
                <div class="spacer"></div>
                
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
           `);

            const res = ContentManager.findGroups(content.querySelectorAll('[data-jplist-group]'));
            expect(res.get('group1')[0].items.length).toEqual(2);
        });

        it('second items groups length is 3', () => {

            const content = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
                
                <div class="spacer"></div>
                
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                    
                    <!-- item #3 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">kkk</span>
                        </p>
                    </div>
                </div>
           `);

            const res = ContentManager.findGroups(content.querySelectorAll('[data-jplist-group]'));
            expect(res.get('group1')[1].items.length).toEqual(3);
        });


        it('value should have root property', () => {

            const content = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
           `);

            const res = ContentManager.findGroups(content.querySelectorAll('[data-jplist-group]'));
            expect(res.get('group1')[0].root).toBeDefined();
        });

    });

    describe('Find Controls', () => {

        it('controls html is undefined', () => {
            const res = ContentManager.findControls(undefined);
            expect(res.length).toEqual(0);
        });

        it('1 hidden sort control', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const res = ContentManager.findControls(root);
            expect(res.length).toEqual(1);
        });

        it('2 hidden sort control', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl],
                ['sort-buttons', ButtonsSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".desc">
                </div>
           `);

            const res = ContentManager.findControls(root);
            expect(res.length).toEqual(2);
        });
    });

    describe('Find Control Groups', () => {

        it('undefined input', () => {

            const res = ContentManager.findControlGroups(undefined);
            expect(res.size).toEqual(0);
        });

        it('1 control group', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findControlGroups(controls);
            expect(res.size).toEqual(1);
        });

        it('first control group contains 1 item', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findControlGroups(controls);
            expect(res.get('group1').length).toEqual(1);
        });

        it('first control group contains 2 items', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findControlGroups(controls);
            expect(res.get('group1').length).toEqual(2);
        });

        it('first of 2 control groups contains 1 item', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findControlGroups(controls);
            expect(res.get('group1').length).toEqual(1);
        });

        it('second of 2 control groups contains 2 items', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".desc">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findControlGroups(controls);
            expect(res.get('group2').length).toEqual(2);
        });
    });

    describe('Find controls with the same name', () => {

        it('undefined input', () => {

            const res = ContentManager.findSameNameControls({}, undefined);
            expect(res.size).toEqual(0);
        });

        it('1 empty name', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findSameNameControls({}, controls);
            expect(res.size).toEqual(1);
        });

        it('empty name with 1 control', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findSameNameControls({}, controls);
            expect(res.get('default').controls.length).toEqual(1);
        });

        it('empty name with 2 controls', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".desc">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findSameNameControls({}, controls);
            expect(res.get('default').controls.length).toEqual(2);
        });

        it('name1 with 1 control', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title"
                    data-name="name1">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findSameNameControls({}, controls);
            expect(res.get('name1').controls.length).toEqual(1);
        });

        it('name1 with 2 controls', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title"
                    data-name="name1">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".desc"
                    data-name="name1">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findSameNameControls({}, controls);
            expect(res.get('name1').controls.length).toEqual(2);
        });

        it('2 names', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title"
                    data-name="name1">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".desc"
                    data-name="name1">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".desc">
                </div>
           `);

            const controls = ContentManager.findControls(root);
            const res = ContentManager.findSameNameControls({}, controls);
            expect(res.size).toEqual(2);
        });
    });

    describe('Split controls by group and name', () => {

        it('if root is undefined, size of result map should be 0', () => {

            const res = ContentManager.splitByGroupAndName({}, undefined);
            expect(res.size).toEqual(0);
        });

        it('1 group', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const res = ContentManager.splitByGroupAndName({}, root);
            expect(res.size).toEqual(1);
        });

        it('2 groups', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title">
                </div>
           `);

            const res = ContentManager.splitByGroupAndName({}, root);
            expect(res.size).toEqual(2);
        });

        it('3 groups', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title">
                </div>
                
                 <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group3"
                    data-path=".title">
                </div>
           `);

            const res = ContentManager.splitByGroupAndName({}, root);
            expect(res.size).toEqual(3);
        });

        it('control without group', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title">
                </div>
                
                 <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-path=".title">
                </div>
           `);

            const res = ContentManager.splitByGroupAndName({}, root);
            expect(res.size).toEqual(3);
        });

        it('group1 has 1 base group control', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
           `);

            const res = ContentManager.splitByGroupAndName({}, root);
            expect(res.get('group1').length).toEqual(1);
        });

        it('group1 has 2 base group controls', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title"
                    data-name="abc">
                </div>
           `);

            const res = ContentManager.splitByGroupAndName({}, root);
            expect(res.get('group1').length).toEqual(2);
        });

        it('group2 has 2 base group controls', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title"
                    data-name="abc">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title">
                </div>
                
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title"
                    data-name="abc">
                </div>
           `);

            const res = ContentManager.splitByGroupAndName({}, root);
            expect(res.get('group2').length).toEqual(2);
        });
    });

    describe('Get Deep Link', () => {

        it('1 selected checkbox', () => {

            //registered control types
            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['hidden-sort', HiddenSortControl],
                ['sort-buttons', ButtonsSortControl]
            ]);

            const controls = ContentManager.splitByGroupAndName({}, generateHTMLElement(`
              
                <button
                        data-jplist-control="sort-buttons"
                        data-group="group1"
                        data-name="name1"
                        
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        
                        data-selected="true"
                        data-id="cb1"
                        data-mode="checkbox">
                    TEXT
                </button>
           `));

            const groupElements = generateHTMLElement(`
              
                <div data-jplist-group="group1">
        
                    <!-- item #1 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">ddd</span>
                        </p>
                    </div>
        
                    <!-- item #2 -->
                    <div data-jplist-item>
                        <p>
                            <b>Title:</b>
                            <span class="title">aaa</span>
                        </p>
                    </div>
                </div>
           `).querySelectorAll('[data-jplist-group]');

            const groups = ContentManager.findGroups(groupElements);

            expect(ContentManager.getDeepLink(controls, groups)).toEqual('group=group1&cb1=1');
        });
    });

    describe('Collect Controls Options', () => {

        it('1 pagination control', () => {

            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['pagination', PaginationControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
           `);

            const controls = ContentManager.splitByGroupAndName({}, root);
            const baseControlsGroups = controls.get('group1');
            const res = ContentManager.collectControlsOptions(baseControlsGroups);
            expect(res.sortOptions.length === 0 && res.paginationOptions.currentPage === 0 && res.paginationOptions.itemsPerPage === 2).toBeTruthy();
        });

        it('2 pagination controls -> should take the latest', () => {

            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['pagination', PaginationControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
                
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="12"
                    data-current-page="15">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
           `);

            const controls = ContentManager.splitByGroupAndName({}, root);
            const baseControlsGroups = controls.get('group1');
            const res = ContentManager.collectControlsOptions(baseControlsGroups);

            expect(res.sortOptions.length === 0 && res.paginationOptions.currentPage === 15 && res.paginationOptions.itemsPerPage === 12).toBeTruthy();
        });

        it('2 pagination controls and 1 hidden sort control', () => {

            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['pagination', PaginationControl],
                ['hidden-sort', HiddenSortControl]
            ]);

            const root = generateHTMLElement(`
              
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
                
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="2"
                    data-current-page="0">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
                
                <div
                    data-jplist-control="pagination"
                    data-group="group1"
                    data-name="name1"
                    data-items-per-page="12"
                    data-current-page="15">
        
                    <button type="button" data-type="first">«</button>
                    <button type="button" data-type="prev">‹</button>
        
                    <button type="button" data-type="page">Page {pageNumber}</button>
        
                    <button type="button" data-type="next">›</button>
                    <button type="button" data-type="last">»</button>
                </div>
           `);

            const controls = ContentManager.splitByGroupAndName({}, root);
            const baseControlsGroups = controls.get('group1');
            const res = ContentManager.collectControlsOptions(baseControlsGroups);

            expect(res.sortOptions.length === 1 && res.paginationOptions.currentPage === 15 && res.paginationOptions.itemsPerPage === 12).toBeTruthy();
        });

        it('1 textbox filter control', () => {

            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['textbox-filter', TextboxFilterControl]
            ]);

            const root = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="abc"
                />
           `);

            const controls = ContentManager.splitByGroupAndName({}, root);
            const baseControlsGroups = controls.get('group1');
            const res = ContentManager.collectControlsOptions(baseControlsGroups);

            expect(res.textFilterOptions.length).toEqual(1);
        });

        it('1 textbox filter control abc text value', () => {

            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['textbox-filter', TextboxFilterControl]
            ]);

            const root = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="abc"
                />
           `);

            const controls = ContentManager.splitByGroupAndName({}, root);
            const baseControlsGroups = controls.get('group1');
            const res = ContentManager.collectControlsOptions(baseControlsGroups);
            expect(res.textFilterOptions[0].text).toEqual('abc');
        });

        it('2 textbox filter controls', () => {

            window.jplist = {};
            window.jplist.controlTypes = new Map([
                ['textbox-filter', TextboxFilterControl]
            ]);

            const root = generateHTMLElement(`
              
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".title"
                    type="text"
                    value="abc"
                />
                
                <input
                    data-jplist-control="textbox-filter"
                    data-group="group1"
                    data-path=".desc"
                    type="text"
                    value="efg"
                />
           `);

            const controls = ContentManager.splitByGroupAndName({}, root);
            const baseControlsGroups = controls.get('group1');
            const res = ContentManager.collectControlsOptions(baseControlsGroups);

            expect(res.textFilterOptions.length).toEqual(2);
        });

    });
});