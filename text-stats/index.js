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
	for (let i = 0; i < 8; i++) {
		$('commonletters').innerHTML += `<b>${input.mostCommonLetters[i].name}</b> ${input.mostCommonLetters[i].score} (${Math.round((input.mostCommonLetters[i].score /input.letters * 100)*100)/100}%)<br>`
	}
}

function parseInput(input) {
	let res = {}
	res.words = input.value.match(/\S+/g).length;
	res.letters = input.value.length
	res.lettersWithoutSpaces = input.value.match(/\S/g).length
    res.sentences = input.value.match(/[^?!.][?!.]/g).length
	res.mostCommonLetters = [{
			name: 'a',
			score: 0
		},
		{
			name: 'b',
			score: 0
		},
		{
			name: 'c',
			score: 0
		},
		{
			name: 'd',
			score: 0
		},
		{
			name: 'e',
			score: 0
		},
		{
			name: 'f',
			score: 0
		},
		{
			name: 'g',
			score: 0
		},
		{
			name: 'h',
			score: 0
		},
		{
			name: 'i',
			score: 0
		},
		{
			name: 'j',
			score: 0
		},
		{
			name: 'k',
			score: 0
		},
		{
			name: 'l',
			score: 0
		},
		{
			name: 'm',
			score: 0
		},
		{
			name: 'n',
			score: 0
		},
		{
			name: 'o',
			score: 0
		},
		{
			name: 'p',
			score: 0
		},
		{
			name: 'q',
			score: 0
		},
		{
			name: 'r',
			score: 0
		},
		{
			name: 's',
			score: 0
		},
		{
			name: 't',
			score: 0
		},
		{
			name: 'u',
			score: 0
		},
		{
			name: 'v',
			score: 0
		},
		{
			name: 'w',
			score: 0
		},
		{
			name: 'x',
			score: 0
		},
		{
			name: 'y',
			score: 0
		},
		{
			name: 'z',
			score: 0
		},
	]
	console.log(`
    words: ${res.words}
    letters: ${res.letters}
    letterswspaces: ${res.lettersWithoutSpaces}`)
	for (let i = 0; i < input.value.length; i++) {
		for (let j = 0; j < res.mostCommonLetters.length; j++) {
			if (input.value[i].toLowerCase() == res.mostCommonLetters[j].name) {
				res.mostCommonLetters[j].score++
			}
		}
	}
	res.mostCommonLetters = sort(res.mostCommonLetters, 'score')
	return res
}

function sort(array, key) {
	return array.sort(function(a, b) {
		var x = a[key];
		var y = b[key];
		return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	});
}