let arr =[1,2,3];
// Add to end 
arr.push(4);
console.log(arr);
//Remove an element 
arr.pop();
console.log(arr);
arr.unshift("test");
console.log(arr);
arr.shift();
console.log(arr);

arr.push(4);
arr.push(5);
console.log(arr);
arr.splice(2,1);
console.log(arr);
arr.splice(1,0,99);
console.log(arr);
arr.splice(1,2,4,4);
console.log(arr);