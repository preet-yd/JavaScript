let arr = ['apple','banana','avocado'];
let upper = value => value[0].toUpperCase() + value.slice(1);
let ans = arr.map(upper);
let startA = value => value[0] == 'A';
let ans4 = ans.filter(startA);
console.log(ans4);