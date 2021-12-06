/* good luck deciphering this mess */
var functions = [
    { // Index 0
        name: "se",
        long: "Extraverted Sensing",
        placeRarity: [8.5 + 4.3, 8.8 + 5.4, 2.5 + 3.2, 1.5 + 2.1],
        index: 0
    }, {// Index 1
        name: "si",
        long: "Introverted Sensing",
        placeRarity: [13.8 + 11.6, 12.3 + 8.7, 4.4 + 3.3, 8.1 + 3.2],
        index: 1
    }, {// Index 2
        name: "ne",
        long: "Extraverted Intuition",
        placeRarity: [8.1 + 3.2, 4.4 + 3.3, 12.3 + 8.7, 13.8 + 11.6],
        index: 2
    }, {// Index 3
        name: "ni",
        long: "Introverted Intuition",
        placeRarity: [1.5 + 2.1, 1.8 + 2.5, 8.8 + 5.4, 8.5 + 4.3],
        index: 3
    }, {// Index 4
        name: "te",
        long: "Extraverted Thinking",
        placeRarity: [8.7 + 1.8, 11.6 + 2.1, 8.5 + 8.1, 8.8 + 4.4],
        index: 4
    }, {// Index 5
        name: "ti",
        long: "Introverted Thinking",
        placeRarity: [3.3 + 5.4, 3.2 + 4.3, 13.8 + 1.5, 12.3 + 8.1],
        index: 5
    }, {// Index 6
        name: "fe",
        long: "Extraverted Feeling",
        placeRarity: [12.3 + 2.5, 13.8 + 1.5, 4.3 + 3.2, 5.4 + 3.3],
        index: 6
    }, {// Index 7
        name: "fi",
        long: "Introverted Feeling",
        placeRarity: [8.8 + 4.4, 8.1 + 8.5, 2.1 + 11.6, 8.7 + 1.8],
        index: 7
    }
]
var places = ['Dominant', 'Auxiliary', 'Tertiary', 'Inferior']
var types = [
    {
        name: "INFP",
        functions: [7, 2, 1, 4, 6, 3, 0, 5],
        commonality: 4.4
    }, {
        name: "INFJ",
        functions: [3, 6, 5, 0, 2, 7, 4, 1],
        commonality: 1.5
    }, {
        name: "ISFP",
        functions: [7, 0, 3, 4, 6, 1, 2, 5],
        commonality: 8.8
    }, {
        name: "ISFJ",
        functions: [1, 6, 5, 2, 0, 7, 4, 3],
        commonality: 13.8
    }, {
        name: "INTP",
        functions: [5, 2, 1, 6, 4, 3, 0, 7],
        commonality: 3.3
    }, {
        name: "INTJ",
        functions: [3, 4, 7, 0, 2, 5, 6, 1],
        commonality: 2.1
    }, {
        name: "ISTP",
        functions: [5, 0, 3, 6, 4, 1, 2, 7],
        commonality: 5.4
    }, {
        name: "ISTJ",
        functions: [1, 4, 7, 2, 0, 5, 6, 3],
        commonality: 11.6
    }, {
        name: "ENFP",
        functions: [2, 7, 4, 1, 3, 6, 5, 0],
        commonality: 8.1
    }, {
        name: "ENFJ",
        functions: [6, 3, 0, 5, 7, 2, 1, 4],
        commonality: 2.5
    }, {
        name: "ENTP",
        functions: [2, 5, 6, 1, 3, 4, 7, 0],
        commonality: 3.2
    }, {
        name: "ENTJ",
        functions: [4, 3, 0, 7, 5, 2, 1, 6],
        commonality: 1.8
    }, {
        name: "ESFP",
        functions: [0, 7, 4, 3, 1, 6, 5, 2],
        commonality: 8.5
    }, {
        name: "ESFJ",
        functions: [6, 1, 2, 5, 7, 0, 3, 4],
        commonality: 12.3
    }, {
        name: "ESTP",
        functions: [0, 5, 6, 3, 1, 4, 7, 2],
        commonality: 4.3
    }, {
        name: "ESTJ",
        functions: [4, 1, 2, 7, 5, 0, 3, 6],
        commonality: 8.7
    }
]
function loadRarity(functiony, place) {
    let res = `<table><tr><th>Type</th><th>% of population</th></tr>`
    let typesres = loadRarityTypes(functiony, place)
    for (let i = 0; i < typesres.length; i++) {
        res += `<tr><td>${typesres[i].name}</td><td>${typesres[i].commonality}</td></tr>`
    }
    let percentres = loadRarityPercent(functiony, place)
    let off = (percentres - 12.5)
    if (Math.abs(off) === off) {
        abovebelow = 'above'
    } else abovebelow = 'below'
    res += `<tr><td><b>Total</b></td><td><b>${percentres}% </b>(${Math.abs(off)}% ${abovebelow} average)</td></tr></table>`
    return res

}
function loadRarityPercent(functiony, place) {
    for (let i = 0; i < functions[functiony].placeRarity.length; i++) {
        var res = functions[functiony].placeRarity[place]
    }
    return Math.round(res)
}
function loadRarityTypes(functiony, place) {
    let res = []
    for (let i = 0; i < types.length; i++) {
        if (types[i].functions[place] === functiony) {
            res.push(types[i])
        }
    }
    return res
}

onclick = () => {
    let pos = document.getElementById('place').value, func = document.getElementById('func').value
    let cont = document.querySelector('.flex')
    cont.classList.add('hidden');
    setTimeout(() => {
        cont.innerHTML = loadRarity(parseInt(func), parseInt(pos))
        setTimeout(() => {
            cont.classList.remove('hidden')
        }, 200);
    }, 200);
}