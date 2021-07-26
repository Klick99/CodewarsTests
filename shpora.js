/*
//some()
//проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции:
const myAwesomeArray = ["a", "b", "c", "d", "e"]
myAwesomeArray.some(test => test === "d")
//-------> Output : true


//reduce()
//Этот метод принимает функцию, которая имеет в качестве аргумента аккумулятор и значение.
// Он применяет функцию к аккумулятору и каждому значению массива, чтобы в результате вернуть только
// одно значение.
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.reduce((total, value) => total * value)


//every()
//Этот метод проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
// Он вернет значение true, если каждый элемент совпадет с проверяемой функцией, и значение false
// — если нет.
const myAwesomeArray = ["a", "b", "c", "d", "e"]
myAwesomeArray.every(test => test === "d")
//-------> Output : false
const myAwesomeArray2 = ["a", "a", "a", "a", "a"]
myAwesomeArray2.every(test => test === "a")
//-------> Output : true


//map()
//Этот метод принимает функцию в качестве параметра и создает новый массив с результатом вызова
// указанной функции для каждого элемента массива. Он всегда будет возвращать одинаковое
// количество элементов.
const myAwesomeArray = [5, 4, 3, 2, 1]
myAwesomeArray.map(x => x * x)
//-------> Output : 25
//                  16
//                  9
//                  4
//                  1


//flat()
//Этот метод принимает в качестве аргумента массив массивов и сглаживает вложенные массивы в массив
// верхнего уровня. Обратите внимание, что этот метод работает только для одного уровня.
const myAwesomeArray = [[1, 2], [3, 4], 5]
myAwesomeArray.flat()
//-------> Output : [1, 2, 3, 4, 5]


//filter()
//Этот метод принимает функцию в качестве параметра и возвращает новый массив, содержащий все элементы
// массива, для которого функция фильтрации передавалась в качестве аргумента, и возвращает ее со
// значением true.
const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
  { id: 4, name: "Mass" },
]
myAwesomeArray.filter(element => element.name === "Mass")
//-------> Output : 0:{id: 3, name: "Mass"},
//                  1:{id: 4, name: "Mass"}


//forEach()
//Этот метод применяет функцию к каждому элементу массива.
const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
]
myAwesomeArray.forEach(element => console.log(element.name))
//-------> Output : john
//                  Ali
//                  Mass

//findIndex()
//Этот метод принимает функцию в качестве параметра и в дальнейшем применяет ее к массиву.
// Он возвращает индекс найденного элемента, если элемент удовлетворяет условию проверяющей функции,
// переданной в качестве аргумента. Если не удовлетворяет, возвращается –1.
const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
]
myAwesomeArray.findIndex(element => element.id === 3)
//-------> Output : 2
myAwesomeArray.findIndex(element => element.id === 7)
//-------> Output : -1


//find()
//Этот метод принимает функцию в качестве аргумента и в дальнейшем применяет ее к массиву.
// Он возвращает значение элемента, найденного в массиве, если элемент удовлетворяет условию
// проверяющей функции. В противном случае оно возвращается со значением undefined.
const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
]
myAwesomeArray.find(element => element.id === 3)
//-------> Output : {id: 3, name: "Mass"}
myAwesomeArray.find(element => element.id === 7)
//-------> Output : undefined


//sort()
//Этот метод принимает функцию в качестве параметра. Он сортирует элементы массива и возвращает их.
const myAwesomeArray = [5, 4, 3, 2, 1]
// Sort from smallest to largest
myAwesomeArray.sort((a, b) => a - b)
//-------> Output : [1, 2, 3, 4, 5]
// Sort from largest to smallest
myAwesomeArray.sort((a, b) => b - a)
//-------> Output : [5, 4, 3, 2, 1]


//concat()
//Этот метод объединяет два или более массива/значения и возвращает новый массив.
const myAwesomeArray = [1, 2, 3, 4, 5]
const myAwesomeArray2 = [10, 20, 30, 40, 50]
myAwesomeArray.concat(myAwesomeArray2)
//-------> Output : [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]


//fill()
//Этот метод заполняет все элементы массива одинаковым значением, от начального индекса (по умолчанию 0)
//до конечного индекса (по умолчанию array.length).
const myAwesomeArray = [1, 2, 3, 4, 5]
// The first argument (0) is the value
// The second argument (1) is the starting index
// The third argument (3) is the ending index
myAwesomeArray.fill(0, 1, 3)
//-------> Output : [1, 0, 0, 4, 5]


//includes()
//Этот метод возвращает значение true, если массив содержит определенный элемент, и значение false — если нет.
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.includes(3)
//-------> Output : true
myAwesomeArray.includes(8)
//-------> Output : false


//reverse()
//Этот метод меняет порядок следования элементов в массиве на обратный. Первый элемент становится последним, а последний — первым.
const myAwesomeArray = ["e", "d", "c", "b", "a"]
myAwesomeArray.reverse()
//-------> Output : ['a', 'b', 'c', 'd', 'e']


//flatMap()
//Этот метод применяет функцию к каждому элементу массива, а затем сглаживает результат в новый массив.
// Он объединяет метод flat() и метод map() в одну функцию.
const myAwesomeArray = [[1], [2], [3], [4], [5]]
myAwesomeArray.flatMap(arr => arr * 10)
//-------> Output : [10, 20, 30, 40, 50]
// With .flat() and .map()
myAwesomeArray.flat().map(arr => arr * 10)
//-------> Output : [10, 20, 30, 40, 50]*/

