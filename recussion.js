const largest = (list) => {
    let first = list[0]
    let rest = list.slice(1, list.length);
  
    if (rest.length === 0) {
      // list is of length 1
      return first;
    } else {
      let largestRest = largest(rest);
  
      if (first > largestRest) {
        return first;
      } else {
        return largestRest;
      }
    }
  }
  
  
  let list = [18,
    66, 9,
    44, 4, 94,
    97, 54, 69, 37];
  
  console.log(largest(list));