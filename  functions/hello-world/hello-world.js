const handler = async (event) => {
  try {

    let something = 'foo'

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${something}` }),
    }
  } 
  
  catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
