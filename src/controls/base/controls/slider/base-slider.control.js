import './base-slider.control.css';

/**
 * base slider control
 */
class BaseSliderControl{

    /**
     * control type defined in data-jplist-control attribute;
     * for example, data-jplist-control="hidden-sort" has type='hidden-sort'
     * @param {HTMLElement} element
     * @param {boolean} isVertical
     * @param {number} min
     * @param {number} value1 - initial value 1
     * @param {number} value2 - initial value2
     * @param {number} max
     * @param {Function} callback
     */
    constructor(element, isVertical = false, min = 0, value1 = 0, value2 = 0, max = 0, callback = (value1, value2) => {}){

        if(element) {

            this.element = element;
            this.element.classList.add('jplist-slider');

            if(!this.element) return;

            this.isVertical = isVertical;
            this.callback = callback;
            this.min = min;
            this.max = max;

            if(isVertical){
                this.element.classList.add('jplist-slider-vertical');
            }

            //create and append the first holder
            this.handler1 = document.createElement('span');
            this.handler1.classList.add('jplist-slider-holder-1');
            this.element.appendChild(this.handler1);

            //create and append the range element
            this.range = document.createElement('span');
            this.range.classList.add('jplist-slider-range');
            this.element.appendChild(this.range);

            //initial value
            this.handler1.left = 0;
            this.handler1.top = 0;
            //this.handler1.value = this.getPreviewValue(0, min, max); //0

            //create and append the second holder
            this.handler2 = document.createElement('span');
            this.handler2.classList.add('jplist-slider-holder-2');
            this.element.appendChild(this.handler2);

            //initial value
            this.handler2.left = 0;
            this.handler2.top = 0;
            //this.handler2.value = this.getPreviewValue(0, min, max); //0

            this.dragging = null;

            this.handler1.addEventListener('mousedown', this.start.bind(this));
            this.handler2.addEventListener('mousedown', this.start.bind(this));
            this.handler1.addEventListener('touchstart', this.start.bind(this));
            this.handler2.addEventListener('touchstart', this.start.bind(this));

            document.addEventListener('mousemove', this.render.bind(this));
            document.addEventListener('touchmove', this.render.bind(this));
            document.addEventListener('resize', this.render.bind(this));

            document.addEventListener('mouseup', this.stop.bind(this));
            document.addEventListener('touchend', this.stop.bind(this));

            this.element.addEventListener('mousedown', this.jump.bind(this));

            if(value2 < value1){
                value2 = value1;
            }

            const pos1 = this.getInnerValue(value1, min, max);
            const pos2 = this.getInnerValue(value2, min, max);

            this.update({
                x: pos2,
                y: pos2
            }, this.handler2);

            this.update({
                x: pos1,
                y: pos1
            }, this.handler1);

        }
    }

    /**
     * convert [0, slider-width] range to [min, max] range for the specified value
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} mappedValue
     */
    getPreviewValue(value, min, max){

        const rect = this.element.getBoundingClientRect();
        const size = this.isVertical? 'height': 'width';

        const newStart = min;
        const newEnd = max;
        const originalStart = 0;
        const originalEnd = rect[size];

        return Math.round((newEnd - newStart) * ((value - originalStart) / (originalEnd - originalStart)) + newStart);
    }

    /**
     * convert [min, max] range to [0, slider-width] range for the specified value
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} mappedValue
     */
    getInnerValue(value, min, max){

        const rect = this.element.getBoundingClientRect();
        const size = this.isVertical? 'height': 'width';

        const newStart = 0;
        const newEnd = rect[size];
        const originalStart = min;
        const originalEnd = max;

        return Math.round((newEnd - newStart) * ((value - originalStart) / (originalEnd - originalStart)) + newStart);
    }

    /**
     * jump to the specified point on the slider
     * @param {Object} e
     */
    jump(e){
        e.preventDefault();

        let position = this.getHandlerPos(e)

        if(this.isVertical){
            this.dragging = Math.abs(position.y - this.handler1.top) < Math.abs(position.y - this.handler2.top) ? this.handler1 : this.handler2;
        }
        else{
            this.dragging = Math.abs(position.x - this.handler1.left) < Math.abs(position.x - this.handler2.left) ? this.handler1 : this.handler2;
        }

        //render the updated state
        this.render(e);
    }

    /**
     * start dragging
     * @param {Object} e
     */
    start(e){
        e.preventDefault();

        this.dragging = e.target;

        //render the updated state
        this.render();
    }

    /**
     * stop dragging
     * @param {Object} e
     */
    stop(e){
        e.preventDefault();

        this.dragging = null;
    }

    /**
     * render the updated state
     */
    render(e){

        if(e && this.dragging){

            this.update(this.getHandlerPos(e), this.dragging);
        }
    }

    /**
     * update position and styles
     * @param {object} position
     * @param {element} handler
     */
    update(position, handler){

        if(handler){

            const rect = this.element.getBoundingClientRect();

            const size = this.isVertical? 'height': 'width';
            const xy = this.isVertical? 'y': 'x';
            const lefttop = this.isVertical? 'top': 'left';

            if(position[xy] < 0){
                position[xy] = 0;
            }

            if(position[xy] > rect[size]){
                position[xy] = rect[size];
            }

            if(handler === this.handler1 && position[xy] > this.handler2[lefttop]){
                position[xy] = this.handler2[lefttop];
            }

            if(handler === this.handler2 && position[xy] < this.handler1[lefttop]){
                position[xy] = this.handler1[lefttop];
            }

            //save current value
            handler[lefttop] = position[xy];
            //const value = Math.round(position[xy] * 100 / rect[size]); //value in %
            handler.value = this.getPreviewValue(position[xy], this.min, this.max);

            handler.style[lefttop] = (position[xy]) + 'px';

            //update range element
            this.range.style[lefttop] = this.handler1[lefttop] + 'px';

            const rangeHeight = this.handler2[lefttop] - this.handler1[lefttop];
            this.range.style[size] = (rangeHeight >= 0 ? rangeHeight : 0) + 'px';

            //call callback function
            if(this.callback){
                this.callback(this.handler1.value, this.handler2.value);
            }
        }
    }

    /**
     * subtraction of 2 vectors
     * @param {Object} v1 - vector #1
     * @param {Object} v2 - vector #2
     */
    static sub(v1, v2){

        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y
        };
    }

    /**
     * get handler position from mouse / tap position
     * @param {object} e
     * @return {object} handler position
     */
    getHandlerPos(e){

        const rect = this.element.getBoundingClientRect();

        const point = {
            x: e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.clientX,
            y: e.touches && e.touches.length > 0 ? e.touches[0].pageY : e.clientY
        };

        const vector = {
            x: rect.left,
            y: rect.top
        };

        return BaseSliderControl.sub(point, vector);
    }

}

export default BaseSliderControl;