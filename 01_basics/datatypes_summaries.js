// Premitive
// 7 types : 
// 1.String, 2.Number, 3.Boolean, 4.null, 5.undefined, 6.Symbol, 
// 7.BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

//console.log(id === anotherId); //Result => false

const bigNumber = 3456543576654356754n  

// Reference (Non Premitive)

//1.Array, 2.Objects, 3.Functions

const heros = ["ASSS","NNN","MMMM"] 


//--------------------------------------------------

//Stack (Premitive), Heap (Non-Premitive)

let myYoutubename = "hiteshchoudharydotcom"

console.log(myYoutubename);

let anothername = "chaiaurCode"

console.log(anothername);

let userOne = {
    email : "rahul@g.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@g.com"

console.log(userOne.email)
console.log(userTwo.email)