function merge(array, low, mid, high) {
  let firstSubArray = mid - low + 1;
  let secondSubArray = high - mid;

  // Create temp arrays
  let firstArray = new Array(firstSubArray);
  let secondArray = new Array(secondSubArray);

  // Copy data to temp arrays firstArray[] and secondArray[]
  for (let i = 0; i < firstSubArray; i++) firstArray[i] = array[low + i];
  for (let j = 0; j < secondSubArray; j++) secondArray[j] = array[mid + 1 + j];

  // Merge the temp arrays back into arr[low..high]

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = low;

  while (i < firstSubArray && j < secondSubArray) {
    if (firstArray[i] <= secondArray[j]) {
      array[k] = firstArray[i];
      i++;
    } else {
      array[k] = secondArray[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // firstArray[], if there are any
  while (i < firstSubArray) {
    array[k] = firstArray[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // secondSubArray[], if there are any
  while (j < secondSubArray) {
    array[k] = secondArray[j];
    j++;
    k++;
  }
}

function mergeSort(array, low, high) {
  if (low >= high) {
    return;
  }
  let mid = low + parseInt((high - low) / 2);

  mergeSort(array, low, mid);
  mergeSort(array, mid + 1, high);
  merge(array, low, mid, high);
  return array;
}

let arr = [9, 3, 7, 5, 6, 4, 8, 2];
const arrSize = arr.length;
console.log(mergeSort(arr, 0, arrSize - 1));
