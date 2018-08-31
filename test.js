function sayName (name) {
	let message = 'My name is' + name
	return message
}

let  assert = require('chai').assert

describe('sayName', function () {

	it("Получаем фразу с новым именем", function () {
		assert.typeOf(sayName('ivan', 'string'))
	})
});