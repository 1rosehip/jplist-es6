import DropdownSortControl from './dropdown-sort.control';
import BaseSortControl from '../../base/controls/sort/base-sort.control';

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

describe('Dropdown Sort Control', () => {

    it('name', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].name).toEqual('name1');
    });

    it('group', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].group).toEqual('group1');
    });

    it('should have dropdown property', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].dropdown).toBeDefined();
    });

    it('should have buttons property', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].buttons).toBeDefined();
    });

    it('it should have 2 buttons', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].buttons.length).toEqual(2);
    });

    it('second button path should be .title', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].buttons[1].path).toEqual('.title');
    });

    it('second button order should be desc', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].buttons[1].order).toEqual('desc');
    });

    it('non defined selected value', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text">Description A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="desc"
                        data-type="text">Description Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="asc"
                        data-type="number">Likes asc</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="desc"
                        data-type="number">Likes desc</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);

        expect(control.selected.path === '.title' && control.selected.order === 'asc').toBeTruthy();
    });

    it('defined selected value', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text">Description A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="desc"
                        data-type="text">Description Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="asc"
                        data-type="number"
                        data-selected="true">Likes asc</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="desc"
                        data-type="number">Likes desc</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);

        expect(control.selected.path === '.likes' && control.selected.order === 'asc').toBeTruthy();
    });

    it('defined selected value -> panel value should be "Likes asc"', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text">Description A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="desc"
                        data-type="text">Description Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="asc"
                        data-type="number"
                        data-selected="true">Likes asc</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="desc"
                        data-type="number">Likes desc</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);

        expect(control.controls[0].dropdown.panels[0].textContent).toEqual('Likes asc');
    });

    it('button click event -> clicked buttons should be selected', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="asc"
                        data-type="number">Likes asc</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="desc"
                        data-type="number">Likes desc</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);

        control.controls[0].buttons[2].element.dispatchEvent(new Event('click'));
        expect(control.selected.path).toEqual('.likes');
    });

    it('button click event -> panel value should be "Likes asc"', () => {

        const control = new DropdownSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-selected="true">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</div>
                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="asc"
                        data-type="number">Likes asc</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="desc"
                        data-type="number">Likes desc</div>
            </div>
        </div>
        `));

        control.addControl(baseSortControl1);

        control.controls[0].buttons[2].element.dispatchEvent(new Event('click'));
        expect(control.controls[0].dropdown.panels[0].textContent).toEqual('Likes asc');
    });

    describe('Get sort options', () => {

        it('default selected value option', () => {

            const control = new DropdownSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <div
                    data-jplist-control="dropdown-sort"
                    class="jplist-dd"
                    data-group="group1"
                    data-name="name1"
                    data-id="dd1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by</div>
                <div data-type="content" class="jplist-dd-content">
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            data-selected="true"
                            data-value="1">Title A-Z</div>
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="desc"
                            data-type="text"
                            data-value="2">Title Z-A</div>
                </div>
            </div>
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions().length).toEqual(1);
        });

        it('Description A-Z is selected', () => {

            const control = new DropdownSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        data-value="1">Title A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".title"
                        data-order="desc"
                        data-type="text"
                        data-value2>Title Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="asc"
                        data-type="text"
                        data-value="3"
                        data-selected="true">Description A-Z</div>

                <div
                        class="jplist-dd-item"
                        data-path=".desc"
                        data-order="desc"
                        data-value="4"
                        data-type="text">Description Z-A</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="asc"
                        data-value="5"
                        data-type="number">Likes asc</div>

                <div
                        class="jplist-dd-item"
                        data-path=".likes"
                        data-order="desc"
                        data-value="6"
                        data-type="number">Likes desc</div>
            </div>
        </div>
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions()[0].path).toEqual('.desc');
        });

    });

    describe('Get deep link', () => {

        it('control without data-id', () => {

            const control = new DropdownSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
                   <div
                    data-jplist-control="dropdown-sort"
                    class="jplist-dd"
                    data-group="group1"
                    data-name="name1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by</div>
                <div data-type="content" class="jplist-dd-content">
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            data-selected="true">Title A-Z</div>
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="desc"
                            data-type="text">Title Z-A</div>
            </div>
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('Title A-Z selected with data-id', () => {

            const control = new DropdownSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
              <div
                    data-jplist-control="dropdown-sort"
                    class="jplist-dd"
                    data-group="group1"
                    data-name="name1"
                    data-id="dd1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by</div>
                <div data-type="content" class="jplist-dd-content">
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            data-value="1"
                            data-selected="true">Title A-Z</div>
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="desc"
                            data-value="2"
                            data-type="text">Title Z-A</div>
                            
                    <div
                            class="jplist-dd-item"
                            data-path=".likes"
                            data-order="asc"
                            data-type="number"
                            data-value="3">Likes asc</div>
    
                    <div
                            class="jplist-dd-item"
                            data-path=".likes"
                            data-order="desc"
                            data-type="number"
                            data-value="4">Likes desc</div>
                </div>
            </div>
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('dd1=1');
        });

        it('Likes desc selected with data-id', () => {

            const control = new DropdownSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
              <div
                    data-jplist-control="dropdown-sort"
                    class="jplist-dd"
                    data-group="group1"
                    data-name="name1"
                    data-id="dd1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by</div>
                <div data-type="content" class="jplist-dd-content">
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            data-value="1">Title A-Z</div>
    
                    <div
                            class="jplist-dd-item"
                            data-path=".title"
                            data-order="desc"
                            data-value="2"
                            data-type="text">Title Z-A</div>
                            
                    <div
                            class="jplist-dd-item"
                            data-path=".likes"
                            data-order="asc"
                            data-type="number"
                            data-value="3">Likes asc</div>
    
                    <div
                            class="jplist-dd-item"
                            data-path=".likes"
                            data-order="desc"
                            data-type="number"
                            data-value="4"
                            data-selected="true">Likes desc</div>
                </div>
            </div>
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('dd1=4');
        });
    });
});