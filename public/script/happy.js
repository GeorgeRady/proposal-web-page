function prom(){
    var num = parseInt(prompt('Please enter the number to check if happy or not:',"0")) ;
    if (isNaN(num)){
        prompt();
    }
    var out = new Array(5);
    var umm = 0;
    var n = String(num);
    for(var i = 0; i< 5; i++){
        for(var j = 0 ; j<n.length  ;j++){
            umm += parseInt(n[j])  * parseInt(n[j]) ;
        }
        out[i] =umm;
        num = umm;
        umm =0;
        n = String(num);
    }
    if (num==1){
        alert("Happy :) "+" "+out);
    }
    else{
        alert("Not Happy :( "+" "+out);
    }
}
