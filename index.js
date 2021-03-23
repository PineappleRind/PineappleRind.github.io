function $(id) {
  return document.getElementsByClassName(id)
}

let home = `
                <h1>PineappleRind</h1>
                <h3>frontend web developer</h3>
                <div class="button-wrap">
                    <a href="experience.html" class="btn hidden">EXPERIENCE</a>
                    <a href="projects.html" class="btn hidden">PROJECTS</a>
                    <a class="btn hidden">CONTACT</a>
                    </div>
`

let projects = `
    <h1>Projects</h1>
    <h3>working on this one</h3>
    <div class="button-wrap">
        <a href="/" class="btn hidden">HOME</a>
        <a href="experience.html" class="btn hidden">EXPERIENCE</a>
        <a class="btn hidden">CONTACT</a>
        </div>`

let experience = `
            <h1>Experience</h1>
            <ul>
                <li>2 years of experience in HTML</li>
                <li>1 year of experience in JavaScript & CSS</li>
                <li>6 months of experience with React & Node.js</li>
                <li>2 months of experience with Next.js & tailwindcss</li>
            </ul>
            <div class="button-wrap">
                <a onclick="changeContent(home)" class="btn hidden">HOME</a>
                <a class="btn hidden">PROJECTS</a>
                <a class="btn hidden">CONTACT</a>
                </div>`

        function changeContent(e) {
          let cont = document.querySelector('.flex-left')
          cont.innerHTML = ''
          cont.innerHTML = e
        }
onload = () => {
  loadBtns()
}

function loadBtns() {
  for (let j = 0; j < 3; j++) {
      setTimeout(function(){
          setTimeout(function(){
              $("btn")[j].classList.remove('hidden')
          },500 * j)
      },1000)
  }
}