/*
const even_or_odd = (n) => n%2 == 0 ? "Even" : "Odd"

console.log(even_or_odd(0))*/

/*
let arr = [];
const positiveSum = (arr) => {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                result += arr[i]
            }
        }
        return result
}
console.log(positiveSum(arr))*/


/*const opposite = n => n > 0 ? -n : n *= -1*/

// or

/*const opposite = n => -n*/

/*console.log(opposite(-5))*/


/*
let  removeChar = (str) => {
    let strn = ''
    for (let i = 1; i<str.length-1; i++) {
        strn += str[i]
    }
    return strn
}

console.log(removeChar('erso'))
*/

/*
let args = [78,56,232,12,-8]

findSmallestInt = args => args.sort((a,b) => a-b)[0]

console.log(findSmallestInt(args))*/

/*
let x = "dfc 11 dfc"
let noSpace = x => x.split(' ').join()

console.log(noSpace(x))*/

/*
let arr = [true, true, true, false, true, true, true, true,
    true, false, true, false, true, false, false, true,
    true, true, true, true, false, false, true, true];

countSheeps = (arrayOfSheep) => {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arr[i]) {
            count++
        }
    }
    return count
}

console.log(countSheeps(arr))*/

/*
let numbers = [1,2]

let squareSum = (numbers) => {
    let count = 0;
    numbers.forEach(e => count += Math.pow(e, 2))
    return count
}

console.log(squareSum(numbers))*/

/*
let repeatStr = (n, s) => s.repeat(n)

console.log(repeatStr(2, "hal "))*/

/*
let boolToWord = (bool) => bool ? 'Yes' : 'No'

console.log(boolToWord(false))*/

/*
let a=[4,5,6]
let b=[1,2,3]

let arrayMadness = (a, b) => (a.reduce((x, y) => x+(Math.pow(y,2)), 0))>
    (b.reduce((x, y) => x+(Math.pow(y,3)), 0))

console.log(arrayMadness(a, b))*/

/*let arr = [8,1,5,4,6,1,1]*/

/*let pickIt = (arr) => {
    let odd=[],even=[]
    arr.map(e => (e%2 == 0) ? even.push(e) : odd.push(e) )
    return [odd,even];
}*/

/*let pickIt = (arr) => {
    let odd = [], even = []
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i]%2 !==0) {
            odd.push(arr[i])
        } else {
            even.push(arr[i])
        }
    }
    return [odd, even]
}*/

/*let pickIt = (arr) => {
    let odd = [], even =[]
    for (let x of arr) {
        ((x % 2) ? odd : even).push(x)
    }
    return [odd, even]
}
console.log(pickIt(arr))*/

/*
let a = [19,17,25]
let b = [15,22,25]


let findDifference = (a, b) => Math.abs((a.reduce((x,y) => (x*y), 1)) - (b.reduce((x,y) => (x*y), 1)))

console.log(findDifference(a,b))*/

/*let [min, max, step] = [2, 9, 2]*/

/*let generateRange = (min, max, step) => {
    let arr = []
    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}*/

/*function generateRange(min, max, step){
    return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}

console.log(generateRange(min, max, step))*/

/*
let [r, l, rl] = [5, 30, 7]

let iceBrickVolume = (r, x, y) => 2 * r * r * (x - y)
console.log(iceBrickVolume(r, l, rl))
*/

/*let floor = 2

function sc(floor){
    if(floor <= 1) return ""
    return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}
console.log(sc(floor))*/

/*let [a, b] = [[1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']]*/

/*let mergeArrays = (a, b) => {
    let arr = []
    for (let i = 0; i<=(a.length+b.length); i++) {
        a[i] ? arr.push(a[i]) : []
        b[i] ? arr.push(b[i]) : []
    }
    return arr
}*/

// or

/*const _ = require('lodash')                         // библиотека Underscore.js

function mergeArrays(a, b) {
    return _.compact(_.flatten(_.zip(a, b)))        // .compact - удаляет отрицательные, NaN, undefined, 0, пустые значения
}*/                                                 // .fletten - [1, [2], [3, [4, [5, [6, [7]]]]]] -> [1, 2, 3, 4, 5, 6, 7]
/*                                                  // .zip - смешивает массивы
console.log(mergeArrays(a,b))*/

/*let [start, end] = [125, 132]*/

/*let paintLetterboxes = function(start, end) {
    let arr = []
    while (start <= end) {
        arr.push(start)
        start++
    }
    let arr2 = arr.join('').split("")

    let obj1 = arr2.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})

    let obj = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0
    }

    return Object.values(Object.assign(obj, obj1))
}*/
// Нормальное решение:

