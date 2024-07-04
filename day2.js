// const days =['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']
// console.log(days[4])

// days.push('Sunday')
// days.pop()
// days.unshift("Hello")
// days.shift()

// const data= days.slice(1,3)
// console.log(data)



// days.splice(6,6,'BYEEE')
// console.log(days)

// const data=[1,2,3,4,5,6]
// data.splice(1,3,'hello', 'byee', 'World')
// console.log(data)

// const vowels = ['s','h','i','r','s','a','k']
// vowels.splice(0,7,19,8,9,18,19,1,12)
// console.log(vowels)

const text = 'I am from Nepal'
const splittedData=text.split(" ")
console.log(splittedData)

const language = ['js','php','c']
language.splice(1,0,'html')
console.log(language)

// var name='Abhilasha'
// function greet(name){
//     console.log("Hello",name)
// }
// greet("Abhilasha")
// class person{
//     name='Abhilasha'
//     greet(){
//         console.log("Hello")
//     }
// }

const person = Object.freeze({
    name : "Abhilasha",
    address : "Tokyo",
    nationality : "Japanese",
})

const data ={
    name: ['Manish','Pranjal']
}
data.name.push('Sanjeev')
console.log(data)

const test = [
    {
        name: "Manish"
    },
    {
        name : "Pranjal"
    }
]
test.push({
    name : "Sanjeev"
})
console.log(test)

const test2 = {
    name : ['Manish','Pranjal','Sanjeev']
}
test2.name.splice(0,3,1,2,3)
console.log(test2)
// console.log(person.address)
// console.log(person['nationality'])
// person.age=22
// person.haha="hehe"
// console.log(person)
// console.log(Object.keys(person))
// console.log(Object.values(person))