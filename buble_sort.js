const array = [12, 15,42, 54, 65, 254, 57, 36, 69, 45, 2];
let count = 0;
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }
    return array;
};

bubbleSort(array)// O(n*n)
