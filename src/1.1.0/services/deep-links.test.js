import DeepLinksService from './deep-links.service';

describe('Deep Links Service', () => {

    describe('Get Param', () => {

        it('param undefined -> null', () => {

            const res = DeepLinksService.getParam(undefined);
            expect(res).toEqual(null);
        });

        it('param doesn\'t have =', () => {

            const res = DeepLinksService.getParam('aaa');
            expect(res).toEqual(null);
        });

        it('aaa=bbb', () => {

            const res = DeepLinksService.getParam('aaa=bbb');
            expect(res).toEqual({
                key: 'aaa',
                value: 'bbb'
            });
        });

        it('aaa=bbb should be trimmed', () => {

            const res = DeepLinksService.getParam('      aaa=bbb       ');
            expect(res).toEqual({
                key: 'aaa',
                value: 'bbb'
            });
        });

        it('aaa=bbb should be inner trimmed', () => {

            const res = DeepLinksService.getParam('      aaa     =      bbb       ');
            expect(res).toEqual({
                key: 'aaa',
                value: 'bbb'
            });
        });

        it('AAA=BBB should be lower cased', () => {

            const res = DeepLinksService.getParam('AAA=BBB');
            expect(res).toEqual({
                key: 'aaa',
                value: 'bbb'
            });
        });
    });

    describe('Get URL Params', () => {

        it('undefined hash -> should return an empty map', () => {

            const res = DeepLinksService.getUrlParams(undefined);
            expect(res.size).toEqual(0);
        });

        it('1 group', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1');
            expect(res.size).toEqual(1);
        });

        it('2 groups', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2');
            expect(res.size).toEqual(2);
        });

        it('the same group twice', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2&group=gr1&param1=val1');
            expect(res.size).toEqual(2);
        });

        it('param1', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1');
            expect(res.get('gr1')[0].key).toEqual('param1');
        });

        it('val1', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1');
            expect(res.get('gr1')[0].value).toEqual('val1');
        });

        it('param2', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2');
            expect(res.get('gr1')[1].key).toEqual('param2');
        });

        it('val2', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2');
            expect(res.get('gr1')[1].value).toEqual('val2');
        });

        it('the same group twice param3', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2&group=gr1&param3=val3');
            expect(res.get('gr1')[2].key).toEqual('param3');
        });

        it('the same group twice val3', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2&group=gr1&param3=val3');
            expect(res.get('gr1')[2].value).toEqual('val3');
        });

        it('group2 param1', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2&group=gr1&param3=val3');
            expect(res.get('gr2')[0].key).toEqual('param1');
        });

        it('group2 val1', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2&group=gr1&param3=val3');
            expect(res.get('gr2')[0].value).toEqual('val1');
        });

        it('group2 param2', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2&group=gr1&param3=val3');
            expect(res.get('gr2')[1].key).toEqual('param2');
        });

        it('group2 val2', () => {

            const res = DeepLinksService.getUrlParams('#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2&group=gr1&param3=val3');
            expect(res.get('gr2')[1].value).toEqual('val2');
        });


        it('# is provided', () => {

            const res = DeepLinksService.getUrlParams('group=gr1', '#');
            expect(res.size).toEqual(1);
        });

        it('#! as start hash', () => {

            const res = DeepLinksService.getUrlParams('#!group=gr1', '#!');
            expect(res.size).toEqual(1);
        });
    });

});