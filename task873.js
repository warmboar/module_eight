let users = [
    { name: "Anna", age: 25 },
    { name: "Vasya", age: 17 },
    { name: "Grisha", age: 19 },
    { name: "Gabe", age: 15 },
    { name: "Masha", age: 21 }
  ];
  
  
  let adults = users.filter(user => user.age >= 18);
  
  
  let names = users.map(user => user.name);
  

  console.log(adults); 
  console.log(names);
  