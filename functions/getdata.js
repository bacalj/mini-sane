exports.handler = async (event, context) => {
    let foo = 'foo'

    return {
        statusCode: 200,
        body: `Hello, ${foo}`
    }
}