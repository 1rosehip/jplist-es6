import ContentManager from './content/content-manager';

/**
 * the main jPList class
 */
export default class jPList{

    /**
     * API: initialize jPList controls + elements from outside
     * @param {Object} options
     */
    init(options){

        this.settings = Object.assign({}, {

            //storage
            storage: '', //'', 'localStorage', 'sessionStorage', 'cookies'
            storageName: 'jplist',
            cookiesExpiration: -1, //cookies expiration in minutes (-1 = cookie expires when browser is closed)

            //deep links
            deepLinking: false,
            hashStart: '#' //the start of the hash part, for example it may be '#!key='

        }, options);

        //find all controls split by data-group and data-name
        this.controls = ContentManager.splitByGroupAndName(this.settings, document.body);

        //find all jplist groups
        this.elements = document.querySelectorAll('[data-jplist-group]');

        //get from each group the data about its root and items;
        //the received structure is: Map[groupName, Array.<{root: HTMLElement, items: Array.<HTMLElement>}>]
        this.groups = ContentManager.findGroups(this.elements);

        let items = [...document.querySelectorAll('[data-jplist-item]')];

        //set jPList index for every element
        //it's used to return to the default browser sorting if needed
        for(let jplistIndex = 0; jplistIndex < items.length; jplistIndex++){

            items[jplistIndex].jplistIndex = jplistIndex;
        }

        //first refresh
        this.refresh('');
    }

    /**
     * API: apply controls on content
     * @param {string=} groupName - optional group name
     */
    refresh(groupName = ''){
        ContentManager.apply(this.settings, this.controls, this.groups, groupName);
    }

}