// ************************************
// Object / Array Destructuring
// ************************************

function responseWithObject(){
  return { 
    id: 21,
    person: { name: 'Bob', job: 'Mafia Boss' },
    date: '20-10-2020',
  }
}

function responseWithObjectMissingValue(){
  return { 
    date: '20-10-2020',
  }
}

// Example 1
// with destrucuring
// const { id, date, person: { name, job }} = responseWithObject()

// Example 2
// without destructuring
// const id = result.id
// const name = result.person.name
// const job = result.person.job

// Example 3
// with default values
// const { id, date, person: { name, job }} = responseWithObjectMissingValue()
// const { id = "default-id", date, person: { name = "default name", job } = {}} = responseWithObjectMissingValue()

// console.log(`id=${id} name=${name} job=${job} date=${date}`)


// Example 4
// destructure in an function
// default values to prevent error accessing property of an undefined
// function functionUsingDestructuring({ value, event: { title, date } = {} }) {
//   console.log(`value = ${value} title=${title} date=${date}`)
// }

// functionUsingDestructuring({ value: 10, event: { title: 'TITLE', date: 'DATA' }})
// functionUsingDestructuring({ value: 10 })

// const [first, second, ...last ] = [1,2,3,4,5,6]
// console.log(first, second, last)



// ************************************
// Ternary
// ************************************
// const score = 50
// let grade = score >= 70
//   ? 'A' 
//   : 'Not an A'

// console.log('grade is ', grade) 



// ************************************
// Arrow functions
// ************************************

// Example 1
// no braces for single param
const singleParam = x => {
  return x + 2
}
// console.log(singleParam(5))


// Example 2
// braces when 2 or more params
const multipleParams = (a,b,c) => {
  return a + b + c
}
// console.log(multipleParams(1,2,3))


// Example 3
// implict return
const implictReturn = () => "hello"
// console.log(implictReturn())


// Example 4
// if the function does not just contain a single expression we use braces
const withBraces = () => {
  if (Math.random() > 0.5) {
    return "Big"
  }

  return "Small"
}
// console.log(withBraces())


// Example 5
// arrow functions do not have a this argument they just get it from scope they reside in

// this.name = 'NAME FROM OUTSIDE'

// function example() {
//   console.log('From within the function example')
//   console.log('this is ', this)

//   const Person = {
//     name: 'Bob',
//     speakWithArrowFunction: () => console.log("this is ", this),
//     speakWithNormalFunction: function () {
//       console.log("this is ", this)
//     },
//   }
//   console.log("Normal Function")
//   Person.speakWithNormalFunction()

//   console.log("Arrow Function")
//   Person.speakWithArrowFunction()
// }

// example()


// ************************************
// Truthy / falsy
// Falsy: null, undefined, 0 , '' (empty string), NaN
// Truthy: anything else
// ************************************
// when used with a boolean operator , the expression will be cooerced to true or false e.g.

const testValue = ''

if(NaN) {
  console.log(testValue, ' was truthy')
}




// ************************************
// Operators
// ************************************

// Example 1
// && operator
// const andExample = undefined && 'value'
// const andExample = 'abc' && 1 && 12 && 'value'
// evalues if first operand is truthy if true move to second
// if operand is falsy returns this operand

// Example 2
// || operator
// const orExample = undefined || false || 'value'
// const orExample = 9 || false || 'value'


// Example 3
// ?.
// allows us to safely access values of a object
// const object = { a: { b: { c: { d: { e: { f: 'value' } } } } } }
// const value = object.a.b.c.d.e.f
// console.log(value)
// const object = { a: { b: { c: 'value' } } } 
// const value = object.a.b.c.d.e.f
// const value = object.a && object.a.b && object.a.b.c
// not supported default by node, can try in chrome to show it works
// const value = object?.a?.b?.c
// console.log(value)


// ************************************
// Array methods
// ************************************

const arr = [1, 2, 3, 4]

// array.map
// array.filter
// array.forEach

// ************************************
// Promises
// ************************************
// Consuming a promise
// promise
// chain .then
// to catch error use .catch

// Creating a promise
// use contructor new Promise((resolve, reject) => {
//    resolve()
//    calling resolve will allow value to be consumed with .then
//    reject()
//    will cause an error, and will be consumed in .catch
// })


// ************************************
// Async await
// ************************************

// provies another syntax for working with promises
// function must use async keyword in declaration
// within function await key word can be used with a promise
// code within function using await keyword will be synchronous
// all functions marked with async will have their return value wrapped in a promise, or return a promise by default

function sleep (delay = 1000){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

sleep(2000)
  .then(() => {console.log('slept for 2000ms')})

async function usingAsyncAwait(){
  await sleep(3000)
  console.log('slept for 3000ms')
}
usingAsyncAwait()