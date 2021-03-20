function sendMessage(username,content) {
      var request = new XMLHttpRequest();
      request.open("POST", "webby hooky");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: username,
        avatar_url: "",
        content: content
      }

      request.send(JSON.stringify(params));
}

