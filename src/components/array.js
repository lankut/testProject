

const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
const total = names.push('Nina')

// console.log(names)
// console.log('names', names)

// console.log('total', total)

const names2 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const popped = names2.pop()

// console.log(names2)
// console.log(popped)

const names3 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const shifted = names3.shift()

// console.log(names3)
// console.log(shifted)

const names4 = []
const shifted2 = names4.shift()

// console.log(names4);
// console.log(shifted2);

const names5 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const unshifted = names5.unshift('Alex')

// console.log(names5);
// console.log(unshifted);

const names6 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const reverse = names6.reverse()

// console.log(reverse);

const str = 'ab-cd-ef'

const newStr = str.split('-')
// console.log(newStr);
const newStrJoin = newStr.join(' ')
// console.log(newStrJoin);

const telephoneNumber = '123456789'
const reverseNumber = telephoneNumber.split('').reverse().join('')
// console.log(reverseNumber);

const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = [3, 4]
const concatArr = arr1.concat(arr2, arr3)
const concatArr2 = arr1.concat(arr2, 100, 200)
// console.log(concatArr);
// console.log(concatArr2);

const arr4 = [1, 2]
const arr5 = [3, 4]
 
const nestedArr = [
  [5, 6],
  [7, 8],
]
const newNestedArr = arr4.concat(arr5, nestedArr)
// console.log(newNestedArr);
 
const flatArr = newNestedArr.flat(Infinity)
// console.log(flatArr);
