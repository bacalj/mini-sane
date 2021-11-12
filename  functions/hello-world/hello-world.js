const { default: axios } = require("axios");

exports.handler = async (event, context) => {
  axios.get('icanhazdadjoke').then((r) => {
    console.log(r)
  })
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};