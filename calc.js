let clear = document.getElementById('clearBtn');
let backspace = document.getElementById('backspace');

let output = document.querySelector('#calculatorOutput');

function removeLastDigit(t) {
    let strng = t.value;
    return strng.substring(0,strng.length-1);
}
clear.addEventListener('click', function() {
    output.value = ' ';
})

backspace.addEventListener('click', function() {
    output.value = removeLastDigit(output);
}) 
