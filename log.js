function sendMessage(username,content) {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/822978952368619552/aMEMuYmAHPOGAgBtFWXSQvHtq8ZmvqlrbGewE9eItvESCRaxkHfoC6h8TeXYxZ6K1wgX");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: username,
        avatar_url: "",
        content: content
      }

      request.send(JSON.stringify(params));
}

function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
   sendMessage('New Visitor!', `IP address: ${ip}`)
});
