import BaseControl from './base.control';

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

describe('Base Control', () => {

    it('base control type', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).type).toEqual('hidden-sort');
    });

    it('base control type shuld be trimmed', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).type).toEqual('hidden-sort');
    });

    it('base control type shuld be lower cased', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="Hidden-Sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).type).toEqual('hidden-sort');
    });


    it('base control group', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).group).toEqual('group1');
    });

    it('base control group undefined', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-path=".title">
        </div>
        `).group).toEqual('');
    });

    it('base control group should be trimmed', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="    group1    "
            data-path=".title">
        </div>
        `).group).toEqual('group1');
    });

    it('base control group should be lower cased', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="Group1"
            data-path=".title">
        </div>
        `).group).toEqual('group1');
    });


    it('base control data-name', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-name="control-name">
        </div>
        `).name).toEqual('control-name');
    });

    it('base control data-name undefined', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-path=".title">
        </div>
        `).name).toEqual('default');
    });

    it('base control data-name should be trimmed', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-name="     my-name      ">
        </div>
        `).name).toEqual('my-name');
    });

    it('name instead of data-name is provided', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            name="control-name">
        </div>
        `).name).toEqual('control-name');
    });


    it('base control element', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title">
        </div>
        `).element).toBeDefined();
    });


    it('base control id', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-id="abc">
        </div>
        `).id).toEqual('abc');
    });

    it('base control id undefined', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-path=".title">
        </div>
        `).id).toEqual('');
    });

    it('base control id should be trimmed', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-id="     abc      ">
        </div>
        `).id).toEqual('abc');
    });

    it('base control id should be lower cased', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="Group1"
            data-path=".title"
            data-id="AAA">
        </div>
        `).id).toEqual('aaa');
    });


    it('base control jump', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-jump=".header">
        </div>
        `).jump).toEqual('.header');
    });

    it('base control jump undefined', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-path=".title">
        </div>
        `).jump).toEqual('');
    });

    it('base control jump should be trimmed', () => {
        expect(generateBaseControl(`
         <div
            style="display: none"
            data-jplist-control="hidden-sort"
            data-group="group1"
            data-path=".title"
            data-jump="     .footer      ">
        </div>
        `).jump).toEqual('.footer');
    });
});