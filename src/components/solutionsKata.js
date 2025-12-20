

const arr1 = [4, 8, 6] //2
const arr2 = [1, 2, 3, 4] //0
const arr3 = []//0
const arr4 = [1]//0
const arr5 = [-1, -5]//3


function consecutive(array) {

    const copyArr = [...array]
    copyArr.sort((a, b) => a - b)
    let counter = 0

    for (let i = copyArr[0]; i <= copyArr[copyArr.length - 1]; i++) {
        counter++
    }

    return counter - copyArr.length;
}

// console.log(consecutive(arr5));


const str1 = "chairs"
const str2 = "table"
const str3 = "lamp"
const str4 = "sideboard"
// 'You gave me 4 arguments and they are "chairs", "table", "lamp" and "sideboard".'

function anArgument(...rest) {

    let word = 'You gave me ' + rest.length + ' arguments and they are'

    if (rest.length === 0) {
        return 'You didn\'t give me any arguments.'
    }

    if (rest.length === 1) {
        return `You gave me 1 argument and it is "${rest}".`
    }

    for (let i = 0; i < rest.length; i++) {

        if (i === rest.length - 1 && rest.length > 1) {
            word = word + ' and'
        }

        word = word + ` "${rest[i]}"`
        if (i < rest.length - 2) {
            word = word + ','
        } else if (i === rest.length - 1) {
            word = word + '.'
        }
    }
    return word
}

// console.log(anArgument(str1, str2, str3));


function sumDigits(number) {

    let newNumber = null
    let stringNumber = Math.abs(number).toString()

    for (let i = 0; i < stringNumber.length; i++) {
        newNumber = newNumber + Number(stringNumber[i])
    }
    return newNumber
}

// console.log(sumDigits(10));

const word = 'camel_case'
const word2 = 'co_py_pa_step_ep8'

function zebulansNightmare(functionName) {
    let newWord = []
    let index = []

    for (let i = 0; i < functionName.length; i++) {
        if (functionName[i] === '_') {
            if (index.length > 0) {
                index.push(i - index.length)
            } else {
                index.push(i)
            }
        } else {
            newWord.push(functionName[i])
        }
    }

    for (let j = 0; j < index.length; j++) {
        const char = newWord[index[j]].toUpperCase()
        newWord[index[j]] = char
    }
    const res = newWord.join('')

    return res;
}

// console.log(zebulansNightmare(word2));

const inp1 = "001000101"  // output "001000000"
const inp2 = "1000"  // output "001000000"

function arbitrate(input, n) {

    let inpArr = []
    let index = null

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '0' && index === null) {
            inpArr.push('0')
        } else if (input[i] === '1' && index === null) {
            inpArr.push('1')
            index = i
        } else if (index || '0') {
            inpArr.push('0')
        }
    }
    console.log(inpArr);

    const output = inpArr.join('')

    return output;
}

// console.log(arbitrate(inp1, 9));

const word1 = "Apple" // [1,5]
const word3 = "super" // [2,4]
const word4 = "supercalifragilisticexpialidocious" // [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]

function vowelIndices(word) {

    const wordToLower = word.toLowerCase()
    
    const arr = []
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

    for (let i = 0; i < wordToLower.length; i++) {

        for (let j = 0; j < vowels.length; j++) {
            if (wordToLower[i] === vowels[j]) {
                arr.push(i+1)
            }
        }
    }
    return arr
}

// console.log(vowelIndices(word4));
