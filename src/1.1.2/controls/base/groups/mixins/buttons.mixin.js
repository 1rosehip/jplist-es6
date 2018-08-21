const SELECTED_CLASS = 'jplist-selected';

/**
 * buttons mixin
 * used for multiple inheritance
 * usage example:
 * class ButtonsTextFilterControl extends ButtonsMixin(BaseTextFilterControlsGroup)
 * @param {class} superclass
 * @return {class}
 */
const ButtonsMixin = superclass => class extends superclass {

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
        this.radios = [];
    }

    /**
     * add control to the group
     * @param {BasePathFilterControl} control
     */
    addControl(control){

        const baseButtonControl = super.addControl(control);

        //get additional control properties
        baseButtonControl.selected = baseButtonControl.element.getAttribute('data-selected') === 'true';
        baseButtonControl.mode = baseButtonControl.element.getAttribute('data-mode') || 'radio';

        //check if control contains a link and it is in the deep links parameters
        if(baseButtonControl.id){

            const deepLinkParam = this.deepLinkParams.find(param => param.key === baseButtonControl.id);

            if(deepLinkParam){
                baseButtonControl.selected = deepLinkParam.value === '1';
            }
        }

        if(baseButtonControl.mode === 'radio'){

            this.radios.push(baseButtonControl);
            this.handleRadios();
        }

        if(baseButtonControl.mode === 'checkbox'){

            this.checkboxes.push(baseButtonControl);
            this.handleCheckboxes();
        }

        /**
         * on control click -> change the selected control
         */
        baseButtonControl.element.addEventListener('click', e => {

            e.preventDefault();

            if(baseButtonControl.mode === 'checkbox'){

                baseButtonControl.selected = !baseButtonControl.selected;

                this.checkboxes.forEach(cb => {

                    if(cb.isEqualTo(baseButtonControl)){
                        cb.selected = baseButtonControl.selected;
                    }
                });

                this.handleCheckboxes();
            }

            if(baseButtonControl.mode === 'radio'){

                for (let radio of this.radios) {
                    radio.selected = false;
                }

                baseButtonControl.selected = true;

                this.handleRadios();
            }

            if(window.jplist) {

                window.jplist.refresh(this.group, baseButtonControl);
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
        const cbArr = this.checkboxes.map(cb => {

            if(cb.id){
                return cb.selected ? cb.id + '=1' : cb.id + '=0';
            }
            else{
                return '';
            }

        }).filter(str => str !== '');

        const radioArr = this.radios.map(radio => radio.id && radio.selected ? radio.id + '=1' : '').filter(str => str !== '');

        const combined = cbArr.concat(radioArr);
        const unique = Array.from(new Set(combined));
        return unique.join('&');
    }
};

export default ButtonsMixin;