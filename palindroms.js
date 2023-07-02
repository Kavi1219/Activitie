let isPalindrome = function () {
    var myArray = ['malayalam', 'dad', 'jack','mom' ];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()