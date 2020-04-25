console.log([] + 1) // '' + 1 => '' + '1' => '1'
console.log([1, 2] + 'hi') // '1,2' + 'hi' => '1,2hi'
// 1. Step: toPrimitive() (internal method)
// 2. Step: toString()
