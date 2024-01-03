function printInfo(obj) {
   
    console.log("Name: " + obj.name + ", Age: " + obj.age);
  }
  
 
  var person = {name: "Vasya", age: 25};
  
  
  printInfo.call(person, person);

  