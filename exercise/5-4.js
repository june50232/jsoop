//共享參考
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2.push(4);
console.log(arr1); //[1,2,3,4]

//避免共享參考
var arr1 = [1, 2, 3];
var arr2 = arr1.slice();
arr2.push(4);
console.log(arr1); //[1,2,3]
