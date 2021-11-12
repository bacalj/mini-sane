// const { default: axios } = require("axios");

// exports.handler = async (event, context) => {
//   axios.get('icanhazdadjoke').then((r) => {
//     console.log(r)
//   })
//   return {
//     statusCode: 200,
//     body: "Hello, World"
//   };
// };

var axios = require("axios").default;

exports.handler = async (event, context) => {
    let mot = event.queryStringParameters.word

    var options = {
        url: `https://pokeapi.co/api/v2/pokemon/ditto`,
    };

    let data

    try {
     data = await axios.request(options).then(response => response.data )
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: e.message
        })
      }
    }



    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  };