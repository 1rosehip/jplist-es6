const SELECTED_CLASS = 'jplist-selected';

/**
 * radio buttons mixin
 * used for multiple inheritance
 * usage example:
 * class CheckboxTextFilterControl extends CheckboxMixin(BaseTextFilterControlsGroup)
 * @param {class} superclass
 * @return {class}
 */
const RadioButtonsMixin = superclass => class extends superclass {

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

        this.radios = [];
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

        this.radios.push(baseControl);
        this.handleRadios();

        /**
         * on control change -> update the selected control
         */
        baseControl.element.addEventListener('change', e => {

            e.preventDefault();

            for (let radio of this.radios) {
                radio.selected = false;
            }

            baseControl.selected = true;

            this.handleRadios();

            if(window.jplist) {

                window.jplist.refresh(this.group, baseControl);
            }
        });
    }

    /**
     * get the latest selected radio
     * @return {BasePathFilterControl} latestSelectedRadio
     */
    getLastSelectedRadio(){

        let latestSelectedRadio = null;

        //find the latest selected radio
        for (let radio of this.radios) {

            if (radio.selected) {
                latestSelectedRadio = radio;
            }
        }

        return latestSelectedRadio;
    }

    /**
     * handle radio buttons
     */
    handleRadios(){

        if(this.radios.length > 0) {

            let latestSelectedRadio = this.getLastSelectedRadio();

            //remove selected from all radios
            for (let radio of this.radios) {

                radio.selected = false;
                radio.element.classList.remove(SELECTED_CLASS);
            }

            if(latestSelectedRadio) {

                this.radios.forEach(radio => {

                    if(radio.isEqualTo(latestSelectedRadio)){
                        radio.selected = true;
                        radio.element.checked = true;
                        radio.element.classList.add(SELECTED_CLASS);
                    }
                });
            }
        }
    }

    /**
     * get deep link according to the current control states
     * @return {string}
     */
    getDeepLink(){
        const radioArr = this.radios.map(radio => radio.id && radio.selected ? radio.id + '=1' : '').filter(str => str !== '');
        const unique = Array.from(new Set(radioArr));
        return unique.join('&');
    }
};

export default RadioButtonsMixin;