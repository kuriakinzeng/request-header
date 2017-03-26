var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var docObj ={
  firstName: process.argv[2], 
  lastName: process.argv[3]
}
mongo.connect(url,function(err,db){
    if (err) throw err
    var collection = db.collection('docs');
    collection.insert(docObj,function(err,data){
        if(err) throw err
        console.log(JSON.stringify(docObj))
    })
    db.close()
})