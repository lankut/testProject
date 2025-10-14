

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
//--------------------------------------------------------------------------------------------------------
// Синтаксис вычисляемых свойств объекта в JavaScript. map-set, object.keys, object.values, object.entries

let fruits2 = {
    color: 'red',
    taste: 'sweet',
}
// console.log(fruits2['color']);
// console.log(fruits2.taste);
function createObject(key, value) {
    const newObj = {}
    newObj[key] = value
    return newObj
}

// console.log(createObject('car', 'Audi'));

function createObj2(key, value) {
    return { [key]: value }
}

// console.log(createObj2('key_2', 'value_2' ));

const propertyName = 'age'

const person2 = {
    name: 'Alice',
    [propertyName]: 35
}
// console.log(person2);

const prefix = 'user_'
let user = {
    [prefix + 'id']: 56,
    [prefix + 'name']: 'Alice'
}

// console.log(user);
const index = 2

const object = {
    [index + 2]: 'fourth element',
    [index + 3]: 'fourth element 3',
    [index + 4]: 'fourth element 4',
    [index + 5]: 'fourth element 5',

}
// console.log(object);

const person3 = {
    ['age' + 2]: 32,
    [2 + 2]: 'four'
}
// console.log(person3);

function createObj3(key, val) {
    return {
        [key.toUpperCase()]: val
    }
}
// console.log(createObj3('car', 'audi'));

const STATUS_BUSY = 'busy'
const STATUS_READY = 'ready'

const STATUS_LABELS = {
    [STATUS_BUSY]: 'Ожидает',
    [STATUS_READY]: 'Готов',
}

const drivers = [
    { name: 'Павел', status: 'busy' },
    { name: 'Сергей', status: 'ready' },
]

const driverStatuses = drivers.map(driver => {
    const { status } = driver
    return STATUS_LABELS[status]
})
// console.log(driverStatuses)


let condition = false
document.getElementById('toggleButton').onclick = function () {
    condition = !condition

    const person = {
        name: 'John',
        [condition ? 'age' : 'height']: condition ? 25 : 180
    }
    console.log(person);

}

const routes = {
    home: '/',
    about: '/about',
    contact: '/contact',
};

let currentRoute = 'about';

function navigate(route) {
    currentRoute = route;
    console.log(routes[currentRoute]);
}
document.getElementById('homeButton').onclick = function () {
    navigate('home');
};
document.getElementById('aboutButton').onclick = function () {
    navigate('about');
};
document.getElementById('contactButton').onclick = function () {
    navigate('contact');
};

const user3 = {
    name: 'Ivan',
    propfession: 'doctor',
    salary: 1000
}

const userKey = Object.keys(user3)
// console.log(userKey);
const userValues = Object.values(user3)
const userEntries = Object.entries(user3)

// console.log(userEntries);

const value = new Map()
// console.log(value);

const map = new Map()

map.set('1', 'str1') // строка в качестве ключа
map.set(1, 'num1') // цифра в качестве ключа
map.set(true, 'boolean') // булево значение в качестве ключа

// console.log(map.get('1'));
// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.size);

const user2 = { name: 'Alice' }
const user1 = { name: 'John' }
const userMap = new Map()
userMap.set(user1, 'Пользователь1')
// console.log(userMap);

userMap.set(user2, 'Пользователь2')
// console.log(userMap.get(user2));

let myArray = [
    ['ключ1', 'значение1'],
    ['ключ2', 'значение2'],
    ['ключ3', 'значение3'],
]

const arrayMap = new Map(myArray)

// console.log(arrayMap);

const mySet = new Set()
mySet.add('Hello')
mySet.add({})

// console.log(mySet);
// console.log(mySet.has('Hell'));
// console.log(mySet.size);
const myArray2 = ['значение1', 'значение2', 'значение1']

mySet.add(myArray2)
// console.log(mySet);
const newMySet = new Set(myArray2)
// console.log(newMySet);

const numbers3 = [1, 2, 3, 4, 2, 3, 5, 6, 1]

const uniqueNumbers = new Set(numbers)

const uniqueNumbersArray = [...uniqueNumbers]

// console.log(uniqueNumbersArray)

const numbers1 = [4, 3, 5]
const count = 2
//res = 20
const numbers4 = [10, 2, 3, 8, 1, 10, 4]
const count1 = 5
// res = 9600


function maxProduct(numbers, size) {
    let newRes = 1

    const sortArr = numbers.sort((a, b) => {
        return b - a
    })

    for (let i = 0; i < sortArr.length; i++) {
        if (i < size) {
            newRes *= numbers[i]
        }
    }

    return newRes
}

// console.log(maxProduct(numbers4, count1));

const arr10 = [[1, 2, 3, 4], [5, 6, 7, 8]]
//res = [3, 4, 5, 6]
const arr11 =[[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]]
//res = [1.6, 6.5105, 2.075, 2.0635, 1.45])

const arr12 = [[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]

//res = [22.5, 11, 38.75, 38.25, 19.5]

function avgArray(arr) {
    const newObj = {}

    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr[i].length; y++) {
            if (i === 0) {
                newObj[y] = arr[i][y]
            } else {
                newObj[y] = newObj[y] + arr[i][y]

            }
        }
    }
    const newArr0 = Object.values(newObj)
    const newArr = newArr0.map((e) => e / arr.length)

    return newArr
}

console.log(avgArray(arr12));