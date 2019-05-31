function getMax(arr){
    let max;
    if(arr.length>=1)
     max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<=arr[i]){
            max=arr[i];
        }
    }
    return max;
}

function getMin(arr){
    let min;
    if(arr.length>=1)
         min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>=arr[i]){
            min=arr[i];
        }
    }
    return min;
}

Array.prototype.pluck=function(flag){
    let arr=this;
    setTimeout(function () {
        if(flag){
            const max=getMax(arr);
            console.log(max);
            return max;
        }else{
            const min=getMin(arr);
            console.log(min);
            return min;
        }
    },0);
}

let arr=[3,4,6,32,63,2,4,5,2,41,1];

arr.pluck(true);
arr.pluck(false);

console.log("Global Process done");