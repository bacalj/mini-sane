const { default: axios } = require("axios");

exports.handler = async (event, context) => {
  axios.get('icanhazdadjoke')
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};