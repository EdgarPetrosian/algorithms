
function createRandomArray(min, max, length) {
    var randomArray = [];

    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }

    return randomArray;
}

const quickSort = (arr = []) => {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[0];
    const leftArr = [];
    const rightArr = [];

    for(let i = 1;i<arr.length;i++){
            if(arr[i]<=pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }

return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
let array = createRandomArray(4,76,10)
console.log(array)
console.log(quickSort(array));