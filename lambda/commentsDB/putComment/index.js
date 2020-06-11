'use strict'
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();

    let responseBody = "";
    let statusCode = 0;

    const { id, body, reports, timestamp, post_id, user_id } = JSON.parse(event.body);
    
    const params = {
        TableName: "comments",
        Item: {
            id: id,
            body: body,
            reports: reports,
            timestamp: timestamp,
            post_id: post_id,
            user_id: user_id
        }
    };

    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (err) {
        responseBody = `Unable to put comment: ${err}`;
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
