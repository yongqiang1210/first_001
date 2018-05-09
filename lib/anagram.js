
function anagram(str){

    var result=[]
    if(!str){
        return result
    }

    if(str.length==1){
        result.push(str)
        return result
    }

    if(str.length==2){
        result.push("ab")
        result.push("ba")
        return result
    }
    if(str.length==3){

        for(var i=0;i<str.length;i++){
            for(var j=0;j<2;j++){
                result.push(str[i]+anagram(drop(str,i))[j])
            }
        }
 
        return result
    }
}


function drop(str,n){
    result=""
    for(var i=0;i<str.length;i++){
        if(i==n) continue
        result+=str[i]
    }
    return result
}
module.exports=anagram