function sendMessage(content) {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/822978952368619552/aMEMuYmAHPOGAgBtFWXSQvHtq8ZmvqlrbGewE9eItvESCRaxkHfoC6h8TeXYxZ6K1wgX");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Logger",
        avatar_url: "",
        content: content
      }

      request.send(JSON.stringify(params));
}

sendMessage('New Visitor!')
