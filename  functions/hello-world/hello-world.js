const { default: axios } = require("axios")

const handler = async (event) => {

  try {

    let wha = await axios.get('https://icanhazdadjoke.com/')
    console.log(wha)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello did i work?` }),
    }
  } 
  
  catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
