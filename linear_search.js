const array = [1, 2, 4, 4, 5, 6, 23, 43, 12, 1, 5, 8, 9, 10];

const lenear_search = (array, item) => {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(lenear_search(array, 166));