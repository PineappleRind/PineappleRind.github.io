var Autocomplete = {
  nextWord: function (str) {
    str = str.toLowerCase();
    str = str.replace(/\s\s+/g, " ");
    var words = str.split(" ");
    return words;
  },
  finishWord: function (str) {
    if (!str) return "";
    let p = [];
    // Search through the words list
    // and find the first word that starts with the current character
    for (const word of words[str[0]]) {
      // For each word that starts with the same starting character
      for (let i = 0; i < str.length; i++) {
        // For each letter
        if (word[i] !== str[i]) break; // If the letters don't match, continue to the next word
        // If it's the last character, return it
        if (i === str.length - 1) {
          p.push(word);
          break;
        }
      }
    }
    return p.sort((a, b) => a.length - b.length)[0];
  },
};
var Input = {
  elements: {
    box: document.getElementById("box"),
    spans: [],
    cursor: {
      position: 0,
      element: document.getElementById("cursor"),
    },
  },
  updateCursor: function () {
    let span = this.elements.spans[this.elements.cursor.position - 1];
    if (!span) {
      this.elements.cursor.element.style.left = "0px";
      return;
    }
    this.elements.cursor.element.style.left =
      this.elements.spans[this.elements.cursor.position - 1].offsetLeft +
      this.elements.spans[this.elements.cursor.position - 1].offsetWidth +
      "px";
  },
  listen: function () {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 8) {
        // Backspace
        if (this.elements.cursor.position === 0) return;
        this.elements.spans[this.elements.cursor.position - 1].innerHTML = "";
        this.elements.cursor.position--;
        this.updateCursor();
      } else if (e.keyCode === 13) {
        // Enter
        this.elements.spans[this.elements.cursor.position].innerHTML += "<br>";
        this.elements.cursor.position++;
        this.updateCursor();
      } else if (e.keyCode === 37) {
        // Left arrow
        if (this.elements.cursor.position === 0) return;
        this.elements.cursor.position--;
        this.updateCursor();
      } else if (e.keyCode === 39) {
        // Right arrow
        if (this.elements.cursor.position === this.elements.spans.length - 1)
          return;
        this.elements.cursor.position++;
        this.updateCursor();
      } else if (e.keyCode === 38) {
        // Up arrow
        if (this.elements.cursor.position === 0) return;
        this.elements.cursor.position--;
        this.updateCursor();
      } else if (e.keyCode === 40) {
        // Down arrow
        if (this.elements.cursor.position === this.elements.spans.length - 1)
          return;
        this.elements.cursor.position++;
        this.updateCursor();
      } else if (e.key.length === 1) {
        // Any other key
        let span = this.elements.spans[this.elements.cursor.position];
        if (!span) {
          span = document.createElement("span");
          span.innerHTML = e.key;
          this.elements.box.appendChild(span);
          this.elements.spans.push(span);
        }
        this.elements.cursor.position++;
        this.updateCursor();
      }
    });
  },
};
Input.listen();
oninput = (e) => {
  let str = e.target.value;
  str = str.split(" ")[str.split(" ").length - 1];
  console.log(Autocomplete.finishWord(str));
};
