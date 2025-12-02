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
const arr11 = [[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]]
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

// console.log(avgArray(arr12));

const array1 = [[45, 12], [55, 21], [19, -2], [104, 20]]
// res = ['Open', 'Senior', 'Open', 'Senior'])

function openOrSenior(data) {
    const newArray = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            newArray.push('Senior')
        } else {
            newArray.push('Open')
        }
    }
    return newArray
}
// console.log(openOrSenior(array1));


//DEEP COPY===================================================================================================

// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object

let man = {
    name: 'John',
    age: 28
}

let manFullCopy = { ...man }


// 2. Array of primitives
let numbers8 = [1, 2, 3];

let numbersFullCopy = [...numbers8]


// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = { ...man1, mother: { ...man1.mother } }


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {
    ...man2, friends: [...man2.friends]
}

// 5 Array of objects
let people1 = [
    { name: "Peter", age: 30 },
    { name: "Steven", age: 32 },
    { name: "William", age: 28 }
];


let people1FullCopy = [
    { ...people1[0] },
    { ...people1[1] },
    { ...people1[2] }
]

// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        { name: "Peter", age: 30 },
        { name: "Steven", age: 32 },
        { name: "William", age: 28 }
    ]
};

let man3FullCopy = {
    ...man3,
    friends: [
        { ...man3.friends[0] },
        { ...man3.friends[1] },
        { ...man3.friends[2] },
    ]
}


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = {
    ...man4,
    mother: {
        ...man4.mother,
        work: { ...man4.mother.work }
    }
}

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            { name: "Kevin", age: 80 },
            { name: "Jennifer", age: 78 },
        ]
    }
};

let man5FullCopy = {
    ...man5,
    mother: {
        ...man5.mother,
        work: { ...man5.mother.work },
        parents: [{ ...man5.mother.parents[0] }, { ...man5.mother.parents[1] }]
    }
}


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother,
        work: { ...man6.mother.work },
        parents: [{ ...man6.mother.parents[0] }, { ...man6.mother.parents[1] }]
    }
}

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        { title: "beet", amount: 3 },
                        { title: "potatoes", amount: 5 },
                        { title: "carrot", amount: 1 },
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        { title: "fish", amount: 1 },
                        { title: "rise", amount: 0.5 }
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {
    ...man7,
    mother: {
        ...man7.mother,
        work: { ...man7.mother.work },
        parents: [{
            ...man7.mother.parents[0],
            favoriteDish: {
                ...man7.mother.parents[0].favoriteDish,
                ingredients: [...man7.mother.parents[0].favoriteDish.ingredients]
            }
        },
        {
            ...man7.mother.parents[1], favoriteDish: {
                ...man7.mother.parents[1].favoriteDish,
                ingredients: [...man7.mother.parents[1].favoriteDish.ingredients]
            }
        }
        ]
    }
}

const array2 = [1, 2, 3, 4, 5]

const head = (arr) => {
    let headValue = arr[0]
    return headValue
}

// console.log(head(array2));


const tail = (arr) => {
    const newArr = []
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

// console.log(tail(array2));

const init = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i])
    }
    return newArr
}
// console.log(init(array2));

const last = (arr) => {
    let lastValue = arr.length - 1
    return arr[lastValue]
}

// console.log(last(array2));

const pin1 = '1234'
const pin2 = '123456'
const pin3 = 'd1234'
const pin4 = '123f4'
const pin5 = "-1.234"
const pin6 = "a234"
const pin7 = "0000"
const pin8 = "1"
const pin9 = "123 "
// function validatePIN(pin) {
//     const exam = Number(pin)
//     const examRound = Math.round(exam)
//     const examRoundString = examRound.toString().length
//     const numberPin = Number.isNaN(examRound)

//     if ((examRoundString === 4 && !numberPin) || (examRoundString === 6 && !numberPin)) {
//         return true
//     }
//     return false
// }


// console.log(validatePIN(pin7));

function validatePIN(pin) {
    const length = pin.length
    const arr = []

    const newPin = pin.trim()
    for (let i = 0; i < newPin.length; i++) {
        let number = Number(newPin[i])
        // console.log(number);

        const nan = Number.isNaN(number)

        if (!nan) {
            arr.push(number)
        }
    }

    if ((arr.length === length) && (length === 4 || length === 6)) {
        return true
    }
    return false
}

// console.log(validatePIN(pin9));

const fnd = () => {
    // console.log('первый вызов');

    return function (f) {
        console.log(f);

    }
}

// console.log(fnd()('второй вызов'));


const array3 = [2, 4, 6]

class Block {

