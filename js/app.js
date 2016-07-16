var options = {
  method: 'get',
  url: 'http://concerts.livenation.com/microsite/settlement',
  withCredentials: false
}

axios(options)
.then(function(response) {
  console.log(response);
})