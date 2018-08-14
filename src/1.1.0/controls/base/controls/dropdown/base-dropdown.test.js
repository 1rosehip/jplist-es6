import BaseDropdownControl from './base-dropdown.control';

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

describe('Base Dropdown Control', () => {

    it('element property should exist', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        expect(control.element).toBeDefined();
    });

    it('control should have 1 panel', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        expect(control.panels.length).toEqual(1);
    });

    it('control should have 2 panels', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by 1</div>
            <div data-type="panel" class="jplist-dd-panel">Sort by 2</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        expect(control.panels.length).toEqual(2);
    });

    it('a panel should have initialContent property', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        expect(control.panels[0].initialContent).toEqual('Sort by');
    });

    it('a panel should have element property', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        expect(control.panels[0].element).toBeDefined();
    });

    it('control should have 1 content block', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        expect(control.contents.length).toEqual(1);
    });

    it('control should have 2 content blocks', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by 1</div>
                <div data-type="content" class="jplist-dd-content">Content 1</div>
                <div data-type="content" class="jplist-dd-content">Content 2</div>
            </div>
        `));

        expect(control.contents.length).toEqual(2);
    });


    it('control openedClass default value', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
             <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by 1</div>
                <div data-type="content" class="jplist-dd-content">Content 1</div>
                <div data-type="content" class="jplist-dd-content">Content 2</div>
            </div>
        `));

        expect(control.element.openedClass).toEqual('jplist-dd-opened');
    });

    it('control openedClass', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
              <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-opened-class="opened"
                data-name="name1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by 1</div>
                <div data-type="content" class="jplist-dd-content">Content 1</div>
                <div data-type="content" class="jplist-dd-content">Content 2</div>
              </div>
        `));

        expect(control.element.openedClass).toEqual('opened');
    });

    it('control openedClass trim', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
              <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-opened-class="        opened           "
                data-name="name1">
    
                <div data-type="panel" class="jplist-dd-panel">Sort by 1</div>
                <div data-type="content" class="jplist-dd-content">Content 1</div>
                <div data-type="content" class="jplist-dd-content">Content 2</div>
              </div>
        `));

        expect(control.element.openedClass).toEqual('opened');
    });


    it('click on first panel -> first content should have jplist-dd-opened class', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.panels[0].dispatchEvent(new Event('click'));
        expect(control.contents[0].classList.contains('jplist-dd-opened')).toBeTruthy();
    });

    it('click on first panel -> second content should have jplist-dd-opened class', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.panels[0].dispatchEvent(new Event('click'));
        expect(control.contents[1].classList.contains('jplist-dd-opened')).toBeTruthy();
    });

    it('click on first panel twice -> first content should not have jplist-dd-opened class', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.panels[0].dispatchEvent(new Event('click'));
        control.panels[0].dispatchEvent(new Event('click'));
        expect(!control.contents[0].classList.contains('jplist-dd-opened')).toBeTruthy();
    });

    it('click on first panel -> first panel should have jplist-dd-opened class', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.panels[0].dispatchEvent(new Event('click'));
        expect(control.panels[0].classList.contains('jplist-dd-opened')).toBeTruthy();
    });

    /*
    it('click on first panel and then click on body -> first panel should not have jplist-dd-opened class', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.panels[0].dispatchEvent(new Event('click'));
        document.body.dispatchEvent(new Event('click'));
        expect(!control.panels[0].classList.contains('jplist-dd-opened')).toBeTruthy();
    });*/

    it('click on first panel -> first content should have jplist-dd-opened class', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.panels[0].dispatchEvent(new Event('click'));
        expect(control.contents[0].classList.contains('jplist-dd-opened')).toBeTruthy();
    });

    it('setPanelsContent for the first panel', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.setPanelsContent('abc');
        expect(control.panels[0].textContent).toEqual('abc');
    });

    it('setPanelsContent for the second panel', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.setPanelsContent('abc');
        expect(control.panels[1].textContent).toEqual('abc');
    });

    it('restorePanelsContent - panel 1', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.setPanelsContent('abc');
        control.restorePanelsContent();
        expect(control.panels[0].textContent).toEqual('Sort by');
    });

    it('restorePanelsContent - panel 1', () => {

        const control = new BaseDropdownControl(generateHTMLElement(`
            <div
                data-jplist-control="dropdown-sort"
                class="jplist-dd"
                data-group="group1"
                data-name="name1">

            <div data-type="panel" class="jplist-dd-panel">Sort by 1</div>
            <div data-type="panel" class="jplist-dd-panel">Sort by 2</div>
            <div data-type="content" class="jplist-dd-content">Content</div>
        </div>
        `));

        control.setPanelsContent('abc');
        control.restorePanelsContent();
        expect(control.panels[1].textContent).toEqual('Sort by 2');
    });

});