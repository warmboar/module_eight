function calculate(a, b, operator) {
    
    switch (operator) {
      case "+":
     
        return a + b;
      case "-":
        
        return a - b;
      case "*":
       
        return a * b;
      case "/":
        
        return a / b;
      default:
 
        return null;
    }
  }
  
  
  var obj = { a: 4, b: 2, operator: "-" };
  
 
  var arr = [2, 3, "+"];
  
 
  var result = calculate.apply(obj, arr);
  
  
  console.log(result); 
  