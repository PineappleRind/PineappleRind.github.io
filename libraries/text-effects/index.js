const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)) // Sleep function for preventing errors based on element creation

async function createTextEffect(element,effect) {
	let str = element.textContent;
	element.innerHTML = ''
	//element.style.display = 'flex'
  for (var x = 0; x < str.length; x++) {
    var c = str.charAt(x);
    var span = document.createElement("SPAN");
	span.innerHTML = c;
    addStyle(span)
    span.setAttribute('id','span' + x)
    await sleep(1)
    element.appendChild(span);
  }
  await sleep(1000)
  
  if (effect === 'slide') { // Slide text effect
  	for (let i = 0; i < str.length; i++) {
      setTimeout(function(){
      let x = document.getElementById('span' + i);
        x.style.transform = 'translateY(-10px)';
        x.style.opacity = '1'
      },i * 100)
    }
  }
} 

function addStyle(e) {
    e.style.whiteSpace = 'pre'
    e.style.display = 'inline-block'
    e.style.transition = '0.5s'
    e.style.opacity = '0'
}
