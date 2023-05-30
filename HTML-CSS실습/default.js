document.write('Hello World 2');
document.write("<h1> Welcome to JS Programs </h1>");
document.write("<h2> Welcome to JS Programs </h2>");

console.log('Welcome JS Programs');
console.info('Welcome JS Programs');
console.warn('Welcome JS Programs');
console.error('Welcome JS Programs');

alert('Welcome JS Programs');
var a = prompt('Welcome JS Programs');
console.log(a);

console.log(typeof 123);
console.log(typeof 123.5);
console.log(typeof "123");
console.log(typeof true);
console.log(typeof false);

var car;
console.log(typeof car);
var car = "";
console.log(typeof car);
var person = { firstName: "John", lastName:"Doe", age: 50, eyeColor: "blue"};

console.log(typeof person, person);
person = null;
console.log(typeof person, person);

var name = "이승훈";
var age = 29;
var cgpa = 3.92;
var lineBreak = "<br/>";

document.write("이름: " + name + lineBreak);
document.write("나이: " + age + lineBreak);
document.write("학점: " + cgpa + lineBreak);

var lastName = "홍";
var firstName = "길동";
var fullName = lastName + firstName;

console.log("Today is a beautiful day");
console.log("My name is " + fullName);

var num1 = 20;
var num2 = 30;
var sum = num1 + num2;

console.log(num1 + num2);
console.log("" + num1 + num2);
console.log(num1 + " + " + num2 + " = " + sum);
