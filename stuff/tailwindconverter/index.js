function $(e){return document.querySelector(e)}

let text = $('#text')
let cssProperties = ['display: block;','display: none;','display: inline;','display: flex;','position: static;','position: fixed;','position: absolute;','position: relative;','position: sticky;','text-align: left;','text-align: right;','text-align: justify;','text-align: center;','float: right;', 'float: left;', 'float: none;','font-weight: 100;','font-weight: 200;','font-weight: 300;','font-weight: 400;','font-weight: 500;','font-weight: 600;','font-weight: 700;','font-weight: 800;','font-weight: 900;','overflow: hidden;','overflow: visible;','overflow: scroll;','overflow: auto;','overflow-y: hidden;','overflow-y: visible;','overflow-y: scroll;','overflow-y: auto;','overflow-x: hidden;','overflow-x: visible;','overflow-x: scroll;','overflow-x: auto;','flex-direction: column;','flex-direction: column-reverse;','flex-direction: row;','flex-direction: row-reverse;','align-items: center;','align-items: flex-start;','align-items: flex-end;','align-items: baseline;','align-items: stretch;','justify-content: flex-start;','justify-content: flex-end;','justify-content: center;','justify-content: space-between;','justify-content: space-around;','justify-content: space-evenly;']
let tailwind = ['block ', 'hidden ', 'inline ', 'flex ','static ','fixed ', 'absolute ', 'relative ', 'sticky ', 'text-left ','text-right ','text-justify ','text-center ','float-right ','float-left ','float-none ','font-thin ','font-extralight ','font-light ','font-normal ', 'font-medium ','font-semibold ','font-bold ','font-extrabold ','font-black ','overflow-hidden ','overflow-visible ','overflow-scroll ','overflow-auto ','overflow-y-hidden ','overflow-y-visible ','overflow-y-scroll ','overflow-y-auto ','overflow-x-hidden ','overflow-x-visible ','overflow-x-scroll ','overflow-x-auto ','flex-col ','flex-col-reverse ','flex-row ','flex-row-reverse ','items-center ','items-start ','items-end ','items-baseline ','items-stretch ','justify-start ','justify-end ','justify-center ','justify-between ','justify-around ','justify-evenly ']
let tailwindM = [0,0.125,0.25,0.375,0.5,0.625,0.75,0.875,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.5,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,24]
function translate(e) {
    let r = '';
    for (let i = 0; i < cssProperties.length; i++) {
        if (e.includes(cssProperties[i].replace(/\s/g, '')) || e.includes(cssProperties[i])) {
            (r += tailwind[i]);
            text.value = ''
        }
    }
    r += measures(e)
    //r += width(e)
    return r;
}
function measures(e) {
    let r = ''
    if(e.includes('height')) {
        let y = e.substring(e.indexOf('height') + 7,e.indexOf(';'));
        if (y.includes('px')) {
            let p = getClosest(tailwindM,(parseInt(y) / 16))
            let final = remToTailwind(p)
             r += `h-${final}`
        }
    } 
    return r;
}

/*function width(e) {
    let r = ''
    if(e.includes('width')) {
        let t = e.indexOf('width') + 6;
        let yt = e.substring(t, t + 3);
        if (yt.includes('px')) {
            let pt = getClosest(tailwindM,(parseInt(yt) / 16))
            let finalt = remToTailwind(pt)
            r += `w-${finalt}`
            return r;
        }
    }
}*/
function getClosest(e,r) {
    var closest = e.reduce(function(prev, curr) {
    return (Math.abs(curr - r) < Math.abs(prev - r) ? curr : prev);
    });
    return closest;
}
function remToTailwind(e) {
    let nums = [0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96]
    for (let i = 0; i < tailwindM.length; i++) {
        if (tailwindM[i] === e) {
            let final = nums[tailwindM.indexOf(e)];
            return final;
        }
    }
}

$('#translate').onclick = () => {
    $('#output').innerHTML = translate(text.value.toLowerCase())
}
$('#output').insertAdjacentHTML('afterend',`<p id="supported">Tailwind.css classes supported (so far): ${cssProperties.length + tailwindM.length * 2}</p>`)
let list = cssProperties.toString();
function open(e) {
    e.style.display = 'block'
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
