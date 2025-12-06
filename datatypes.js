// this is separate branch
// This change is from feature-day2 branch
// Edited from Github
/* Declaring variables in JS
let name = "Akshay";
let age = 23;

age = 30
console.log(name, age)

const account = 23421
console.log(account)

//let = Block-scoped | Accessible only inside the { } where it is declared | Cannot be re-declared in the same scope | Safer and recommended in modern JavaScript
//var = Function-scoped | Accessible outside { } blocks (except functions) | Can be re-declared in the same scope | Can cause unexpected bugs because it leaks outside blocks

var a = 20
var a= 30
console.log(a)
*/


//primitive data type: numebr, string, boolean, undefined, null bigint, symbol
//all primitive datatypes are immutable, if u change the value then it's make new memory block
// number
let number = 10
let floting =1.3
console.log(number, floting)

// string
let name = 'Akshay Kumar'
let cast = "Maratha"
console.log(name, cast)

// boolean
let login = true;
let f = false;
console.log(login, f)

// undefined
let user;
console.log(user)

// bigint
let num = 2389892834234002832984n
console.log(num)

// null
let weather = null
console.log(weather)

// symbol
const id1 = Symbol("id")
console.log(id1)


//Non primitive data type: array, object, function
// non primitive datatyps are imutable, because if this also makes new memory block then this will consume big memory

//array
let arr = [22, 90, 11, 'Rohit', true]
console.log(arr)

//object
let user_data = {
    name: "rahul", 
    account: 123321,
    age: 23,
    category: 'gen'
}
console.log(user_data)
console.log(typeof(user_data))

//function
function fun()
{
    console.log("This is fun function executed...")
}
fun()

//typeof: is a keyword for getting type of any datatype
console.log(typeof(null))
//typeof null returns "object" because of an old bug in JavaScript that is now kept for backward compatibility.


//all primitive datatypes are immutable, if u change the value then it's make new memory block
let str = "Shame"
str = "Mohan"

// this is proves primitive datatypes are immutable
str[0] = 'R'
console.log(str)


