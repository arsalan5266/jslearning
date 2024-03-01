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
// const person = {
//  firstName:"John",
//  lastName:"Doe", 
//  age:50,
//  eyeColor:"blue",
// }
// let obj = JSON.stringify(person)
// console.log(obj);


// let newObj = JSON.parse(obj)
// console.log(newObj);

// // template literal
// let FrstName = "john";
// let LstName = "Doe";
// let text = `Welcom ${FrstName},${LstName}`;
// console.log(text);



let name ="rameez"
let age =22
// console.log("my name is " + name + " my age is " + age);

console.log(`my name is ${name} and my age is ${age}`);


let todayDate= new Date()
console.log(todayDate);

//array  methods
//  let fruits = ["banana","mango","apple","orsngr"]
//  let size = fruits.length;
//  console.log(fruits);


// let numbers = [2,3,4,5,6,7,8,]
//  let number = numbers.toString();
//  console.log(number);

//  const boy = ["name","Arsalan"];
//  const boyr = ["Age",24];
//  const res = boy.concat(boyr)
//  console.log(res);
// odd condition
//  if(numbers[i]%==!0){

// }
let numbers = [2,3,4,5,6,7,8,];
for (let i = 0; i < numbers.length; i++) {
 if (numbers[i]%2==0) {
    console.log(numbers[i],"even")

   
 }      
   }
