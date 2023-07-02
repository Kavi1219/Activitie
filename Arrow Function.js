
// Print odd numbers in an array


let odd = (arr)=>{
    var arr = [1,2,3,4,4,5,6,7,8,9];
    for(var i=0; i<arr.length;i++){

   if(arr[i] % 2!= 0) 
   {
   console.log(arr[i],'is a odd number');
   }
       }
};
odd();


//Convert all the strings to title caps in a string array

let str = ()=> {
    let arr = "one day ill become the master of programming"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str(); 


//Sum of all numbers in an array

let func =  () => {
    
    let arr = [1, 2, 3, 4, 5]
    let sum = arr.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()


//Return all the prime numbers in an array

let prime = (arr)=> {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([7, 17,1,2,6, 5, 13]),'is a prime number');


//Return all the palindromes in an array

let isPalindrome = ()=> {
    var myArray = ['malayalam', 'dad', 'jack','mom' ];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()
