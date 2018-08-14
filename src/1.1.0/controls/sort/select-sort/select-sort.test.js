import SelectSortControl from './select-sort.control';
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

describe('Select Sort Control', () => {

    it('name', () => {

        const control = new SelectSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        selected>Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].name).toEqual('name1');
    });

    it('group', () => {

        const control = new SelectSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        selected>Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        control.addControl(baseSortControl1);
        expect(control.controls[0].group).toEqual('group1');
    });

    it('has 3 options', () => {

        const control = new SelectSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        selected>Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        control.addControl(baseSortControl1);
        expect(control.options.length).toEqual(3);
    });

    it('if we add 2 identical selects each with 3 options -> we have 3 options in total', () => {

        const control = new SelectSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        selected>Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        const baseSortControl2 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        selected>Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        control.addControl(baseSortControl1);
        control.addControl(baseSortControl2);
        expect(control.options.length).toEqual(3);
    });

    it('default selected value', () => {

        const control = new SelectSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        control.addControl(baseSortControl1);
        expect(control.selected).toEqual('0');
    });

    it('selected value should be 1', () => {

        const control = new SelectSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        selected
                        data-type="text">Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        control.addControl(baseSortControl1);
        expect(control.selected).toEqual('1');
    });

    it('change value on change event', () => {

        const control = new SelectSortControl('group1', 'name1');

        const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text">Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
        `));

        control.addControl(baseSortControl1);

        control.controls[0].element.value = '1';
        control.controls[0].element.dispatchEvent(new Event('change'));

        expect(control.selected).toEqual('1');
    });

    describe('Get sort options', () => {

        it('default selected value option', () => {

            const control = new SelectSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
                <select
                        data-jplist-control="select-sort"
                        data-group="group1"
                        data-name="name1">
        
                    <option
                            value="0"
                            data-path="default">Sort by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            data-order="asc"
                            data-type="text">Title A-Z</option>
        
                    <option
                            value="2"
                            data-path=".title"
                            data-order="desc"
                            data-type="text">Title Z-A</option>
                </select>  
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions().length).toEqual(1);
        });

        it('default selected value option path', () => {

            const control = new SelectSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
                <select
                        data-jplist-control="select-sort"
                        data-group="group1"
                        data-name="name1">
        
                    <option
                            value="0"
                            data-path="default">Sort by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            data-order="asc"
                            data-type="text">Title A-Z</option>
        
                    <option
                            value="2"
                            data-path=".title"
                            data-order="desc"
                            data-type="text">Title Z-A</option>
                </select>  
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions()[0].path).toEqual('default');
        });

        it('A-Z selected option', () => {

            const control = new SelectSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
                <select
                        data-jplist-control="select-sort"
                        data-group="group1"
                        data-name="name1">
        
                    <option
                            value="0"
                            data-path="default">Sort by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            selected>Title A-Z</option>
        
                    <option
                            value="2"
                            data-path=".title"
                            data-order="desc"
                            data-type="text">Title Z-A</option>
                </select>  
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions().length).toEqual(1);
        });

        it('A-Z selected option path', () => {

            const control = new SelectSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`    
                <select
                        data-jplist-control="select-sort"
                        data-group="group1"
                        data-name="name1">
        
                    <option
                            value="0"
                            data-path="default">Sort by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            data-order="asc"
                            data-type="text"
                            selected>Title A-Z</option>
        
                    <option
                            value="2"
                            data-path=".title"
                            data-order="desc"
                            data-type="text">Title Z-A</option>
                </select>  
            `));

            control.addControl(baseSortControl1);
            expect(control.getSortOptions()[0].path).toEqual('.title');
        });
    });

    describe('Get deep link', () => {

        it('control without data-id', () => {

            const control = new SelectSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
               <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        selected>Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('');
        });

        it('A-Z selected with data-id', () => {

            const control = new SelectSortControl('group1', 'name1');

            const baseSortControl1 = new BaseSortControl(generateHTMLElement(`
               <select
                    data-jplist-control="select-sort"
                    data-group="group1"
                    data-name="name1"
                    data-id="select1">
    
                <option
                        value="0"
                        data-path="default">Sort by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        data-order="asc"
                        data-type="text"
                        selected>Title A-Z</option>
    
                <option
                        value="2"
                        data-path=".title"
                        data-order="desc"
                        data-type="text">Title Z-A</option>
            </select>  
            `));

            control.addControl(baseSortControl1);
            expect(control.getDeepLink()).toEqual('select1=1');
        });
    });
});