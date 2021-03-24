function $(e){return document.querySelector(e)}

let text = $('#text')
let cssProperties = ['display: block;','display: none;','display: inline;','display: flex;','position: static;','position: fixed;','position: absolute;','position: relative;','position: sticky;','text-align: left;','text-align: right;','text-align: justify;','text-align: center;','float: right;', 'float: left;', 'float: none;','font-weight: 100;','font-weight: 200;','font-weight: 300;','font-weight: 400;','font-weight: 500;','font-weight: 600;','font-weight: 700;','font-weight: 800;','font-weight: 900;','overflow: hidden;','overflow: visible;','overflow: scroll;','overflow: auto;','overflow-y: hidden;','overflow-y: visible;','overflow-y: scroll;','overflow-y: auto;','overflow-x: hidden;','overflow-x: visible;','overflow-x: scroll;','overflow-x: auto;']
let tailwind = ['block ', 'hidden ', 'inline ', 'flex ','static ','fixed ', 'absolute ', 'relative ', 'sticky ', 'text-left ','text-right ','text-justify ','text-center ','float-right ','float-left ','float-none ','font-thin ','font-extralight ','font-light ','font-normal ', 'font-medium ','font-semibold ','font-bold ','font-extrabold ','font-black ','overflow-hidden ','overflow-visible ','overflow-scroll ','overflow-auto ','overflow-y-hidden ','overflow-y-visible ','overflow-y-scroll ','overflow-y-auto ','overflow-x-hidden ','overflow-x-visible ','overflow-x-scroll ','overflow-x-auto ']
function translate(e) {
    let r = '';
    for (let i = 0; i < cssProperties.length; i++) {
        if (e.includes(cssProperties[i].replace(/\s/g, '')) || e.includes(cssProperties[i])) {
            (r += tailwind[i]);
        }
    }
    return r;
}

onkeydown = () => {
    $('#output').innerHTML = translate(text.value.toLowerCase())
}

onpaste = () => {
    $('#output').innerHTML = translate(text.value.toLowerCase())
}
let list = cssProperties.toString();
$('.supported').insertAdjacentHTML('beforeend',`<b>Supported Properties So Far:</b><p>${list.replace(/,/g,'<br/>')}</p>`)
$('#see').onclick = () => {
    open($('.supported'))
}
function open(e) {
    e.style.display = 'flex'
    setTimeout(()=> {
        e.style.opacity = "1"
    },10)
    setTimeout(()=>{
        e.style.opacity = "0";
        setTimeout(()=> {
            e.style.display = "none"
        },500)
    },4000)
} 
