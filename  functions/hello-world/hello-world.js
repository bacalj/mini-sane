const { default: axios } = require("axios");

exports.handler = async (event, context) => {
  //await axios.get('https://icanhazdadjoke.com', { headers: { "Accept": "text/plain" } })
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};