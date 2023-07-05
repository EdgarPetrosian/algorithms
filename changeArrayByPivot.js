let givenArray = [2, 1, 1, 1, 1, 1, 1, 5, 4, 9, 8]

console.log('given array ',givenArray)

function changeArrayByPivot(arr, pivotIndex){
    let pivot = arr[pivotIndex];
    for (let index in arr){
      if (arr[index] < pivot){
					arr.splice(0, 0, arr.splice(index, 1)[0]);
      } else if(arr[index] > pivot){
					arr.splice(arr.length - 1, 0, arr.splice(index, 1)[0]);
      } else {
					arr.splice(pivotIndex, 0, arr.splice(index, 1)[0]);
      }      
    }
    return arr
}

console.log('received array ',changeArrayByPivot(givenArray, 7))
