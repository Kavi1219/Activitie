// let odds = function(arr){
//     var arr = [1,2,3,4,4,5,6,7,8,9];
//     console.log('odd');
//     for(var i=0; i<arr.length;i++){

//    if(arr[i] % 2=== 0) 
//    {
//    console.log(arr[i],'is a odd number');
//    }
//        }
// };
// odds();

let arr=[0,1,2,3,4,5,6,7,8,9];

let odd = function () {
  let odd= arr.filter(num => num %2 ==1)
  console.log(odd)
}
odd();