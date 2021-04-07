//Named function
// function display(){
//     return "Hello world";
// }
// // Anonymous function
// var res = function(){
 
//      return "Hello";
// }
// document.write(res());

//Anonymous function

// setTimeout(function(){
//     document.write("This is setTimeout");
// },4000);

// var res = function(){
//         document.write("This is setTimeout") 
//     }
// setTimeout(res,3000);


//Constructor
function User(name){
  this.name = "Kajal";
  this.admin = true;
}

let user = new User("Jack");
alert("This is name: "+user.name);
alert("This is admin: "+user.admin);


