function merge(firstArray, secondArray, sizeFirst, sizeSecond) {
  let i = 0;
  let j = 0;
  let k = 0;

  let sortedList = [];

  while (i <= sizeFirst && j <= sizeSecond)
    if (firstArray[i] < secondArray[j]) {
      sortedList[k++] = firstArray[i++];
    } else {
      sortedList[k++] = secondArray[j++];
    }

  for (; i <= sizeFirst; i++) {
    sortedList[k++] = firstArray[i];
  }

  for (; j <= sizeSecond; j++) {
    sortedList[k++] = secondArray[j];
  }
}

function mergeSort(arr) {
  const firstElement = 0;
  const lastElement = arr.length - 1;

  if (firstElement < lastElement) {
    let midElement = Math.floor((firstElement + lastElement) / 2);

    let firstHalf = mergeSort([arr[0], arr[1], arr[2], arr[3]]);
    let secondHalf = mergeSort([arr[4], arr[5], arr[6], arr[7]]);

    return merge(firstHalf, secondHalf, firstHalf.length, secondHalf.length);
  }
}

let arr = [9, 3, 7, 5, 6, 4, 8, 2];
console.log(mergeSort(arr));
