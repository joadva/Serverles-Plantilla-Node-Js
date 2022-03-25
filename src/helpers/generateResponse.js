const generateResponse = (code, data) => {
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'x-amazon-apigateway-binary-media-types': "multipart/form-data"
        },
        body:JSON.stringify({...data},null,2)
    }
}

module.exports.generateResponse = generateResponse;