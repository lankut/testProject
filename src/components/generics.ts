
const getFirstElement = <T>(array: T[]): T => {

    return array[0]
}

// Пример 1: Массив чисел
const numbers = [1, 2, 3, 4, 5]
console.log(getFirstElement(numbers)) // 1

// Пример 2: Массив строк
const words = ['hello', 'world', 'typescript']
console.log(getFirstElement(words)) // 'hello'

//--------------------------------------------------------------------------------------------------

const filterArray = <T>(arr: T[], fun: (val: T) => boolean): T[] => {
    return arr.filter(fun)
}

// Пример 1: Фильтрация чисел
const numbers1 = [1, 2, 3, 4, 5]
const isEven = (num: number) => num % 2 === 0

console.log(filterArray(numbers1, isEven)) // [2, 4]

// Пример 2: Фильтрация строк
const words1 = ['hello', 'world', 'typescript']
const startsWithT = (word: string) => word.startsWith('t')

console.log(filterArray(words1, startsWithT)) // ["typescript"]

//--------------------------------------------------------------------------------------------------

const mapArray = <T, V>(arr: T[], fun: (val: T) => V): V[] => {
    return arr.map(fun)
}

// Пример 1: Преобразование чисел в строки
const numbers2 = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`

console.log(mapArray(numbers2, transformNumberToString)) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]
// Пример 2: Преобразование строк в их длины

const words2 = ['hello', 'world', 'typescript']
const getLength = (word2: string) => word2.length

console.log(mapArray(words2, getLength)) // [5, 5, 10]

// Пример 3: Преобразование объектов в строки
type Person = { name: string; age: number }
const people: Person[] = [
    { name: 'Agnes', age: 25 },
    { name: 'Robert', age: 30 },
]
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`

console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]