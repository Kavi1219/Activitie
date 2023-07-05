let gst= 35
let cities = ["heaven", "Earth", "Misery", ]
let uberRates = [100, 50, 100]

let customerName = "Raj"
let customerCity = cities[2];

console.log("Hello", customerName+ ", wellcome  to life traveler")

function getRate(customerCity) {
  
  function uberRate(customerCity, index) {

    let finalRate = (uberRates[index]) + gst
    return finalRate;
  }
   var fee = uberRate(customerCity, cities.indexOf(customerCity));
  
  console.log('we have reached',customerCity, "and the fee is:", fee)
}
getRate(customerCity)