const SELECTED_CLASS = 'jplist-selected';

/**
 * checkbox mixin
 * used for multiple inheritance
 * usage example:
 * class CheckboxTextFilterControl extends CheckboxMixin(BaseTextFilterControlsGroup)
 * @param {class} superclass
 * @return {class}
 */
const CheckboxMixin = superclass => class extends superclass {

    /**
     * constructor
     * @param {string} group
     * @param {string} name
     * @param {Array.<BaseControl>=} controls
     * @param {Map|null=} deepLinkParams - structure: [groupName, [{key, value}, ...]], ...
     */
    constructor(group, name, controls = [], deepLinkParams = null){
        super(group, name, controls, deepLinkParams);

        this.group = group;
        this.name = name;

        this.checkboxes = [];
    }

    /**
     * add control to the group
     * @param {BasePathFilterControl} control
     */
    addControl(control){

        const baseControl = super.addControl(control);

        //get additional control properties
        baseControl.selected = baseControl.element.checked;

        //check if control contains a link and it is in the deep links parameters
        if(baseControl.id){

            const deepLinkParam = this.deepLinkParams.find(param => param.key === baseControl.id);

            if(deepLinkParam){
                baseControl.selected = deepLinkParam.value === '1';
            }
        }

        this.checkboxes.push(baseControl);
        this.handleCheckboxes();

        /**
         * on control change -> update the selected control
         */
        baseControl.element.addEventListener('change', e => {

            e.preventDefault();

            baseControl.selected = !baseControl.selected;

            this.checkboxes.forEach(cb => {

                if(cb.isEqualTo(baseControl)){
                    cb.selected = baseControl.selected;
                }
            });

            this.handleCheckboxes();

            if(window.jplist) {

                window.jplist.refresh(this.group, baseControl);
            }
        });
    }

    /**
     * handle checkbox mode controls
     */
    handleCheckboxes(){

        for(let cb of this.checkboxes){

            if(cb.selected){
                cb.element.classList.add(SELECTED_CLASS);
            }
            else{
                cb.element.classList.remove(SELECTED_CLASS);
            }

            cb.element.checked = cb.selected;
        }
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){
        const cbArr = this.checkboxes.map(cb => {

            if(cb.id){
                return cb.selected ? cb.id + '=1' : cb.id + '=0';
            }
            else{
                return '';
            }

        }).filter(str => str !== '');
        const unique = Array.from(new Set(cbArr));
        return unique.join('&');
    }
};

export default CheckboxMixin;