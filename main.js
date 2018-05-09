// const fibonacci = require('./lib/fibonacci')
//console.log(fibonacci(1));
/*
function isLeapyear(n){
    if(n%400==0){
        return true;
    }
    if(n%100==0){
        return false;
    }
    if(n%4==0){
        return true;
    }
    
    return false;
}

function isLeapyear(n){
    b=1;
    while(b<n){

    }
}

console.log(isLeapyear(2000));
*/
const fibonacci =require('./lib/fibonacci')

var len=20
for(var i=1;i<len;i++){
    console.log(fibonacci(i));
}

function drop(str,n){
    result=""
    for(var i=0;i<str.length;i++){
        if(i==n) continue
        result+=str[i]
    }
    return result
}
console.log(drop("abc",0));
