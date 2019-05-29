
function getFilterPromise(number,arr) {
       return new Promise(function (resolve) {
        let newArr=arr.filter(n => n != number);
        resolve(newArr);
    })
}

function removeNumAsync(number) {
        let filterAction=getFilterPromise(number,this);
        filterAction.then(data=>console.log(data));
   }

Array.prototype.removeNum=removeNumAsync;

const arr=[3,4,2,4,2,2,3,4,2,4];


arr.removeNum(4);



