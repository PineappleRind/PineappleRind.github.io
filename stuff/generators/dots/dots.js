for (let i = 0; i < document.getElementsByClassName("dot").length; i++) {
    let r = document.getElementsByClassName("dot")[i];
        r.style.height = (i) * (i + 2) + "px";
        r.style.width = i/2 + "px";
    r.style.background = `hsl(0,100%,${i * 3}%)`
   
    setTimeout(()=>{
        r.style.transform = 'translate(0px,0px)'
        r.style.opacity = '1'
    },i * 60)
}

