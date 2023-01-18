function $(id) {return document.getElementById(id)}
let output = $('output')
let topedgenum = 14
let leftedgenum = 3
oninput = () => {
    $('output').innerHTML = produceOutput()
}
function produceOutput() {
    let leftedges = ``,topedge = ``,bottomedge = ``, spaces = ``
    for (let i = 0; i <topedgenum; i++) {
        topedge += $('topedge').value
        spaces += ` `
    }
    for (let i = 0; i <topedgenum; i++) {
      bottomedge += $('bottomedge').value
    }
    let wrapped = formatTextWrap($('input').value,topedgenum);
    for (let i = 0; i < leftedgenum; i++) {
      let spacesperline = Math.abs(wrapped[i].length - topedgenum)
     console.log( wrapped)
      let fspacesperline = ``
      for (let i = 0; i < spacesperline; i++) {
        fspacesperline += ' '
      }
        if (i != leftedgenum - 1) leftedges += `${$('leftedge').value}${wrapped[i]}${fspacesperline}${$('rightedge').value}
` 
        else leftedges += `${$('leftedge').value}${wrapped[i]}${fspacesperline}${$('rightedge').value}`
    }
    let box = `${$('topleftCorner').value}${topedge}${$('toprightCorner').value}
${leftedges}
${$('bottomleftCorner').value}${bottomedge}${$('bottomrightCorner').value}`
return(box)
}


function formatTextWrap (text, maxLength) {
  var result = [], line = [];
  var length = 0;
  text.split(" ").forEach(function(word) {
      if ((length + word.length) >= maxLength) {
          result.push(line.join(" "));
          line = []; length = 0;
      }
      length += word.length + 1;
      line.push(word);
  });
  if (line.length > 0) {
      result.push(line.join(" "));
  }
  return result;
};