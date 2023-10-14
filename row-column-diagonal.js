
let num = prompt("enter the number");

let arr = [];
let ansRows = [];
let ansCol = [];
let ansDia = [];
let count = 1;

console.log('#rows');

for(let row = 0 ; row<num ; row++){
  arr[row] = new Array(num);
  for(let col = 0 ; col<num ; col++){
    arr[row][col] = count;
    count++;
  }
}
for(let row = 0; row < num; row++){
  ansRows[row] = new Array(num);
  for(let col = 0; col < num; col++){
    ansRows[row][col] = arr[row][col];
  }
}

console.log('#column');

for(let row = 0; row < num; row++){
  ansCol[row] = new Array(num);
  for(let col = 0; col < num; col++){
    ansCol[row][col] = arr[col][row];
  }
}

console.log('#diagonals');

ansDia[0] = new Array(num);
for(let i = 0; i < num; i++){
  ansDia[0][i] = arr[i][i];
}

let col = num-1;
ansDia[1] = new Array(num);
for(let row = 0; row < num; row++){
  ansDia[1][row] = arr[row][col];
  col--;
}

for(let i = 0; i < ansRows.length ; i++){
  ans.push(ansRows[i]);
}
for(let i = 0; i < ansCol.length ; i++){
  ans.push(ansCol[i]);
}
for(let i = 0; i < ansDia.length ; i++){
  ans.push(ansDia[i]);
}

return ans;

// console.log(ansRow);
// console.log(ansCol);
// console.log(ansDia);