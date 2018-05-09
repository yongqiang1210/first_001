/*const fibonacci = (n)=> {
    return 1;
}

Amodule.exports = fibonacci
*/
function fibonacci(n){
    if(n<=3){
        return 1;
    }else{
        return fibonacci(n-2)+fibonacci(n-1);
    }
}
module.exports = fibonacci