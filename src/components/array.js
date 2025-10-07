

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

const arr = [1, 2, 3, 4, 5]
let sum = 0
arr.forEach((el) => { sum += el })
// console.log(sum);

const numbers = [1, 2, 3, 3, 3, 3, 4, 5]
numbers.forEach((el, ind, arr) => {
    arr[ind] = el * 2
})
// console.log(numbers);
const res = numbers.indexOf(6)
// console.log(res);

const numbers2 = [1, 2, 3, 3, 3, 3, 4, 5]
const res2 = numbers2.lastIndexOf(3)
// console.log(res2);

const arr6 = ['abc', 'defg', 'kl', 'mn']
const res3 = arr6.find((el) => { return el.length === 2 })
// console.log(res3);

const res4 = numbers2.findIndex((el) => { return el % 2 === 0 })
// console.log(res4);

const arr7 = ['a', 'b', 'c', 'd']
const res5 = arr7.findLastIndex((el) => {
    let ind = el === 'c'
    return ind
})
// console.log(res5);
const res6 = arr7.includes('v')

// console.log(res6);

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']

const res7 = words.filter(el => el !== 'elite')
const res8 = words.filter(el => el.length <= 5)
// console.log(res7, res8);

const numbers7 = [1000, 4, 400, 22, -1]

const sortVal = (a, b) => {
    if (a < b) {
        return 1
    } else {
        return -1
    }
}
const res9 = numbers7.sort(sortVal)
// console.log(res9);

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'alex',
        isStudent: true,
    },
]

const res10 = users.sort((a, b) => { return a.name.localeCompare(b.name) })
// console.log(res10);

const months = ['Mar', 'Jan', 'Feb', 'Dec']

const toSort = months.toSorted()
// console.log(toSort);
// console.log(months);

const values = [1, 10, 21, 2]
const sortedValues = values.toSorted((a, b) => a - b)
// console.log(sortedValues)
// console.log(values)

const users2 = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

const newArr = users2.map((el) => el.name)

const polifArr = (arr, callback) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }

    return newArr
}

// console.log(polifArr(users2, (el) => el.name));
//.SLICE()
let arr8 = ['a', 'b', 'c', 'd', 'e']
let arr9 = ['a', 'b', 'c', 'd', 'e']
let sub = arr8.slice(0, 2)

// console.log(sub);
// console.log(arr8);

const sub2 = arr8.slice(2)
// console.log(sub2);
const sub3 = arr8.slice(1, -1) // возвращает массив по предпоследний элемент
// console.log(sub3);

// .SPLICE()
const sub4 = arr8.splice(1, 3)
const sub5 = arr8.splice(1, 0, 4, 5)
const sub6 = arr9.splice(-3, 1)
// console.log(arr9);
// console.log(sub6);

// .ToSPLICED()
const months2 = ['Jan', 'Mar', 'Apr', 'May']
const sub_month = months2.toSpliced(1, 1)
// console.log(sub_month);

const months3 = months2.toSpliced(2, 2)
// console.log(months3)

const months4 = months2.toSpliced(1, 1, 'Feb', 'Mar')
// console.log(months4)

//.REDUCE()
const a = [1, 2, 3, 4, 5, 6, 7]

let summ = 0

for (let i = 0; i < a.length; i++) {
    summ += a[i]
}
// console.log('Result', summ);

const result2 = a.reduce((prev, item, index) => {
    return summ = prev + item
}, 0)

// console.log(result2);

const fruits = [
    { name: 'apple', quntity: 2 },
    { name: 'banana', quntity: 3 },
    { name: 'orange', quntity: 1 }
]
// fruits[i]
const totalQuantity = fruits.reduce((start, next) => start + next.quntity, 0)
// console.log(totalQuantity);

const array = [5, 3, 22, 7, 8, 3, 4, 7, 1, 19]
const total1 = array.reduce((accum, next) => accum > next ? accum : next, array[0])
// console.log(total1);

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Emma', age: 27 },
    { name: 'Olivia', age: 23 }
]

const combineInfo = people.reduce(
    (acc, person) => {
        acc.name.push(person.name)
        acc.totalAge += person.age
        return acc
    }, { name: [], totalAge: 0 }
)

const mappedInfo = people.map((person) => ({
    name: person.name,
    age: person.age
}))
// console.log(mappedInfo);

const combineInfoMap = {
    names: mappedInfo.map(person => person.name),
    titalAge: mappedInfo.reduce((acc, nextAge) => { nextAge.age + acc }, 0)
}
// console.log(combineInfo);
