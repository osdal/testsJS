// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}



// Функция sum должна возвращать тип данных true. Проверить её на это

let assert = require('chai').assert;

describe('sum', function () {

	it("тип данных true", function () {
		assert.equal(sum(20, 2), true);
	});
});

// Переменная num должна быть равна 5. Проверить на соответствие.

var arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe('num', function () {

	it("Переменная num должна быть равна 5", function () {
		assert.equal(num, 5);
	});
});



// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

describe('each', function () {

	it("Провепка фуекции each на тип данных", function () {
		assert.typeOf(each(arr, myFunc), 'array');
	});
});

describe('each', function () {

	it("Ожидаемый результат", function () {
		assert.equal(each(arr, myFunc).indexOf(8), 0);
		assert.equal(each(arr, myFunc).indexOf(7), 1);
		assert.equal(each(arr, myFunc).indexOf(6), 2);
		assert.equal(each(arr, myFunc).indexOf(5), 3);
		assert.equal(each(arr, myFunc).indexOf(4), 4);
	});
});

describe('each', function () {

	it("Проверка свойства length", function () {
		assert.equal(each(arr, myFunc).length, 5);
	});
});