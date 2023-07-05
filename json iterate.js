
// for and for in 

var cars = [{name:'kavi'}, {carname:'Rolls Royce'}];
    
for (var i = 0; i < cars.length; i++){
  var obj = cars[i];
  for (var key in obj){
    var value = obj[key];
   console.log(key + ": " + value);
  }
};
 
// for of 

for (var car of cars) {
    var car1 = cars[key];
    console.log(key + `:`+ value);
    
}

// for each 

cars.forEach(function(car) {
    console.log(car);
});