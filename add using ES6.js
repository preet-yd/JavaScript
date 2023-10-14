function add (...x){
    return x.reduce((acc,curr) => acc+curr,0);
}
console.log(add(1,1,1,1,1));