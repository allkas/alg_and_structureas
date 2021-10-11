const array = [12, 15,42, 54, -65, 254, -57, 36, 69, 45, 2];

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j += 1) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }

        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }

    return array;
}

console.log(selectionSort(array));