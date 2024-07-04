// const isRaining = true

// // if(isRaining){
// //     console.log("Carry Umbrella")
// // }else{
// //     console.log("Don't Carry Umbrella")
// // }

// // ternary operator
// // const result = isRaining ? "Carry umbrella" : "Dont carry umbrella"
// // console.log(result)

// // Short circuit
// isRaining && console.log("Carry umbrella")

// // const age = 21
// // if(age>18){
// //     console.log("You can cast vote")
// // }else{
// //     console.log("You can't cast vote")
// // }

// // double = doesnot checks datatype. it only checks value. Tripple = checks datatype
// const age = 21
// if(age == 21){        
//     console.log("Age equals 21")
// }else{
//     console.log("Age doesnot equals 21")
// }

// const temperature = 28
// if(temperature>30){
//     console.log("Hot")
// }else if(temperature>20){
//     console.log("moderate")
// }else{
//     console.log("Cool")
// }

// const marks = 100
// if(marks>=90 && marks<= 100){
//     console.log("A+")
// }else if(marks>=80 && marks<=90){
//     console.log("A")
// }else if (marks>=70 && marks<=80){
//     console.log("B+")
// }else if(marks>=60 && marks<=70){
//     console.log("B")
// }else{
//     console.log("Fail")
// }

// // const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// // // for(var i=0; i<days.length; i++){
// // //     console.log(days[i])
// // // }

// // for(let day of days){
// //     console.log(day)
// // }

// const data = {
//     name : "Abhilasha",
//     age : 22,
//     address : "Dhankuta"

// }

// for( let key in data){
//     console.log(key + " is " + data[key])
// }

// // regular function

// function add(a,b){
//     console.log(a + b)
// }
// add(1,2)

// // named regular function
// // const add = function(a,b){
// //     console.log(a + b)
// // }

// // const add = (a,b)=>{
// //     console.log(a+b)
// // }
// // ()=>{
// //     console.log("Hello World")
// // }
// add(2,5,7)

// let numbers = [1,2,3,4,5]
// function data(numbers){
//     for(let abc of numbers){
//         console.log(abc*abc)
//     }
// }
// data(numbers)

const data = 
    {
        status: 200,
        message: "Code found",
        code: [
            {
                _id: "668510da18d90581711b6292",
                text: "test\n",
                userId: "f959757",
                title: "test",
                ipAddress: "49.244.110.12",
                createdAt: "2024-07-03T08:50:34.704Z"
               
            }
        ]
    }


// Write a function that accepts above data and console.log userId, title and ipAddress.

function home(param){
    console.log(param.code[0].userId)
    console.log(param.code[0].title)
    console.log(param.code[0].ipAddress)
}
home(data)

