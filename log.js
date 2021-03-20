function sendMessage(username,content) {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discordapp.com/api/webhooks/676118118082281513/ZS5YcWhurzokBrKX9NgexqtxrJA5Pu2Bo4i7_JsIxC-JIbPBVhSZkcVVukGOro52rnQA");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: username,
        avatar_url: "",
        content: content
      }

      request.send(JSON.stringify(params));
}

