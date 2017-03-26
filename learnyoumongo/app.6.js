var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    if (err) throw err
    var collection = db.collection('prices');
    collection.aggregate([{
        $match: {
            size: process.argv[2]
        }
    },{
        $group:{
            _id: 'total',
            total: {
                $avg: '$price'
            }
        }
    }]).toArray(function(err, results){
        // console.log(results)
        console.log(Number(results[0].total).toFixed(2))
    })
    db.close()
})