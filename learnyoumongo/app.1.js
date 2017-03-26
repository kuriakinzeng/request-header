var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url,function(err,db){
    if (err) throw err
    db.collection('parrots').find({
        age: {$gt:parseInt(process.argv[2])}
    },{
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function(err,documents){
        console.log(documents)
    })
    db.close()
})