    constructor(data) {
        this.width = data[0]
        this.length = data[1]
        this.height = data[2]
    }

    getWidth() {
        return this.width
    }

    getLength() {
        return this.length
    }

    getHeight() {
        return this.height
    }

    getVolume() {
        return this.width * this.length * this.height
    }

    getSurfaceArea() {
        const area1 = this.width * this.height * 2
        const area2 = this.length * this.height * 2
        const area3 = this.length * this.width * 2

        const res = area1 + area2 + area3
        return res
    }
}

const newBlock = new Block(array3)

// console.log(newBlock.getSurfaceArea());

const string = 'createfunction'

function makeUpperCase(str) {
    return str.toUpperCase()
}

// console.log(makeUpperCase(string));

//---------------DRAW ME A CHESSBOARD-------------------------------------------------------- 


function chessBoard(rows, columns) {
    const board = []

    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < columns; j++) {
            const obj = {
                x: 'X',
                o: 'O',
            }
            if ((j + i) % 2 === 0) {
                row.push(obj.o)
            } else {
                row.push(obj.x)
            }
        }
        board.push(row)
    }
    return board
}

// console.log(chessBoard(3, 4));

//-------LAST--------------------------------------------------------------

function last2(...anything) {
    let lastIndex = null
    for (let i = 0; i < anything.length; i++) {
        if (typeof anything[i] === 'object') {
            lastIndex = anything[i]
            if (anything.length === 1) {
                lastIndex = anything[i][anything[i].length - 1]
            }
        }
        else if (typeof anything[i] === 'string') {
            lastIndex = anything[i][anything[i].length - 1]
            if (anything.length > 1) {
                lastIndex = anything[i]
            }
        } else if (typeof anything[i] === 'number') {
            lastIndex = anything[i]
        }
    }
    return lastIndex
}

// console.log(last2(7, "zyx", "xb"));
//--------------Задача на асинхронность----------------------
// Расставьте тексты для console.log. Последний вывод: 1, 2, 3, 4, 5 📌*/

async function first() {
    await Promise.resolve(1).then(r => console.log(r));     //1
    queueMicrotask(() => console.log(3));             //3
    console.log(4);                                         //4
    queueMicrotask(() => console.log(9));             //6
    console.log(10);
    console.log(12);
    await Promise.resolve(8).then(r => console.log(r));     //8
}
async function second() {
    first();
    await Promise.resolve(2).then(r => console.log(r));     //2
    setTimeout(() => console.log(5), 0);                    //9
    await Promise.resolve(6).then(r => console.log(r));     //5
    console.log(11);
    queueMicrotask(() => console.log(7));             //7
}
// console.log(second());
// second()

//--------------------function isAnagram-----------------------------------------------------------------
let isAnagram = function (test, original) {

    if (test.length === original.length) {
        const testToLowerCase = test.toLowerCase()
        const originalToLowerCase = original.toLowerCase()

        const objTest = {}
        const objOriginal = {}

        for (let i = 0; i < testToLowerCase.length; i++) {
            if (objTest[testToLowerCase[i]]) {
                objTest[testToLowerCase[i]] += 1
            } else {
                objTest[testToLowerCase[i]] = 1
            }
        }

        for (let j = 0; j < originalToLowerCase.length; j++) {
            if (objOriginal[originalToLowerCase[j]]) {
                objOriginal[originalToLowerCase[j]] += 1
            } else {
                objOriginal[originalToLowerCase[j]] = 1
            }
        }

        const keyTest = Object.keys(objTest)
        const keyOrigin = Object.keys(objOriginal)

        if (keyTest.length !== keyOrigin.length) {
            return false
        }

        for (let key of keyTest) {
            if (objTest[key] !== objOriginal[key]) {
                return false
            }
        }
        return true
    }
    return false
};

// console.log(isAnagram("bQYoIpbXvxbyDsSq", "bbpIxYSqXyrQDbsv"));

//---------------Return a sorted list of objects---------------------------------------------

let arr13 = [
    { a: 2, b: 2 },
    { a: 3, b: 40 },
    { a: 1, b: 12 }
];

function sortList(sortBy, list) {
    return list.sort((a, b) => b[sortBy] - a[sortBy])
}

// console.log(sortList('b', arr13));
// console.dir(document.getElementById('root'))

//-----------------PROMISE--------------------------------------------
const getData = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res('some data');
            // rej("some error");
        }, 1000);
    });

