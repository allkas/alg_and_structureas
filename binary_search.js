const array = [1, 2, 3, 4, 5, 7, 8, 10, 13, 14, 15];
let count = 0;

const binary_search = (array, item) => {

    count += 1;
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}


const recursiveBinSearch = (arr, item, start, end) => {
    let middle = Math.floor((start + end) / 2);
    if (item === arr[middle]) {
        return middle;
    }
    if (item < arr[middle]) {
        return recursiveBinSearch(arr, item, 0, middle - 1)
    } else {
        return recursiveBinSearch(arr, item, middle + 1, end)
    }

}
recursiveBinSearch(array, 254, 0, array.length);
// console.log(binary_search(array, 15));
// console.log(count);