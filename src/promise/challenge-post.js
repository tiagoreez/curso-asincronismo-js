import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/'

function postData(urlApi, data){

    const response = fetch(urlApi, {

        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {

            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)

    })

    return response


}

const dataToPost = {

    "title": "Apple iPhone 14 PRO",
    "price": 1199,
    "description": "The newest iPhone overpriced",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]


  }


postData(`${API}products`, dataToPost)
  .then(response => response.json())
  .then(data => console.log(data))