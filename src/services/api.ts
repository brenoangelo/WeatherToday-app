import axios from 'axios'

const options: object = {
    method: 'GET',
    url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
    params: {format: 'json', from: 'AUD', to: 'CAD', amount: '1'},
    headers: {
      'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
      'x-rapidapi-key': 'd23e8dd386msh23e14f9f055b202p1c22cajsnfe4f27a202eb'
    }
};


  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

