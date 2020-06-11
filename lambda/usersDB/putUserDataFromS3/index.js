const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    let statusCode = 0;
    let responseBody = '';
    const { name } = event.Records[0].s3.bucket;
    const { key } = event.Records[0].s3.object;
    
    const getObjectParams = {
        Bucket: name,
        Key: key
    };
    
    try {
        const s3data = await s3.getObject(getObjectParams).promise();
        const usersStr = s3data.Body.toString();
        const usersJSON = JSON.parse(usersStr);
        
        console.log(`Users ::: ${usersStr}`);

        await Promise.all(usersJSON.map(async user => {
            const { id, username, password, email, birthday, date_created, location } = user;

            const putParams = {
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

            await documentClient.put(putParams).promise();
        }));

        statusCode = 201;
        responseBody = 'Succeeded adding users';
        
    } catch (err) {
        statusCode = 403;
        responseBody = 'Error adding users';
    }

    const response = {
        statusCode: statusCode,
        body: responseBody
    };

    return response;
};
