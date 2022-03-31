const request = require('request');

async function fun1(req, res){
    let response = await request.get('http://www.google.com');
      if (response.err) { 
          console.log('error');
        }
      else { 
          console.log(response);
          console.log('fetched response');
        }
}

fun1();
