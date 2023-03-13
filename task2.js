// Написати функцію, яка поверне усі перестановки слова
const word = 'You'
function permutations (str) {
  const results = []
  if (str.length === 1) {
    results.push(str)
    return results
  }
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i]
    const charsLeft = str.substring(0, i) + str.substring(i + 1)
    const innerPermutations = permutations(charsLeft)
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j])
    }
  }
  return results
}
console.log(permutations(word))
