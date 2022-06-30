
    function send() {
    
      alert('Sendong message.....!');
      let options = {
        method: "GET"
      };
      fetch("https://api.agify.io?", options)
        .then(function(response) {
          return response.json();
        })
        .then(function(status) {
          console.log(status);
    });
  }