const array = [12, 15,42, 54, 65, 254, 57, 36, 69, 45, 2];
// let count = 0;


const quichSort = (arr) => {
  if (arr.length <= 1) {
      return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex)
          continue
      if (arr[i] < pivot) {
          less.push(arr[i]);
      } else {
          greater.push(arr[i]);
      }
    }
    return [...quichSort(less), pivot, ...quichSort(greater)];
};

console.log(quichSort(array))