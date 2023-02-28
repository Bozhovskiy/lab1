//Написати реалізацію швидкого сортування масиву
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let unsorted = [23, 45, 16, 37, 3, 99, 22];
console.log('Unsorted array', unsorted);
console.log('Sorted array', quickSort(unsorted));
