/* hi ky 👁🗢👁*/
var functions = [
    { // Index 0
        name: "se",
        long: "Extraverted Sensing"
    }, {// Index 1
        name: "si",
        long: "Introverted Sensing"
    }, {// Index 2
        name: "ne",
        long: "Extraverted Intuition"
    }, {// Index 3
        name: "ni",
        long: "Introverted Intuition"
    }, {// Index 4
        name: "te",
        long: "Extraverted Thinking"
    }, {// Index 5
        name: "ti",
        long: "Introverted Thinking"
    }, {// Index 6
        name: "fe",
        long: "Extraverted Feeling"
    }, {// Index 7
        name: "fi",
        long: "Introverted Feeling"
    }
]
var places = ['Dominant', 'Auxiliary', 'Tertiary', 'Inferior', 'Opposing', 'Senex', 'Trickster', 'Demon']
var types = [
    {
        name: "INFP",
        functions: [7, 2, 1, 4, 6, 3, 0, 5]
    }, {
        name: "INFJ",
        functions: [3, 6, 5, 0, 2, 7, 4, 1]
    }, {
        name: "ISFP",
        functions: [7, 0, 3, 4, 6, 1, 2, 5]
    }, {
        name: "ISFJ",
        functions: [1, 6, 5, 2, 0, 7, 4, 3]
    }, {
        name: "INTP",
        functions: [5, 2, 1, 6, 4, 3, 0, 7]
    }, {
        name: "INTJ",
        functions: [3, 4, 7, 0, 2, 5, 6, 1]
    }, {
        name: "ISTP",
        functions: [5, 0, 3, 6, 4, 1, 2, 7]
    }, {
        name: "ISTJ",
        functions: [1, 4, 7, 2, 0, 5, 6, 3]
    }, {
        name: "ENFP",
        functions: [2, 7, 4, 1, 3, 6, 5, 0]
    }, {
        name: "ENFJ",
        functions: [6, 3, 0, 5, 7, 2, 1, 4]
    }, {
        name: "ENTP",
        functions: [2, 5, 6, 1, 3, 4, 7, 0]
    }, {
        name: "ENTJ",
        functions: [4, 3, 0, 7, 5, 2, 1, 6]
    }, {
        name: "ESFP",
        functions: [0, 7, 4, 3, 1, 6, 5, 2]
    }, {
        name: "ESFJ",
        functions: [6, 1, 2, 5, 7, 0, 3, 4]
    }, {
        name: "ESTP",
        functions: [0, 5, 6, 3, 1, 4, 7, 2]
    }, {
        name: "ESTJ",
        functions: [4, 1, 2, 7, 5, 0, 3, 6]
    }
]

function getPlacementList(num) {
    let result = types

    for (let i = 0; i < types.length; i++) {
        let typePlace = types[i].functions.indexOf(num)
        result[i].placeName = places[typePlace]
        result[i].typePlace = typePlace
    }
    result.sort((a, b) => (a.typePlace > b.typePlace) ? 1 : -1)
    return result
}


let type = document.getElementById('sel')
let typesarr = document.querySelectorAll('.type')
updateHTML(getPlacementList(0))
type.parentElement.onclick = () => {
    let sortedTypes = getPlacementList(parseInt(type.value))
    updateHTML(sortedTypes)
}

function updateHTML(sT) {
    makeSmaller()
    setTimeout(function () {
        for (let i = 0; i < sT.length; i++) {
            document.getElementById('type' + i).innerHTML = `
        <p>${sT[i].name}</p>
        <small>${sT[i].placeName}</small>
        `
        }
        makeBigger()
    }, 450)
}
function makeSmaller() {
    for (let i = 0; i < typesarr.length; i++) {
        setTimeout(function () {
            typesarr[i].classList.add('type-hidden')
        }, 20 * i)
    }
}
function makeBigger() {
    for (let i = 0; i < typesarr.length; i++) {
        setTimeout(function () {
            typesarr[i].classList.remove('type-hidden')
        }, 20 * i)
    }
}