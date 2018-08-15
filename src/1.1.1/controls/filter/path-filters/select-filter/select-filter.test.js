import SelectFilterControl from './select-filter.control';
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

describe('Select Filter Control', () => {

    it('name', () => {

        const control = new SelectFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        selected>Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].name).toEqual('name1');
    });

    it('group', () => {

        const control = new SelectFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        selected>Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        control.addControl(basePathFilterControl);
        expect(control.controls[0].group).toEqual('group1');
    });

    it('has 4 options', () => {

        const control = new SelectFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        selected>Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        control.addControl(basePathFilterControl);
        expect(control.options.length).toEqual(4);
    });

    it('if we add 2 identical selects each with 4 options -> we have 4 options in total', () => {

        const control = new SelectFilterControl('group1', 'name1');

        const basePathFilterControl1 = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        selected>Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        const basePathFilterControl2 = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        selected>Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        control.addControl(basePathFilterControl1);
        control.addControl(basePathFilterControl2);
        expect(control.options.length).toEqual(4);
    });

    it('default selected value', () => {

        const control = new SelectFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title">Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        control.addControl(basePathFilterControl);
        expect(control.selected).toEqual('0');
    });

    it('selected value should be 1', () => {

        const control = new SelectFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        selected>Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        control.addControl(basePathFilterControl);
        expect(control.selected).toEqual('1');
    });

    it('change value on change event', () => {

        const control = new SelectFilterControl('group1', 'name1');

        const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                data-jplist-control="select-filter"
                data-group="group1"
                data-name="name1">

                <option
                        value="0"
                        data-path="default">Filter by</option>
    
                <option
                        value="1"
                        data-path=".title"
                        selected>Title</option>
    
                <option
                        value="2"
                        data-path=".desc">Description</option>
    
                <option
                        value="3"
                        data-path=".likes">Likes</option>
            </select>
        `));

        control.addControl(basePathFilterControl);

        control.controls[0].element.value = '3';
        control.controls[0].element.dispatchEvent(new Event('change'));

        expect(control.selected).toEqual('3');
    });

    describe('Get filter options', () => {

        it('default selected value option', () => {

            const control = new SelectFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-filter"
                    data-group="group1"
                    data-name="name1">
    
                    <option
                            value="0"
                            data-path="default">Filter by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            selected>Title</option>
        
                    <option
                            value="2"
                            data-path=".desc">Description</option>
        
                    <option
                            value="3"
                            data-path=".likes">Likes</option>
                </select>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions().length).toEqual(1);
        });

        it('default selected value option path', () => {

            const control = new SelectFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-filter"
                    data-group="group1"
                    data-name="name1">
    
                    <option
                            value="0"
                            data-path="default">Filter by</option>
        
                    <option
                            value="1"
                            data-path=".title">Title</option>
        
                    <option
                            value="2"
                            data-path=".desc">Description</option>
        
                    <option
                            value="3"
                            data-path=".likes">Likes</option>
                </select>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions()[0].path).toEqual('default');
        });

        it('.title selected option', () => {

            const control = new SelectFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-filter"
                    data-group="group1"
                    data-name="name1">
    
                    <option
                            value="0"
                            data-path="default">Filter by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            selected>Title</option>
        
                    <option
                            value="2"
                            data-path=".desc">Description</option>
        
                    <option
                            value="3"
                            data-path=".likes">Likes</option>
                </select>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions().length).toEqual(1);
        });

        it('.title selected option path', () => {

            const control = new SelectFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-filter"
                    data-group="group1"
                    data-name="name1">
    
                    <option
                            value="0"
                            data-path="default">Filter by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            selected>Title</option>
        
                    <option
                            value="2"
                            data-path=".desc">Description</option>
        
                    <option
                            value="3"
                            data-path=".likes">Likes</option>
                </select>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions()[0].path).toEqual('.title');
        });
        
    });

    describe('Get deep link', () => {

        it('control without data-id', () => {

            const control = new SelectFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-filter"
                    data-group="group1"
                    data-name="name1">
    
                    <option
                            value="0"
                            data-path="default">Filter by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            selected>Title</option>
        
                    <option
                            value="2"
                            data-path=".desc">Description</option>
        
                    <option
                            value="3"
                            data-path=".likes">Likes</option>
                </select>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getDeepLink()).toEqual('');
        });

        it('.title selected with data-id', () => {

            const control = new SelectFilterControl('group1', 'name1');

            const basePathFilterControl = new BasePathFilterControl(generateHTMLElement(`    
            <select
                    data-jplist-control="select-filter"
                    data-group="group1"
                    data-name="name1"
                    data-id="select1">
    
                    <option
                            value="0"
                            data-path="default">Filter by</option>
        
                    <option
                            value="1"
                            data-path=".title"
                            selected>Title</option>
        
                    <option
                            value="2"
                            data-path=".desc">Description</option>
        
                    <option
                            value="3"
                            data-path=".likes">Likes</option>
                </select>
            `));

            control.addControl(basePathFilterControl);
            expect(control.getPathFilterOptions().length).toEqual(1);
            expect(control.getDeepLink()).toEqual('select1=1');
        });
    });
});