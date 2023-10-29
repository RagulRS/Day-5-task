const jsonObject = {
    name: "Ragul",
    age: 23,
    city: "Coimbatore"
  };
  
  //for
  console.log("...for...");
  const keys = Object.keys(jsonObject);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonObject[key];
    console.log(key, value);
  }
  
  
  //for-in
  console.log("...for-in...");
  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key, jsonObject[key]);
    }
  }
  
  //for-of
  console.log("...for-of...");
  for (const value of Object.values(jsonObject)) {
    console.log(value);
  }
  
  //for-each
  console.log("...for-each...");
  
  Object.entries(jsonObject).forEach(([key, value]) => {
    console.log(key, value);
  });
  
  