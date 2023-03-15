importScripts('bezier.js');

var Maker = {
    eases: {
        linear: x => x,
        sine: x => -(Math.cos(Math.PI * x) - 1) / 2,
        quadratic: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
        cubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
        exponential: function (x) {
            return x === 0 ?
                0 :
                x === 1 ?
                    1 :
                    x < 0.5 ?
                        Math.pow(2, 20 * x - 10) / 2 :
                        (2 - Math.pow(2, -20 * x + 10)) / 2;
        },
        quartOut: x => 1 - Math.pow(1 - x, 4),
        quartIn: x => x * x * x * x,
        bezier: obj => cubicBezier(obj)
    },
    generateWiggle(height, width, text, ease) {
        let spaceArray = [];
        for (let i = 0; i < height; i++) {
            let rowWidth;
            if (!ease.points) rowWidth = Maker.eases[ease](Math.abs(i / height)) * width;
            else rowWidth = Maker.eases.bezier({ points: ease.points, toEase: (Math.abs(i / height)) }) * width;
            
            let spaces = " ".repeat(rowWidth) + text;
            spaceArray.push(spaces);
        }
        spaceArray.push(...[...spaceArray].reverse());
        return spaceArray;
    }
};

onmessage = function (e) {
    let workerResult = Maker.generateWiggle(
        e.data[0],
        e.data[1],
        e.data[2],
        e.data[3]
    );
    if (e.data[3].points?.length !== 4) postMessage('Invalid bezier');
    postMessage(workerResult);
};
