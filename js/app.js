var url = 'http://concerts.livenation.com/microsite/settlement'

var options = {
  method: 'get',
  url: url,
  withCredentials: false
}

// axios(options)
// .then(function(response) {
//   console.log(response);
// })
// $.get(url, function( my_var ) {
//   console.log('mv',my_var)
//     // my_var contains whatever that request returned
// });
$('.container').load(url); // SERIOUSLY!

// $.ajax({
//     url: url,
//     type: 'GET',
//     success: function(res) {
//       console.log('ress',res);
//         // var headline = $(res.responseText).find('a.tsh').text();
//         // alert(headline);
//     }
// });