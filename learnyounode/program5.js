var fs = require('fs');
var printDir = function(dirname,ext,callback) {
    fs.readdir(dirname,function(err, f){
        if(err)
            return callback(err);
            
        var fx = f.filter(function(x){
            return (x.split('.')[1] == ext);
        });
        return callback(null, fx);
    });
};
module.exports = printDir;