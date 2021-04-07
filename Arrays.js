// let arr = ["I","am","Kajal"];
// arr.forEach(element => {
//     document.write(element+" ");    
// });

// delete arr[1];
// document.writeln(arr.length);

// arr.splice(1,1);
// arr.forEach(element => {
//     document.write(element+" ");    
// });
// document.writeln(arr.length);

// let arr1 = ["Hi","I","am","a","girl"];
// arr1.forEach(element => {
//     document.write(element+" ");    
// });
// document.writeln(arr1.length);

// arr1.splice(1,2,"p");
// arr1.forEach(element => {
//     document.write(element+" ");    
// });
// document.writeln(arr1.length);

// ["Bilbo","Volvo","Nivlo"].forEach((item,index,array)=>{
//   alert(`${item} is present at ${index} in an ${array}`);
// });

//let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
//arr.sort(function(a,b){return a-b;});
// arr.sort((a,b) => {a-b;});

// alert( arr );  // 1, 15, 2

// localeCompare
//let name_arr = ["Om","Kajal","Piyu"];

//alert(name_arr.sort((a,b) => a.localeCompare(b)));

// name_arr.reverse();
// name_arr.forEach(element => {
//     alert(element);
// });

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

// let str = "test";

// alert( str.split('') ); // t,e,s,t

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

alert(Array.isArray(arr));
// let str = arr.join(' '); // glue the array into a string using ;

// alert( str ); // Bilbo;Gandalf;Nazgul

