const { default: axios } = require("axios");

const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context) => {
  console.log('wha?')
  return axios.get(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then((data) => ({
      statusCode: 200,
      body: data
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
