function merge(firstArray, secondArray, sizeFirst, sizeSecond) {
  let i = 0;
  let j = 0;
  let k = 0;

  // console.log(firstArray, secondArray, sizeFirst, sizeSecond);

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

  console.log(sortedList);

  return sortedList;
}

function mergeSort(low, high) {
  if (firstElement < lastElement) {
    let midElement = Math.floor((firstElement + lastElement) / 2);

    let firstArray = [];
    let secondArray = [];

    for (let i = 0; i <= midElement; i++) {
      firstArray.push(arr[i]);
    }

    for (let j = midElement + 1; j <= lastElement; j++) {
      secondArray.push(arr[j]);
    }

    mergeSort();
    mergeSort(firstElement);
    merge();
  } else {
    return;
  }
}

let arr = [9, 3, 7, 5, 6, 4, 8, 2];
console.log(mergeSort(arr));
