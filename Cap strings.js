
let str = function () {
    let arr = "one day ill become the master of programming"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str();