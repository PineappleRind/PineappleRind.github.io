function $(id) {
	return document.getElementById(id)
}

$('input').onkeyup = () => {
	updateStats(
		parseInput($('input'))
	)
}

function updateStats(input) {
	$('words').innerHTML = input.words
	$('letters').innerHTML = input.letters
	$('sentences').innerHTML = input.sentences
	$('letterswspaces').innerHTML = input.lettersWithoutSpaces
	$('commonletters').innerHTML = ''
	let amtToFixed = 1
	if (input.letters > 1000) amtToFixed = 3
	else if (input.letters > 300) amtToFixed = 2

	for (let i = 0; i < 8; i++) {
		let letter = Object.keys(input.mostCommonLetters)[i]
		let letterAmt = input.mostCommonLetters[Object.keys(input.mostCommonLetters)[i]]
		if (!letter) continue
		$('commonletters').innerHTML += `<b>${letter}</b> ${letterAmt} (${(letterAmt / input.letters * 100).toFixed(amtToFixed)}%)<br>`
	}
}

function parseInput(input) {
	let res = {}
	res.words = input.value.match(/\S+/g).length;
	res.letters = input.value.replaceAll(' ','').length
	res.lettersWithoutSpaces = input.value.match(/\S/g).length
	let sentences = input.value.match(/[^?!.][?!.]/g)
	if (!sentences) res.sentences = ''
	else res.sentences = sentences.length
	res.mostCommonLetters = {}
	for (let i = 0; i < input.value.length; i++) {
		let cur = input.value[i].toLowerCase()
		if (parseInt(cur) < 10) continue
		if (cur === ' ') continue
		if (!res.mostCommonLetters[cur]) {
			res.mostCommonLetters[cur] = 1;
			continue
		} else if (res.mostCommonLetters[cur]) {
			res.mostCommonLetters[cur]++
			continue
		}
	}

	res.mostCommonLetters = sort(res.mostCommonLetters)
	return res
}

function sort(letters) {
	var sortable = [];
	for (var letter in letters) {
		sortable.push([letter, letters[letter]]);
	}
	sortable.sort(function (a, b) {
		return b[1] - a[1];
	});
	sortable.filter(letter=>{
		letter != ' '
	})
	var objSorted = {}
	sortable.forEach(function (item) {
		objSorted[item[0]] = item[1]
	})
	console.log(sortable)
	return objSorted
}
