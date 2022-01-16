var Maker = {
    eases: {
        linear: function(x) {
            return x
        },
        quadratic: function(x) {
            return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        },
        exponential: function(x) {
            return x === 0 ?
                0 :
                x === 1 ?
                1 :
                x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 :
                (2 - Math.pow(2, -20 * x + 10)) / 2;
        },
    },
    generateSpacesArray: (height, width, ease) => {
        let res = []

        for (let i = 0; i < height; i++) {
            let eased = Maker.eases[ease](Math.abs(i / height)) * width

            res.push(Math.round(eased))
        }
        let len = res.length
        for (let j = 0; j < len; j++) {
            res.push(res[Math.abs(len - j) - 1])
        }
        let finalres = []
        for (let k = 0; k < res.length; k++) {
            let topush = ''
            for (let l = 0; l < res[k]; l++) {
                topush += ' '
            }
            finalres.push(topush)
        }
        return finalres
    },
    generateWiggle: (height, width, text, ease) => {
        let arr = Maker.generateSpacesArray(height, width)
        let res = ``
        for (let i = 0; i < arr.length; i++) {
            res += arr[i] + text + '<br>'
        }
        return res
    }
}
onmessage = function(e) {
    let workerResult = Maker.generateWiggle(
        e.data[0], e.data[1], e.data[2], e.data[3]
    )
    postMessage(workerResult);

}
