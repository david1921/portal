import 'node-fetch';
 // const BASE_HOST = "http://localhost:8080"
  const BASE_HOST = "https://seaty.herokuapp.com"

  export default{ 
    post: (url, data) => {
    
        const request = new Request(BASE_HOST + url, {
          method: 'POST', 
          body: data, 
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8'
           }
        });

        fetch(request)
          .then(checkStatus) 
          .then((responseData)=> {
            return responseData;
          })
          .catch(function(error) {
          console.log('error' + error)
        })
    },

   get: (url) =>{
     const newUrl = BASE_HOST + url;

     var request = { method: 'GET',
                     headers:  {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                     }    
                };
     return fetch(newUrl)
      .then(checkStatus) 
      .then((response) => { 
      return response; }) // Transform the data into json
      .catch(function(error) {
        console.log(error)
        return error;
    })
    }

 };


 function checkStatus (response) {
    if (response.ok) {
       return response.json();
    } 
    else {
      console.log('error>>>>>>>>' + response.status)
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
  }
}