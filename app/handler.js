const aws =require('aws-sdk');

module.exports.putsqs = async (event, context)=>{
    /**
     * We trigger this lambda manually
     * and put a message to sqs
     */
    const sqs = new aws.SQS({region: 'us-east-1'});
    // SQS message parameters
    const params = {
        MessageBody: JSON.stringify({key:'value'}),
        QueueUrl: process.env.SQS_URL
    };

    return  "ok";
}

module.exports.getsqs = (event, context) =>{
    /**
     * This Lambda expect an event from SQS
     * then it print to console
     */
    console.log(event);

}