//-----------------------------------------------------------------------------------------------------
/*


//bind()
let user = {
  firstName: "Вася"
};
function func() {
  console.log(this.firstName);
}
let funcUser = func.bind(user);
funcUser(); // Вася


//bind()
let user = {
  firstName: "Вася",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};
let say = user.say.bind(user);
say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")


//call()          call - вызов функции с подменой контекста - this внутри функции. Пример:
function f(arg) {
  alert(arg);
  alert(this);
}
f('abc');             // abc, [object Window]
f.call('123', 'abc'); // abc, 123


//apply()       apply - вызов функции с переменным количеством аргументов и с подменой контекста.
function f() {
    alert(this);
    for (var i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
    }
}
f(1, 2, 3);                   // [object Window], 1, 2, 3
f.apply('abc', [1, 2, 3, 4]); // abc, 1, 2, 3, 4


//bind()      bind - создаёт "обёртку" над функцией, которая подменяет контекст этой функции.
//Поведение похоже на call и apply, но, в отличие от них, bind не вызывает функцию, а лишь возвращает
//"обёртку", которую можно вызвать позже.
function add(a, b) {
    return a + b;
}
var addOne = add.bind(null, 1);
alert(add(1, 2));   // 3
alert(addOne(2));   // 3


*/
//------------------------------------------------------------------------------------------------
/*


// У стрелочных функций нет prototype!!!

//  Каждый prototype - независимый объект с определенным набором свойств и методов.
//  Прототипы не могут быть равны друг другу

//  __proto__ - у любого объекта. prototype - у class, function объекта.
//  __proto__ любого объекта ссылается на  prototype класса (функции конструктора)
//  с помощью которой этот объект был создан.
let man = {}  //new Object
man.__proto__ === Object.prototype

let count = 10  // count.__proto__ === Number.prototype

// __proto__ у одинаковых по типу объектов равны  -   один и тот же объект
let man = {}   // new Object
let man2 = {}  // new Object
man.__proto__ === man2.__proto__  // true


let chan = new Chan()   // chan.__proto__ === Chan.prototype


let object = { name: Dimon }
object.toString()            // object.__proto__ (ссылается на) => Object.prototype = { toString(){} }


function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {    //добавляем прототипу новое свойство - функция sayHello
  console.log("Hello " + this.name + "!")
}
let newPerson = new Person("Димон")
newPerson.sayHello()        // Hello Димон!


*/
//------------------------------------------------------------------------------------------------
/*


export const instence = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {  }
})
export const securityAPI = {
  getCaptchaUrl() {
    return instence.get<GetCatpchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data)
  },
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 300)
})
promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
})
console.log(promise1);
// expected output: [object Promise]


*/
//------------------------------------------------------------------------------------------------
/*


.a = {
  display: flex;  none, block, inline-block, inline, grid, flex
}
.a = {
  position: static; relative, absolute, fixed, sticky,
  opacity: 0; // элемент становится невидимым но остается закрепленное за ним место
  border-radius: 50%; //скругление
}


.div = {      // для центрования контента
  display: flex;
  justify-content: center;
  align-items: center;
}


//<input id="check" type="checkbox" >
  //<label for="check" />  // для стилизации верхнего элемента, по id "check". Кастомный checkbox.
//</input>

// загрузка WEB страницы браузера:
// 1 Формирование DOM из HTML
// 2. Загрузка стилей
// 3. На основании DOM CSS формируется дерево рендеринга
// 4. Для каждого элемента рассчитывается положение на странице
// 5 Отрисовка

//Селектор тега:	1
// Селектор класса:	10
// Селектор ID:	100
// Inline-стиль:	1000

//<a href="google.com" target="_blank">Google</a> // Вместо страници гугл перенаправляет на пустую страницу

// vh - 1%  относительная высота от окна браузера
// vw - 1% относительная ширина

// .div = {
//    display: flex;
//    justify-content: center;    // расположение контента относительно главной оси flexbox контейнера
//  }

// ul {
//    list-style: none;   // убирает точки(маркер) у списка ul - li
// }

// !impotent      // задать наивысший приоритет селектору

// text-transform: uppercase;   // для перевода теста в заглавные буквы. Можно в курсив и т.д.

// <input type="file">      // кастомный инпут для загрузки файла

// *{         // позволяет добавить стили для всех элементов на странице
//
//  }

// препроцессоры - возможность использовать миксины(переиспользуемые участки), вложенность, переменные


*/
//---------------------------------------------------------------------------------------------------
/*


//String  строки
let value = true;
alert(typeof value); // boolean
value = String(value); // теперь value это строка "true"
alert(typeof value); // string


//Numbers числа
alert( "6" / "2" ); // 3, строки преобразуются в числа

let age = Number("Любая строка вместо числа");
alert(age); // NaN, преобразование не удалось

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


//Правило логического преобразования:
//Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN,
// становятся false.
// Все остальные значения становятся true.


*/
//---------------------------------------------------------------------------------------------------


/*
console.log(0 || 1 && 3 || 4)     //3

|| - возвращает первое истинное или последнее ложное. Проверка на истинность
&& - возвращает первое ложное или последнее истинное. Проверка на ложность


*/