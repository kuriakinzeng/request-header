console.log(process.argv.reduce(function(a,b){
    if(!isNaN(Number(b))){
        return a+Number(b);
    } else {
        return 0;
    }
}));