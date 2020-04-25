console.log(!!2)

const userInput = 'my name'
console.log(userInput)

const hasEnteredValidInput = !!userInput
console.log(hasEnteredValidInput)

if (userInput) {
  // ...
}

const age = '31'
// const numberAge = Number(age);
const numberAge = +age

console.log(numberAge + 1)

const stringAge = numberAge + '' // String(numberAge), numberAge.toString()
