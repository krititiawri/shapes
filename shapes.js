console.log("welsome to shapes.js");
// Shape constructor with get_type function 
function Shape(get_type){
	this.get_type = function(){
		return this.constructor;
		console.log(this.constructor);
		// return get_type;
		// console.log(get_type);
	}
	return get_type;
	console.log("get");
	console.log(get_type);
	}

console.log("Hi"+Shape.prototype.constructor);
console.log("first console");
console.log(Shape.toString());
var userPrototype = Object.getPrototypeOf(Shape);

console.log("The prototype of user is " + userPrototype);
var s1 = new Shape();

console.log("s1"+s1);
var shapeProtype = Object.getPrototypeOf(Shape);
console.log("shape prototype"+ shapeProtype);
console.log(s1);

// for Traingle
function Traingle(side1,side2,side3){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}
// Creating instance of traingle constructor
var testTraingle  = new Traingle(1,2,3);
console.log("testTraingle");
console.log(testTraingle);
console.log("traingle prototype"+ Shape.prototype);
console.log(testTraingle.prototype = new Shape());
console.log("For Traingle")
console.log(Shape(testTraingle));
console.log("instance of traingle");
console.log(testTraingle.prototype.constructor);
// Protype of traingle 
Traingle.prototype = new Shape();
console.log("Traingle prototype"+ Traingle);

testTraingle.prototype.constructor = Traingle;
// console.log(Traingle);
// testTraingle.prototype = new Shape();
// console.log("est");
// console.log(testTraingle.prototype = new Shape());

// // var tr = testTraingle.getPrototypeOf(Shape);
// // console.log(tr);
// Traingle.prototype = new Shape();

// testTraingle.get_type = function(){
// 	return this.constructor;
// 	console.log(this.constructor);

// }

console.log("Get prototype of triangle:")
console.log(testTraingle.prototype);
console.log(" ")
// for square
function Square(side1,side2,side3,side4){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;	
}
// Creating instance of square constructor
var testSquare = new Square(1,2,3,4);
console.log("square");
console.log(testSquare.prototype = new Shape());
testSquare.prototype = new Shape();
console.log(Shape(testSquare));
// pototype of square

testSquare.prototype.constructor = Square;
console.log("Get prototype of square:")
console.log(testSquare.prototype)
console.log(" ")

// for Pentagon
function Pentagon(side1,side2,side3,side4,side5){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;	
	this.side5 = side5;
}
// Creating instance of square constructor
var testPentagon = new Pentagon(1,2,3,4,5);
console.log("Pentagon");
console.log(testPentagon.prototype = new Shape());
testPentagon.prototype = new Shape();
console.log(Shape(testPentagon));

// protype of pentagon

testPentagon.prototype.constructor = Pentagon;
console.log("Get prototype of Pentagon:")
console.log(testPentagon.prototype)
console.log(" ")
