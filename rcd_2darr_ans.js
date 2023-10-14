

let num = 3;
// let num = prompt("enter the number");

let arr = [];
let ansRows = [];
let ansCol = [];
// let ansDia1 = [];
// let ansDia2 = [];
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
      // console.log(arr[row][col] + " ");
      ansRows[row][col] = arr[row][col];
  }
  
}
console.log(ansRows);

  console.log('#column');

 for(let row = 0; row < num; row++){
     ansCol[row] = new Array(num);
  for(let col = 0; col < num; col++){
      //  console.log(arr[col][row] + " ");
      ansCol[row][col] = arr[col][row];
  }
 }
 
 console.log(ansCol);
 
  console.log('#diagonals');
  ansDia[0] = new Array(num);
 for(let i = 0; i < num; i++){
      // console.log(arr[i][i] + " ");
      ansDia[0][i] = arr[i][i];
 }
 console.log(ansDia);
 
  let col = num-1;
  ansDia[1] = new Array(num);
 for(let row = 0; row < num; row++){
  //  console.log(arr[row][col] + " ");
  ansDia[1][row] = arr[row][col];
  col--;
 }
 console.log(ansDia);
 
//   ansDia = ansDia1 + ansDia2;
//   console.log(ansDia);


//  for(let i = 0 ; i<8 ; i++){
//      if(i<3){
//      ans = ansRows[i];
//      }
//      else if(i>=3 && i<6){
//          ans = ansCol[i];
//      }
//      else if(i>=6){
//          ans = ansDi
//      }
//  }
//  console.log(ansRows[0]);