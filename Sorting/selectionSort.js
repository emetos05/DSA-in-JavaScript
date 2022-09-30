const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    let smallest = array[minIndex];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        minIndex = j;
        smallest = array[j];
      }
    }
    array[minIndex] = array[i];
    array[i] = smallest;
  }
}

selectionSort(numbers);
console.log(numbers);
