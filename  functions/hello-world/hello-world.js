const { default: axios } = require("axios");

exports.handler = async (event, context) => {
  await axios.get('https://icanhazdadjoke.com', { headers: { "Accept": "text/plain" } })
    .then((r) => {
        console.log(r)
        return {
          statusCode: 200,
          body: r
        };
  })
};