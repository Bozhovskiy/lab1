//Знайти елемент із найбільшою частотою повторень
const arr = [1, 2, 5, 5, 5, 6, 6, 6, 3, 4, 4, 5, 2, 2, 2, 6];
function mostFrequent(arr) {

    return arr.reduce((a, b) =>
        (arr.filter(v => v === a).length >= arr.filter(v => v === b).length) ? a : b
    );
}

console.log(mostFrequent(arr));