/*var paintLetterboxes = function(start, end) {
    let returnedArr = [0,0,0,0,0,0,0,0,0,0];
    let paintedArr = [];
    for(let i = start; i <= end; i++) {
        paintedArr.push(i);
    }
    let bigString = paintedArr.join('');
    for(let i = 0; i < bigString.length; i++) {
        returnedArr[bigString[i]] += 1;
    }
    return returnedArr;
}*/

/*console.log(paintLetterboxes(start, end))*/

/*let str = 'softxxx kitty, warm kitty, xxxxx'

let tripleX = (str) => {
    let x = false
    for (let i = 0; (i<=str.length && !x); i++) {
        if (str[i] === "x") {
            if (str[i + 1] === "x" && str[i + 2] === "x") {
                x = true
            }
            break
        }
    }
    return x
}

function tripleX(str){
    return str.substr(str.indexOf('x')+1,2) === 'xx';
}

console.log(tripleX(str))*/

/*let num = 1565

const closestMultiple10 = num => (Math.round(num/10))*10


console.log(closestMultiple10(num))*/


/*let arr = [["f", "f", 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]

let arrs = (arr) => {
    return arr[1].reduce((a,b) => console.log(typeof(a) === typeof(b) ? true : false), 15)
}

some() every()     <-

console.log(arrs(arr))*/

/*let n = [ 3, 4, 5, 6, 5];*/

/*function digits(num){
    let numArray = num.toString().split('');
    let sumArray = [];

    for (let i = 0; i < numArray.length; i++) {
        for (let j = i + 1; j < numArray.length; j++) {
            let sum;
            sum = Number(numArray[i]) + Number(numArray[j]);
            sumArray.push(sum);
        }
    }
    return sumArray;
}*/

/*console.log(digits(n))*/

/*let [a, b] = [4,50]
let m=(a,b)=>b&&a+m(a,b-1)*/
//рекурсия
/*function sumTo(a, b) {
    if (b == 1) return a;
    return a + sumTo(a,b - 1);
}*/

/*console.log(m(a,b))*/

/*let str = "aa1bb2cc3dd"

let FilterString = (str) => {
    let str1 = str.split('')
    let str2 = ``
    for (let v of str1) {
        if (isFinite(v)) {
            (str2 += v)
        }
    }
    return Number(str2)
}
console.log(FilterString(str))*/

/*let x = ['5', '0', 9, 3, 2, 1, '9', 6, 7]

let divCon1 = x => {
    let str = '0'
    let num = [0]
    for (let e of x) {
        if (typeof e === 'string') {str += e}
        if (typeof e === 'number') {num.push(e)}
    }
    return num.reduce((a,b) => a+b) - str.split('').reduce((a,b)=>(a+Number(b)), 0)
}

let divCon = x => x.reduce(((acc, cur) =>
    typeof cur === 'number'? acc+cur : acc - Number(cur)), 0)

console.log(divCon(x))*/

/*
let seconds = 651352

let toTime = seconds =>{
    let h = Math.floor(seconds/3600)
    let m = Math.floor((seconds - h*3600)/60)
    return `${h} hour(s) and ${m} minute(s)`
}

console.log(toTime(seconds))
*/

/*let results = {"Hindi" : 60, "Greek" : 71, "Dutch" : 93}*/

/*let myLanguages = (results) => {
    let values = []
    for (let [key, value] of Object.entries(results)) {
        if (value >= 60) {
            values.push(value)
        }
    }
    let values2 = values.sort((a, b) => b - a)
    let result = []
    for (let i = 0; i<values2.length; i++) {
        Object.keys(results).find(key => results[key] === values2[i] && result.push(key))
    }
    return result
}*/

/*const myLanguages = results => Object.entries(results)
    .filter(([name, points]) => points >= 60)
    .sort(([name1, points1], [name2, points2]) => points2 - points1)
    .map(([name, points]) => name)*/

/*console.log(myLanguages(results))*/

/*let letters = 'abc'
let coords = [1, 1]

let lastSurvivor = (letters, coords) => {
    let arr = letters.split('')
    for (let i = 0; i<coords.length; i++) {
        arr.splice(coords[i], 1)
    }
    return arr.join()
}

function lastSurvivor(string, indices) {
  const arr = [...string];
  for (const i of indices) arr.splice(i, 1)
  return arr[0];
}

console.log(lastSurvivor(letters, coords))*/

/*let str = 'abba'

let pal = (str) => str.split('').reverse().join('') === str

console.log(pal(str))*/

/*let str = "This website is for losers LOL!"

let disemvowel = (str) => {
    let vowels = ['i', 'a', 'e', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let str1 = str.split('')
    for (let i of vowels) {
        if (str1.indexOf(i)!== -1) {
            str1 = str1.filter((e) => e !== i)}
    }
    return str1.join('')
}
function disemvowel(str) {
    var diemvoweledStr = str.replace(/[aeiou]/gi,"");
    return diemvoweledStr;
}

console.log(disemvowel(str))*/

