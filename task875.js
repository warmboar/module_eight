function uniqueAndSorted(arr) {
    
    let result = [];
   
    for (let num of arr) {
     
      if (!result.includes(num)) {
       
        result.push(num);
      }
    }
  
    result.sort((a, b) => a - b);

    return result;
  }
  
 
  let numbers = [5, 3, 2, 4, 1, 2, 3, 4, 5];
  let uniqueNumbers = uniqueAndSorted(numbers);
  console.log(uniqueNumbers); 
  