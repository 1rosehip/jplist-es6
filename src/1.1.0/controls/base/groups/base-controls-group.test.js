import BaseControlsGroup from './base-controls-group';
import BaseControl from '../controls/base.control';

/**
 * generate base control for the specified markup
 * @param {string} markup
 * @returns {BaseControl}
 */
const generateBaseControl = (markup) => {
    const div = document.createElement('div');
    div.innerHTML = markup.trim();
    return new BaseControl(div.firstChild);
};

describe('Base Controls Group', () => {

    it('group value', () => {

        const baseControlsGroup = new BaseControlsGroup('group1', 'name1', []);

        expect(baseControlsGroup.group).toEqual('group1');
    });

    it('undefined group value', () => {

        const baseControlsGroup = new BaseControlsGroup(undefined, 'name1', []);

        expect(baseControlsGroup.group).toEqual('');
    });

    it('group value should be trimmed', () => {

        const baseControlsGroup = new BaseControlsGroup('      group1     ', 'name1', []);

        expect(baseControlsGroup.group).toEqual('group1');
    });

    it('group value should be lower cased', () => {

        const baseControlsGroup = new BaseControlsGroup('Group1', 'name1', []);

        expect(baseControlsGroup.group).toEqual('group1');
    });

    it('name value', () => {

        const baseControlsGroup = new BaseControlsGroup('group1', 'name1', []);

        expect(baseControlsGroup.name).toEqual('name1');
    });

    it('undefined name value', () => {

        const baseControlsGroup = new BaseControlsGroup('group1', undefined, []);

        expect(baseControlsGroup.name).toEqual('default');
    });

    it('empty name value', () => {

        const baseControlsGroup = new BaseControlsGroup('group1', '', []);

        expect(baseControlsGroup.name).toEqual('default');
    });

    it('name value should be trimmed', () => {

        const baseControlsGroup = new BaseControlsGroup('group1', '       name1       ', []);

        expect(baseControlsGroup.name).toEqual('name1');
    });

    it('undefined controls value', () => {

        const baseControlsGroup = new BaseControlsGroup('group1', 'name1', undefined);

        expect(baseControlsGroup.controls).toEqual([]);
    });

    it('deepLinkParams is undefined', () => {

        const baseControlsGroup = new BaseControlsGroup('group1', 'name1', [], undefined);

        expect(baseControlsGroup.deepLinkParams).toEqual([]);
    });

    it('deepLinkParams param1', () => {

        const map = new Map();
        map.set('group1', [
            {
                key: 'param1',
                value: 'val1'
            }
        ]);

        const baseControlsGroup = new BaseControlsGroup('group1', 'name1', [], map);

        expect(baseControlsGroup.deepLinkParams[0].key).toEqual('param1');
    });

    it('deepLinkParams val1', () => {

        const map = new Map();
        map.set('group1', [
            {
                key: 'param1',
                value: 'val1'
            }
        ]);

        const baseControlsGroup = new BaseControlsGroup('group1', 'name1', [], map);

        expect(baseControlsGroup.deepLinkParams[0].value).toEqual('val1');
    });

    it('deepLinkParams that doesn\'t contain group name', () => {

        const map = new Map();
        map.set('group2', [
            {
                key: 'param1',
                value: 'val1'
            }
        ]);

        const baseControlsGroup = new BaseControlsGroup('group1', 'name1', [], map);

        expect(baseControlsGroup.deepLinkParams.length).toEqual(0);
    });

    describe('Add Control', () => {

        it('undefined control', () => {

            const baseControlsGroup = new BaseControlsGroup('group1', 'name1', []);

            baseControlsGroup.addControl(undefined);

            expect(baseControlsGroup.controls.length).toEqual(0);
        });

        it('control with another group value should not be added', () => {

            const baseControlsGroup = new BaseControlsGroup('group1', 'name1', []);
            const baseControl = generateBaseControl(`
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group2"
                    data-path=".title">
                </div>
            `);

            baseControlsGroup.addControl(baseControl);

            expect(baseControlsGroup.controls.length).toEqual(0);
        });

        it('control with another name value should not be added', () => {

            const baseControlsGroup = new BaseControlsGroup('group1', 'name1', []);
            const baseControl = generateBaseControl(`
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-path=".title">
                </div>
            `);

            baseControlsGroup.addControl(baseControl);

            expect(baseControlsGroup.controls.length).toEqual(0);
        });

        it('1 control with the same group and name is added', () => {

            const baseControlsGroup = new BaseControlsGroup('group1', 'name1', []);
            const baseControl = generateBaseControl(`
                <div
                    style="display: none"
                    data-jplist-control="hidden-sort"
                    data-group="group1"
                    data-name="name1"
                    data-path=".title">
                </div>
            `);

            baseControlsGroup.addControl(baseControl);

            expect(baseControlsGroup.controls.length).toEqual(1);
        });
    });
});