/*let str = 'pear tree'

let getCount = (str) => str.replace(/[bcdfghjklmnpqrstvwxyz\s]/gi,"").length

console.log(getCount(str))*/

/*let arrays = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]

let filterHomogenous = (arrays) => arrays.filter(e => e.length !== 0 || false)
    .filter(e => e.filter(el => el))

let filterHomogenous = a => a.filter(b => b.length > 0
&& b.every(e => typeof e == typeof b[0]));
                                                            // обратный метод - .some()
console.log(/!*filterHomogenous(arrays)*!/)*/

//tusk
//sum(2, 3) == sum(2)(3) == 5

/*
let sum1 = (a, b) => {
    if (b) return a+b
    return function (c){ return c + a }
}

sum1(2)(3)
*/

/*const sum = (x, y) => x + y

Function.prototype.bind2 = function(context, ...a) {
    return (...b) => {
        return this.apply(context, a.concat(...b))
    }
}

const plusTen = sum.bind2(undefined, 10,)

console.log(plusTen(1,))*/


/*let arr = [1, 2, 4, -3]

console.log(arr.sort((a, b) => a - b))*/

/*
let a = -16854352035


let findShort = (a) => Math.abs(a).toString().split('').reduce((a, b) => Number(a) + Number(b))

console.log(findShort(a))
*/

/*let a = "lalak"

let ret = a => {
  let b = a.split('')

  return new Set(b)
}

console.log(ret(a))*/


/*const obj = {
  x: 10,
  y: 20
}

const prop = Object.keys(obj).reverse().join('')

const result = obj["xy"]

console.log(result)*/


/*let obj = {
  "0": 1,
     0: 2
};

console.log(obj["0"] + obj[0])*/

/*var a = 'hello'
function b() {
  console.log(a)
  var a = "world"
  console.log(a)
}
b()*/

/*let a = {}

function clear(a) {
  a.x = 40
  a = null
}

clear(a)
console.log(a)*/

/*const obj = {
  x: 1,
  y: 2
}

const result = Object.values(obj)

console.log(result)*/


/*const statuses = new Set(['success', 'final', 'done'])

const people = [
  {name: "max", status: 'done'},
  {name: "oleh", status: 'success'},
  {name: "max", status: 'ok'},
]

const peopleStatus = people
   .filter(p => statuses.has(p.status))
   .map(person => person.name)

console.log(peopleStatus)*/

/*const map = new Map()

map.set('0', '1');
map.set('s2', '2s')
map.set('3s', 's3')

const arr = [...map.values()]
const result = arr.map(value => parseInt(value, 10))

console.log(result)*/

/*function printNumbers(a, b) {
  for (let i = 0; i < b; i++)
  setTimeout(() => console.log(i), 1000)
}*/

/*let counter = () => setTimeout(function printNumbers(a, b) {
  setTimeout()
}, 1000)*/

/*let a = 1
let b = 5

let printNumbers = (a, b) => {
  setTimeout(function run() {
    console.log(a)
    a ++
    if(a <= b) setTimeout(run, 1000)
  }, 1000)
}

let printNumbers = (a, b) => {
  let timer = setInterval(() => a >= b
     ? clearInterval(timer)
     : console.log(a++),
     1000)
}

printNumbers (a, b)*/

/*
let n = [1,2,3, -5]

let result = n.filter(n => n> 0)
   .map(n=> n*2)

console.log(result)
*/

/*let inc = (function () {
  let counter = 0
  return function () {return ++counter}
})()

console.log(inc())
console.log(inc())*/


/*let words = ['banana', 'grape', 'grapefruit', 'grape', 'grape', 'grapefruit']

const result = () => {

}

//['grape', 'grapefruit', 'banana']*/               //-------------------------------

/*function generateRange(min, max, step){
    return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}*/


/*let multiply = (...arguments) => /!*arguments.map(e => e*2)*!/{
  console.log(arguments)
     ? null
     : [arguments[0], ...multiply(arguments.filter((e, i) => e[i>0]))]
  /!*return [arguments[0], multiply(arguments)]*!/
}

multiply(5,2,3)*/

/*let sum = (a) => {
  return function(b) {
    return console.log(a+b)
  }
}

sum(3)(30)*/


/*
function sum (a,b) {return a+b}
function mul (a,b) {return a*b}
function calculate(fun) {
  return function(a) {
    return function(b) {
     return fun(a, b)
    }
  }
}
console.log(calculate(sum)(2)(3))
console.log(calculate(mul)(2)(3))
*/






