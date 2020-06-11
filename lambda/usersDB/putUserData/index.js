'use strict'
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();

    let responseBody = "";
    let statusCode = 0;

    const { id, username, password, email, birthday, date_created, location } = JSON.parse(event.body);

    const params = {
        TableName: "users",
        Item: {
            id: id,
            username: username,
            password: password,
            email: email,
            birthday: birthday,
            date_created: date_created,
            location: location
        }
    };

    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (err) {
        responseBody = `Unable to put user: ${err}`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    };

    return response;
}