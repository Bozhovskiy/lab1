//Написати функцію, яка поверне усі перестановки слова
const word = 'You';
function permutations(str) {
    let results = [];
    if (str.length === 1) {
        results.push(str);
        return results;
    }
    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let charsLeft = str.substring(0, i) + str.substring(i + 1);
        let innerPermutations = permutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}
console.log(permutations(word));
