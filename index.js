// object
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue",secondObject:{
// Name:"ali",age:"40", adress:"saddar",email:"csgaha@",password:"142553",eyeColor:"Green",degree:"BSCS"
// }
// };
// console.log(person);
// local storage

// localStorage.setItem("fname","Arsalan");
// localStorage.setItem("personInfo",JSON.stringify(person))
// const obj = localStorage.getItem("personInfo")
// const newobj= JSON.stringify(obj)
// console.log(newobj)
// localStorage.setItem("numbers",12)
// localStorage.setItem("boolean","true")

// localStorage.removeItem("numbers")
// localStorage.removeItem("boolean")

// const info = localStorage.getItem("personInfo")
// const lname = localStorage.getItem("fname")
// console.log(lname)
// console.log(info)

// localStorage.clear();
const person = {
 firstName:"John",
 lastName:"Doe", 
 age:50,
 eyeColor:"blue",
}
let obj = JSON.stringify(person)
console.log(obj);




let newObj = JSON.parse(obj)
console.log(newObj);
