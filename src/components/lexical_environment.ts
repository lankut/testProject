//globalLE {} --> null

startEngine()

let car = 'bmw' //globalLE {car: 'bmw'} --> null

function startEngine() {
    //startEngineLE {} --> globalLE
    const car = 'kia' // startEngineLE {car: 'kia'} --> globalLE
    // console.log(`Start ${car}`)
}

// console.log(startEngine);

startEngine() //globalLE {startEngine: function} --> null

car = 'audi' //globalLE {startEngine: function, car: 'audi'} --> null

startEngine()

const counterCreator = () => {
    let count = 0

    return () => {
        // console.log(count++)
    }
}

const counter1 = counterCreator()
// const counter2 = counter();

counter1()
counter1()
counter1()

function outer() {
    let message = "Hello!";
    return function inner() {
        // console.log(message);
    };
}

function executor(fn: () => void) {
    fn();
}

const closureFunc = outer();
executor(closureFunc);

function setupButton() {
    let count = 0;
    // document.getElementById("myButton").addEventListener("click", function () {
    count++;
    // console.log(`Clicked ${count} times`);
    // });
}

setupButton();

function outer2() {
    let car = "audi";

    function inner() {
        // console.log(car);
    }

    setTimeout(inner, 1000);
}

outer2();

const pow = (x: number, n: number): number => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

// console.log(pow(5, 3));

// 2(4) === 2 * 2(3) === 2 * 2 * 2(2) === 2 * 2 * 2 * 2(1)




