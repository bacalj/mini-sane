const { default: axios } = require("axios");

exports.handler = async (event, context) => {
  console.log(axios)
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};