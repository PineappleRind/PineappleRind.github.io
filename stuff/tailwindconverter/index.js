function $(e){return document.getElementById(e)}

let text = $('text')
let cssProperties = ['display: block;','display: none;','display: inline;','display: flex;','position: static;','position: fixed;','position: absolute;','position: relative;','position: sticky;','text-align: left;','text-align: right;','text-align: justify;','text-align: center;','float: right;', 'float: left;', 'float: none;']
    let tailwind = ['block ', 'hidden ', 'inline ', 'flex ','static ','fixed ', 'absolute ', 'relative ', 'sticky ', 'text-left ','text-right ','text-justify ','text-center ','float-right','float-left','float-none']
function translate(e) {
    let r;
    r = ''
    
    for(let i = 0; i < cssProperties.length; i++) {
        if (e.includes(cssProperties[i])) r += tailwind[i]
    }
    /*
    if (e.includes()) r += 'absolute '
    if (e.includes()) r += 'relative '
    if (e.includes('position: sticky;')) r += 'sticky '
    if (e.includes()) r += 'text-left '
    if (e.includes()) r += 'text-right '
    if (e.includes()) r += 'text-justify '
    if (e.includes()) r += 'text-center '
    if (e.includes('text-align: center;')) r += 'text-center '*/
    return r;
}

onkeypress = () => {
    $('output').innerHTML = translate(text.value)
}
let list = cssProperties.toString();
document.body.insertAdjacentHTML('beforeend',`<b>Supported Properties So Far:</b><p>${list.replace(/,/g,'<br/>')}</p>`)