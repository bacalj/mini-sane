const { default: axios } = require("axios")

const handler = async (event) => {
  let response;

  try {

    response = await axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" } })
    const joke = response.data

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${joke}` }),
    }
  } 
  
  catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
