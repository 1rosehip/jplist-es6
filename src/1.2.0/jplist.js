import ContentManager from './content/content-manager';
import BaseControl from "./controls/base/controls/base.control";

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
     * @param {BaseControl|undefined=} target - the element that triggered the event
     */
    refresh(groupName = '', target = undefined){
        ContentManager.apply(this.settings, this.controls, this.groups, groupName, target);
    }

    /**
     * API: reset control by CSS selector and apply it on content
     * @param {HTMLElement} element
     */
    resetControl(element){

        if(!element) return;

        if(this.controls) {

            for (let [groupName, groupControls] of this.controls) {
                for (let group of groupControls) {
                    let controlIndex = group.controls.findIndex(control => control.element === element);

                    if(controlIndex >= 0){

                        //find the control
                        const control = group.controls[controlIndex];
                        const oldElement = control.element;

                        //create HTML element from outer HTML string
                        const div = document.createElement('div');
                        div.innerHTML = oldElement.initialHTML;
                        const newElement = div.firstChild;

                        if(oldElement.parentNode) {

                            //replace HTML element in the DOM
                            oldElement.parentNode.replaceChild(newElement, oldElement);

                            //replace the control in the group
                            group.controls.splice(controlIndex, 1);
                            group.addControl(new BaseControl(newElement));

                            //update state
                            this.refresh(groupName);
                        }

                        return;
                    }
                }
            }
        }
    }

    /**
     * API: reset all jplist controls and apply them on content
     * @param {string=} groupName
     */
    resetControls(groupName = ''){

        if(this.controls) {

            //this.controls is a Map: [groupName, [BaseControlsGroup1, BaseControlsGroup2, ...]]
            for (let [groupName, groupControls] of this.controls) {

                for (let group of groupControls) {

                    for(let control of group.controls){

                        if (!control.element || !control.element.initialHTML) continue;

                        control.element.outerHTML = control.element.initialHTML;

                    }
                }
            }
        }

        //find all controls split by data-group and data-name
        this.controls = ContentManager.splitByGroupAndName(this.settings, document.body);

        this.refresh(groupName);
    }

    /**
     * API: refresh HTML content after add / remove items
     * @param {Function} updateContentFunc
     */
    resetContent(updateContentFunc){

        for(let [cGroupName, groupValueArr] of this.groups){

            for(let itemsBlock of groupValueArr) {

                //hide all elements moving them to the document fragment
                let fragment = ContentManager.getItemsFragment(itemsBlock.items);

                itemsBlock.root.appendChild(fragment);
            }
        }

        if(updateContentFunc){
            updateContentFunc(this.groups);
        }

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

}