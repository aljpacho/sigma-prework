function maxMin(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];
  let newArr = [];

  //max element in array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  //min element in array
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < minNum) {
      minNum = arr[j];
    }
  }
  newArr.push(minNum, maxNum);
  console.log(newArr);
}

maxMin([20, 50, 12, 6, 14, -8]);
