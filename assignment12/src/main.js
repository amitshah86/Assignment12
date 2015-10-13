(function () {


let url = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=atlanta&includingbraves=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {
  console.log(response);
  $('.bla').text(response);
});



  // $.getJSON(url)
  //   .then( function (response) {
  //     console.log(response);
  //   });