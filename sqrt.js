exports.sqrt = function(x){
    if (x<0){
        x = x*-1;
        console.log("The square root of "+x+ ' is: j'+x**0.5);
    }
    else{
        console.log("The square root of "+x+ ' is: '+x**0.5);
    }
}
