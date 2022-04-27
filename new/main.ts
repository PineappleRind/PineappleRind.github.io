import { animations } from './data.js';
(function () {
    interface AnimationObject {
        [key: string]: {
            values: number[];
            type: string;
        };
    }
    interface AnimationOptions {
        properties: AnimationObject;
        element: HTMLElement;
        duration: number;
        frame: number;
        ease: string;
    }
    class Animation  {
        constructor(options: AnimationOptions) {
            this.properties = options.properties;
            this.element = options.element;
            this.ease = options.ease;
            this.duration = options.duration;
            this._currentCSSRules = this.element.getAttribute("style");
            for (const property of Object.keys(this.properties)) {
                const propVal = this.properties[property];
                this.element.setAttribute("style", `${property}: ${propVal.values[0]}`);
            }
        }
        properties: AnimationObject;
        element: HTMLElement;
        duration: number;
        frame: number;
        ease: string;
        _currentCSSRules: string;
        lerp(start: number, end: number, amt: number) {
            return (1 - amt) * start + amt * end;
        }
        start() {
            this.frame = 0;
            window.requestAnimationFrame(this.frameRender.bind(this));
        }
        frameRender() {
            this.frame++;
            if (this.frame > this.duration * 60) {
                console.log('Animation finished');
                return window.cancelAnimationFrame(this.frameRender.bind(this));
            }
            let cssRules = this._currentCSSRules
            for (const property in this.properties) {
                const propVal = this.properties[property];
                let frameAmt = this.frame / (this.duration * 60);
                
                cssRules += `; ${property}: ${this.lerp(
                    propVal.values[0],
                    propVal.values[1],
                    this.eases[this.ease as keyof typeof this.eases](frameAmt / this.duration) * this.duration
                )}${propVal.type};`
            }
            this.element.setAttribute("style", cssRules);
            window.requestAnimationFrame(this.frameRender.bind(this));
        }
        eases = {
            "linear": function (t: number) { return t; },
            "easeInCubic": function (t: number) { return t * t * t; },
            "easeOutCubic": function (t: number) { return --t * t * t + 1; },
            "easeInOutCubic": function (t: number) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
        };

    }
    const header = new Animation(animations['initial-header']);
    window.onload = () => {
        setTimeout(function(){
            header.start();
        }, 1000);
    }
})();