


var json1 = '{"name":"kavi" , "age": 23}';

var json2 = '{"age":23 , "name": "kavi"}';

function compareJSON(params) {
var obj1 = JSON.parse(json1);

var obj2 = JSON.parse(json2);

// console.log(Object.keys(obj1).length);
//   console.log(Object.keys(obj2).length);
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  
  //3. Compare the actual properties(Keys)
  for(var key in obj1) {
    if(!obj2.hasOwnProperty(key) & obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}

const result = compareJSON();
console.log(result);
