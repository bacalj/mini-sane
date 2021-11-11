const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World` }),
    }
  } 
  
  catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
