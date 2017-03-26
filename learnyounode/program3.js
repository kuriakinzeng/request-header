var fs = require('fs');
var f = fs.readFileSync(process.argv[2]).toString();
console.log(f.split('\n').length-1);
