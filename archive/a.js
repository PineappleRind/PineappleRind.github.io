var HTMLAnimation = /** @class */ (function () {
    function HTMLAnimation(element, options) {
        this.eases = {
            "linear": function (t) { return t; },
            "easeInOutCubic": function (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
            "easeInOutQuint": function (t) { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t; },
        };
        this.properties = options.properties;
        this.element = element;
        this.ease = options.ease || 'easeInOutCubic';
        this.duration = options.duration || 1;
        this.currentCSSRules = this.element.getAttribute("style");
        this.currentFrameCSSRules = this.currentCSSRules;
        this.updateElement(this.frame);
    }
    HTMLAnimation.prototype.lerp = function (start, end, amt) {
        return (1 - amt) * start + amt * end;
    };
    HTMLAnimation.prototype.parseComplexStyleProperty = function (str) {
        // adapted for typescript
        var regex = /(\w+)\((.+?)\)/g, transform = {}, match;
        while (match = regex.exec(str)) {
            transform[match[1]] = transform[match[1]]
                ? transform[match[1]].concat([match[2]])
                : [match[2]];
        }
        return transform;
    };
    HTMLAnimation.prototype.start = function (delay) {
        this.frame = 0;
        delay = delay || 0;
        console.log(delay);
        setTimeout(function () {
            window.requestAnimationFrame(this.frameRender.bind(this));
        }.bind(this), delay);
    };
    HTMLAnimation.prototype.frameRender = function () {
        this.frame++;
        if (this.frame > this.duration * 60) {
            console.log('Animation finished');
            return window.cancelAnimationFrame(this.frameRender.bind(this));
        }
        this.updateElement(this.frame);
        window.requestAnimationFrame(this.frameRender.bind(this));
    };
    HTMLAnimation.prototype.updateElement = function (frame) {
        this.currentFrameCSSRules = '';
        for (var property in this.properties) {
            if (transforms.indexOf(property) > -1) {
                this.transformProperties = 'transform: ';
            }
        }
        for (var _i = 0, _a = Object.keys(this.properties); _i < _a.length; _i++) {
            var property = _a[_i];
            var propVal = this.properties[property];
            var frameAmt = frame / (this.duration * 60);
            if (transforms.indexOf(property) >= 0) {
                this.transformProperties += "".concat(property, "(").concat(this.lerp(propVal.values[0], propVal.values[1], this.eases[this.ease](frameAmt))).concat(propVal.type, ")");
            }
            else {
                this.currentFrameCSSRules += "".concat(property, ": ").concat(this.lerp(propVal.values[0], propVal.values[1], this.eases[this.ease](frameAmt))).concat(propVal.type, ";");
            }
        }
        this.currentFrameCSSRules += "".concat(this.transformProperties || '', ";");
        this.element.setAttribute("style", "".concat(this.currentCSSRules, "; ").concat(this.currentFrameCSSRules));
        return;
    };
    return HTMLAnimation;
}());