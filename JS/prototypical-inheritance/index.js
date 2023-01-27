// ? Прототипное наследование позволяет на основе одного объекта создавать другие, со своими методами и свойствами

//* связать объекты можно связать при помощи __proto__
let animal = {
	eats: true,
	walk() {
		console.log("Animal walk");
	}
};

let rabbit = {
	jumps: true,
	__proto__: animal /
};

rabbit.walk()




//* ЦЕПОЧКУ НАСЛЕДОВАНИЯ МОЖНО УДЛИНИТЬ 
let animal2 = {
	eats: true,
	walk() {
		console.log("Animal walk");
	}
};

let rabbit2 = {
	jumps: true,
	__proto__: animal2
};

let longEar = {
	earLength: 10,
	__proto__: rabbit2
};

// walk взят из цепочки прототипов
longEar.walk()// Animal walk
console.log(longEar.jumps)// true (из rabbit)



// * Есть только два ограничения:

// * Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.

let animal3 = {
	eats: true,
	walk() {
		console.log("Animal walk");
	},
	__proto__: longEar3 // ! произойдет ошибка ReferenceError
};

let rabbit3 = {
	jumps: true,
	__proto__: animal3
};

let longEar3 = {
	earLength: 10,
	__proto__: rabbit3
};


// * Значение __proto__ может быть объектом или null. Другие типы игнорируются.