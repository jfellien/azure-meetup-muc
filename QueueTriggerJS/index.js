module.exports = function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);

    context.bindings.outTable = {
        PartitionKey:"hallo",
        RowKey:"welt",
        data: myQueueItem
    }
    
    context.done();
};