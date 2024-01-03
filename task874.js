var person = {
    firstName: "Alex",
    lastName: "Brown"
  };
  
  
  function setFullName(fullName) {
    
    var parts = fullName.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
  
 
  var setPersonFullName = setFullName.bind(person);
  
 
  setPersonFullName("John Smith");
  
 
  console.log(person); 