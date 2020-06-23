var XMLHttpRequest  = require("xmlhttprequest").XMLHttpRequest;
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.lhcargo.com/routes?origin=FRA&destination=PVG&fromDate=2020-06-18&productCode=YNZ', true);

request.onload = function() {
  // Begin accessing JSON data here
  console.log(this.response);
  //var data = JSON.parse(this.response);

  /*if (request.status >= 200 && request.status < 400) {
    data.forEach(flight => {
      console.log(flight.requestID);
    })
  } else {
    console.log('error');
  }*/
}

// Send request
request.send();

//    xhttp.open("GET", "https://api.lhcargo.com/routes/get?origin=FRA&destination=HKG&fromDate=2017-07-20&productCode=YNZ", false);
