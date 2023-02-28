//Написати функцію, яка порахує факторіал натурального числа
const n=10;
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(n));