getData()
    .then((data) => {
        console.log("then1", data);
        return new Promise((res, rej) => {
            setTimeout(() => {
                // res("some data from request2");
                rej("some error");
            }, 2000);
        });
    })
    .then((data) => {
        console.log("then2", data);
        return 20;
    })
    .catch((data) => {
        console.log("catch1", data);
        // return;
    })
    .then((data) => {
        console.log("then3", data);
        return b;
    })
    .then((data) => {
        console.log("then4", data);
        return 40;
    })
    .catch((data) => {
        console.log("catch2", data);
        return 50;
    })
    .finally((data) => {
        console.log("finally", data);
        return 60; // ничего не примет и не вернет
    })
    .then((data) => {
        console.log("then5", data);
    });

//------------------------------------------------------------------------------
const getData1 = str =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(str)
            // rej("some error");
        }, 1000)
    })

getData1('string1')
    .then(data => {
        console.log('then', data)
        // return promise1;
        return 10
    })
    .finally(() => {
        console.log('finally')
        return getData1('string2')// ничего не принимаеи и ничего не возвращает
    })
    .then(data => {
        console.log('then 2', data)
        return getData1('string3')
    })
    .then(data => {
        console.log('then3', data)
        return undefined
    })

// Первая: Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние
//  resolved через ms миллисекунд. Пример использования:

const delay = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, ms)
    })
}

delay(1000).then(() => console.log('Hello!'))

// Вторая

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("reject1");
        rej("reject1");
    }, 1000);
});


promise1
    .catch((t) => t + "catch1")
    .catch((t) => t + "catch2")
    .then((t) => t + "then1")
    .finally((t) => t + "finally")
    .then((t) => console.log(t)); /// ??

//----------------------Consecutive Vowels in a String--------------------------------

const word = 'akfheujfkgiaaaofmmfkdfuaiiie'

function getTheVowels(word) {
    const arr = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    let currentIndex = 0

    for (let i = 0; i < word.length; i++) {
        if (word[i] === arr[currentIndex]) {
            counter++
            currentIndex = (currentIndex + 1) % arr.length
        }
    }

    return counter;
}

// console.log(getTheVowels(word));


function countConsecutiveVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let currentVowelIndex = 0;

    let startIndex = str.indexOf('a');
    if (startIndex === -1) return 0;


    for (let i = startIndex; i < str.length; i++) {
        if (str[i] === vowels[currentVowelIndex]) {
            count++;
            currentVowelIndex = (currentVowelIndex + 1) % vowels.length;
        }
    }
    return count;
}

// console.log(countConsecutiveVowels(word));

const arr14 = [5, 1, 2]
const arr15 = [2, 1]

function isSortedAndHow(array) {
    let flag = false
    const copyArray1 = [...array]
    const sortAscending = copyArray1.sort((a, b) => a - b)

    const copyArray2 = [...array]
    const sortDescending = copyArray2.sort((a, b) => b - a)

    const arr1 = []
    for (let i = 0; i < sortAscending.length; i++) {
        if (array[i] === sortAscending[i]) {
            arr1.push(sortAscending[i])
            if (arr1.length === sortAscending.length) {
                flag = true
                return 'yes, ascending'
            }
        }
    }
    const arr2 = []
    for (let j = 0; j < sortDescending.length; j++) {
        if (array[j] === sortDescending[j]) {
            arr2.push(sortDescending[j])
            if (arr2.length === sortDescending.length) {
                flag = true
                return 'yes, descending'
            }
        }
    }
    if (!flag) return 'no'
}

// console.log(isSortedAndHow(arr14));

const array4 = [1, 10, 100]

function findLongest(array) {

    let length = array[0].toString().length
    let number = array[0]

    for (let i = 1; i < array.length; i++) {


        if (length < array[i].toString().length) {
            length = array[i].toString().length
            number = array[i]
        }
    }

    return number

}

// console.log(findLongest(array4));

const startDateTest = new Date(2013, 1, 16, 11, 7, 50)
const endDateTest = new Date(2013, 1, 17, 2, 18, 33)
// console.log(startDateTest.getDate());
// console.log(endDateTest.getDate());

function elapsedSeconds(startDate, endDate) {

    const numbersOfDays = endDate.getDate() - startDate.getDate()

    function getSeconds(date) {
        const dateHoursInSeconds = 60 * 60 * date.getHours()
        const dateMinutesInSeconds = 60 * date.getMinutes()
        const dateSeconds = date.getSeconds()
        return dateHoursInSeconds + dateMinutesInSeconds + dateSeconds
    }

    const startDateSeconds = getSeconds(startDate)
    const endDateSeconds = getSeconds(endDate)

    if (numbersOfDays) {
        const withDay = 86400 - startDateSeconds + endDateSeconds

        return withDay
    }

    return endDateSeconds - startDateSeconds
}

console.log(elapsedSeconds(startDateTest, endDateTest));
