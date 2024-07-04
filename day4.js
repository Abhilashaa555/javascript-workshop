// call back function 
// getsomething (function(){})
// getsomething()=>{}

// high order function 
// const fruits=["Mango","Apple","orange"]

// fruits.forEach(function(fruit){
// console.log(fruit)
// })

// const nums=[1,2,3,4,5]
// const squares=[]
// nums.forEach(function(nums){
//     squares.push(nums*nums)
// })
// console.log(squares)
// // fruits.map(function(fruit){
// console.log(fruit)
// })

// fruits.filter(function(){

// })

// const data = [
// {
//     firstName : "MAnish",
//     lastName : "Basnet",
//     address : "itahari"
// },
// // {
// //     firstName : "Pranjal",
// //     lastName : "Sharma",
// //     address : "Basbari"
// // }]

// data.forEach((object)=>{
//     console.log(object.firstName + " " + object.lastName)
// })

// const nums2 = [2,4,6,8]
// const squared = nums2.map((num)=>{
//     return num*num
// })
// console.log(nums2)
// console.log(squared)


// const data = [
//     { 
//         firstName : "Manish",
//         lastName : "Basnet",
//         address : "Itahari",
//     },
//     {
//         firstName : "Pranjal",
//         lastName : "Sharma",
//         address : "Basbari",
//     }   
// ]
// const result = data.map ((object)=>{
// return {
//     // spread operator
//   ...object,
//     fullName : object.firstName + " " + object.lastName
// }
// })
// console.log(result)

const numberData = [1,2,3,4,5,6,7,8,9,10]
const oddNumbers = numberData.filter((number)=>{
    return number%2 !==0
})
console.log(oddNumbers)
const Numbers = numberData.filter((number)=>{
    return number>5
})
console.log(Numbers)

// const numbers = [1,2,3,4,5]
// const result = numbers.map ((object)=>{
//     return{
//         text : 'A',
//         number : object 
//     }
// })
// console.log(result)


// const books = [
//     {
//         title : "You can win",
//         author : 'shiv khera',
//         publishedAt : 2001
//     },
//     {
//         title : "Think like a monk",
//         author : 'Jay shetty',
//         publishedAt : 2022
//     },
//     {
//         title : "Cashflow quadrant",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 1909
//     },
//     {
//         title : "You can win2",
//         author : 'shiv khera',
//         publishedAt : 1990
//     },
//     {
//         title : "Think like a monk2",
//         author : 'Jay shetty',
//         publishedAt : 1999
//     },
//     {
//         title : "Cashflow quadrant2",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 2010
//     }
// ]

// const read = books.filter((write)=>{
//     return write.publishedAt>2000
// })
// console.log(read)

// const files = ["Index.html", "app.js", "app.java", "style.css", "test.js"]
// const folder = files.filter((js)=>{
//     return js.endsWith(".js")
// })
// console.log(folder)

// const secondlastTask = [1,2,null,undefined,"Manish","haha","hehe"]
// const task = secondlastTask.filter((k)=>{
//     return k !== null && k !== undefined
// })
// console.log(task)

const lastData = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]
const Data = lastData.filter((my)=>{
    return my.marks>500 && my.status=="pass" && my.name.endsWith("sh")
})
console.log(Data)