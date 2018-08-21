import DropdownFilterControl from './dropdown-filter.control';
import BasePathFilterControl from '../../../base/controls/filter/base-text-filter.control';

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

describe('Dropdown Filter Control', () => {

    it('name', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item"
                    data-selected="true">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].name).toEqual('name1');
    });

    it('group', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item"
                    data-selected="true">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].group).toEqual('group1');
    });

    it('should have dropdown property', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item"
                    data-selected="true">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);
        expect(control.controls[0].dropdown).toBeDefined();
    });

    it('should have buttons property', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item"
                    data-selected="true">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);
        expect(control.controls[0].buttons).toBeDefined();
    });

    it('it should have 4 buttons', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item"
                    data-selected="true">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].buttons.length).toEqual(4);
    });

    it('second button path should be .title', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item"
                    data-selected="true">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);
        expect(control.controls[0].buttons[1].path).toEqual('.title');
    });

    it('third button path should be .desc', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
           <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item"
                    data-selected="true">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);
        expect(control.controls[0].buttons[2].path).toEqual('.desc');
    });

    it('non defined selected value', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);

        expect(control.selected.path).toEqual('default');
    });

    it('defined selected value', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
             <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item"
                    data-selected="true">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);

        expect(control.selected.path).toEqual('.likes');
    });

    it('defined selected value -> panel value should be "Likes asc"', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
            <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item"
                    data-selected="true">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);

        expect(control.controls[0].dropdown.panels[0].textContent).toEqual('Likes');
    });

    it('button click event -> clicked buttons should be selected', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);

        control.controls[0].buttons[2].element.dispatchEvent(new Event('click'));
        expect(control.selected.path).toEqual('.desc');
    });

    it('button click event -> panel value should be "Likes asc"', () => {

        const control = new DropdownFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-filter"
                data-group="group1"
                data-name="name1"
                class="jplist-dd">

            <div data-type="panel" class="jplist-dd-panel">Filter by</div>
            <div data-type="content" class="jplist-dd-content">

            <div
                    data-value="0"
                    data-path="default"
                    class="jplist-dd-item">Filter by</div>

            <div
                    data-value="1"
                    data-path=".title"
                    class="jplist-dd-item">Title</div>

            <div
                    data-value="2"
                    data-path=".desc"
                    class="jplist-dd-item">Description</div>

            <div
                    data-value="3"
                    data-path=".likes"
                    class="jplist-dd-item">Likes</div>
            </div>
        </div>
        `));

        control.addControl(basePathFilterControl1);

        control.controls[0].buttons[2].element.dispatchEvent(new Event('click'));
        expect(control.controls[0].dropdown.panels[0].textContent).toEqual('Description');
    });

    describe('Get path filter options', () => {

        it('default selected value', () => {

            const control = new DropdownFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                    data-jplist-control="dropdown-filter"
                    data-group="group1"
                    data-name="name1"
                    class="jplist-dd">
    
                <div data-type="panel" class="jplist-dd-panel">Filter by</div>
                <div data-type="content" class="jplist-dd-content">
    
                <div
                        data-value="0"
                        data-path="default"
                        class="jplist-dd-item">Filter by</div>
    
                <div
                        data-value="1"
                        data-path=".title"
                        class="jplist-dd-item">Title</div>
    
                <div
                        data-value="2"
                        data-path=".desc"
                        class="jplist-dd-item">Description</div>
    
                <div
                        data-value="3"
                        data-path=".likes"
                        class="jplist-dd-item">Likes</div>
                </div>
            </div>
            `));

            control.addControl(basePathFilterControl);

            expect(control.getPathFilterOptions().length).toEqual(1);
        });

        it('default selected value path', () => {

            const control = new DropdownFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                    data-jplist-control="dropdown-filter"
                    data-group="group1"
                    data-name="name1"
                    class="jplist-dd">
    
                <div data-type="panel" class="jplist-dd-panel">Filter by</div>
                <div data-type="content" class="jplist-dd-content">
    
                <div
                        data-value="0"
                        data-path="default"
                        class="jplist-dd-item">Filter by</div>
    
                <div
                        data-value="1"
                        data-path=".title"
                        class="jplist-dd-item">Title</div>
    
                <div
                        data-value="2"
                        data-path=".desc"
                        class="jplist-dd-item">Description</div>
    
                <div
                        data-value="3"
                        data-path=".likes"
                        class="jplist-dd-item">Likes</div>
                </div>
            </div>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions()[0].path).toEqual('default');
        });

        it('.title selected', () => {

            const control = new DropdownFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                    data-jplist-control="dropdown-filter"
                    data-group="group1"
                    data-name="name1"
                    class="jplist-dd">
    
                <div data-type="panel" class="jplist-dd-panel">Filter by</div>
                <div data-type="content" class="jplist-dd-content">
    
                <div
                        data-value="0"
                        data-path="default"
                        class="jplist-dd-item">Filter by</div>
    
                <div
                        data-value="1"
                        data-path=".title"
                        class="jplist-dd-item"
                        data-selected="true">Title</div>
    
                <div
                        data-value="2"
                        data-path=".desc"
                        class="jplist-dd-item">Description</div>
    
                <div
                        data-value="3"
                        data-path=".likes"
                        class="jplist-dd-item">Likes</div>
                </div>
            </div>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions().length).toEqual(1);
        });

        it('.title selected path', () => {

            const control = new DropdownFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                    data-jplist-control="dropdown-filter"
                    data-group="group1"
                    data-name="name1"
                    class="jplist-dd">
    
                <div data-type="panel" class="jplist-dd-panel">Filter by</div>
                <div data-type="content" class="jplist-dd-content">
    
                <div
                        data-value="0"
                        data-path="default"
                        class="jplist-dd-item">Filter by</div>
    
                <div
                        data-value="1"
                        data-path=".title"
                        class="jplist-dd-item"
                        data-selected="true">Title</div>
    
                <div
                        data-value="2"
                        data-path=".desc"
                        class="jplist-dd-item">Description</div>
    
                <div
                        data-value="3"
                        data-path=".likes"
                        class="jplist-dd-item">Likes</div>
                </div>
            </div>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions()[0].path).toEqual('.title');
        });

    });

    describe('Get deep link', () => {

        it('control without data-id', () => {

            const control = new DropdownFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                    data-jplist-control="dropdown-filter"
                    data-group="group1"
                    data-name="name1"
                    class="jplist-dd">
    
                <div data-type="panel" class="jplist-dd-panel">Filter by</div>
                <div data-type="content" class="jplist-dd-content">
    
                <div
                        data-value="0"
                        data-path="default"
                        class="jplist-dd-item">Filter by</div>
    
                <div
                        data-value="1"
                        data-path=".title"
                        class="jplist-dd-item"
                        data-selected="true">Title</div>
    
                <div
                        data-value="2"
                        data-path=".desc"
                        class="jplist-dd-item">Description</div>
    
                <div
                        data-value="3"
                        data-path=".likes"
                        class="jplist-dd-item">Likes</div>
                </div>
            </div>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('.title selected with data-id', () => {

            const control = new DropdownFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <div
                    data-jplist-control="dropdown-filter"
                    data-group="group1"
                    data-name="name1"
                    class="jplist-dd"
                    data-id="dd1">
    
                <div data-type="panel" class="jplist-dd-panel">Filter by</div>
                <div data-type="content" class="jplist-dd-content">
    
                <div
                        data-value="0"
                        data-path="default"
                        class="jplist-dd-item">Filter by</div>
    
                <div
                        data-value="1"
                        data-path=".title"
                        class="jplist-dd-item"
                        data-selected="true">Title</div>
    
                <div
                        data-value="2"
                        data-path=".desc"
                        class="jplist-dd-item">Description</div>
    
                <div
                        data-value="3"
                        data-path=".likes"
                        class="jplist-dd-item">Likes</div>
                </div>
            </div>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions().length).toEqual(1);
            expect(control.getDeepLink()).toEqual('dd1=1');
        });
    });

});