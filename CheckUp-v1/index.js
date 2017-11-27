module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {

        const response_message = `"Hello ${ (req.query.name || req.body.name) }`;

        context.bindings.outQueue = {
            message: response_message
        }

        context.res = {
            body: response_message
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};