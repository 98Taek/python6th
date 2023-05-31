//document.write('Hello World 2');
//document.write("<h1> Welcome to JS Programs </h1>");
//document.write("<h2> Welcome to JS Programs </h2>");
//
//console.log('Welcome JS Programs');
//console.info('Welcome JS Programs');
//console.warn('Welcome JS Programs');
//console.error('Welcome JS Programs');
//
//alert('Welcome JS Programs');
//var a = prompt('Welcome JS Programs');
//console.log(a);
//
//console.log(typeof 123);
//console.log(typeof 123.5);
//console.log(typeof "123");
//console.log(typeof true);
//console.log(typeof false);
//
//var car;
//console.log(typeof car);
//var car = "";
//console.log(typeof car);
//var person = { firstName: "John", lastName:"Doe", age: 50, eyeColor: "blue"};
//
//console.log(typeof person, person);
//person = null;
//console.log(typeof person, person);
//
//var name = "이승훈";
//var age = 29;
//var cgpa = 3.92;
//var lineBreak = "<br/>";
//
//document.write("이름: " + name + lineBreak);
//document.write("나이: " + age + lineBreak);
//document.write("학점: " + cgpa + lineBreak);
//
//var lastName = "홍";
//var firstName = "길동";
//var fullName = lastName + firstName;
//
//console.log("Today is a beautiful day");
//console.log("My name is " + fullName);
//
//var num1 = 20;
//var num2 = 30;
//var sum = num1 + num2;
//
//console.log(num1 + num2);
//console.log("" + num1 + num2);
//console.log(num1 + " + " + num2 + " = " + sum);
//
//var text = prompt("Enter your Name: ");
//document.write("Your name: " + text + "<br/>");
//
//var len = text.length;
//document.write("Number of characters: " + len + "<br/>");
//
//document.write(text.charAt(2) + "<br/>");
//
//document.write(text.toUpperCase() + "<br/>");
//document.write(text.toLowerCase() + "<br/>");
//
//var text1 = "hi, ";
//var text2 = "bye";
//var text3 = text1.concat(text2);
//document.write(text3 + "<br/>");
//
//var text4 = "hello";
//var result = text4.slice(0,2);
//document.write(result + "<br/>");
//
//var num = "20";
//num = num.toString();
//console.log(typeof num);
//
//var number = 20;
//console.log(typeof number);
//
//number = number.toString();
//console.log(number, typeof number);
//
//var x = 2.56789;
//console.log(x.toFixed(1), typeof x.toFixed(1));
//console.log(x.toFixed(2));
//
//console.log(x.toPrecision(1), typeof x.toPrecision(1));
//console.log(x.toPrecision(2));
//
//console.log(Number(true));
//console.log(Number(false));
//console.log(Number("10"));
//console.log(Number(" 10 "));
//console.log(Number("10.25"));
//
//var num1 = parseInt(prompt("Enter first Number: "));
//var num2 = parseInt(prompt("Enter second Number: "));
//var lineBreak = "<br/>";
//
//var result = num1 + num2;
//document.write("The sum is : " + result + lineBreak);
//
//result = num1 - num2;
//document.write("The sub is : " + result + lineBreak);
//
//result = num1 * num2;
//document.write("The multiplication is : " + result + lineBreak);
//
//result = num1 / num2;
//document.write("The division is : " + result + lineBreak);
//
//result = num1 % num2;
//document.write("The remainder is : " + result + lineBreak);
//
//var base = parseFloat(prompt("Enter base: "));
//var height = parseFloat(prompt("Enter height: "));
//var area = base * height * 0.5;
//
//document.write("Area of triangle: " + area + "<br/>");
//
//var num1 = 20;
//var num2 = 10;
//var num3 = "10";
//var num4 = 20;
//var num5 = 15;
//
//console.log('일반 크기비교');
//console.log(num1 > num2, num1, '>', num2);
//console.log(num1 >= num2, num1, '>=', num2);
//console.log(num1 < num2, num1, '<', num2);
//console.log(num1 <= num2, num1, '<=', num2);
//
//console.log('같은지 여부 확인');
//console.log(num1 == num4, num1, '==', num4);
//console.log(num1 != num4, num1, '!=', num4);
//
//console.log('===');
//console.log(num1 === num3, num1, '===', num3);
//console.log(num2 === num3, num2, '===', num3);
//console.log(num2 == num3, num2, '==', num3);
//
//console.log('num1 > num2 && num1 < num5', num1 > num2 && num1 < num5);
//console.log('num1 > num2 || num1 < num5', num1 > num2 || num1 < num5);
//
//var num1 = parseInt(prompt('첫번째 숫자 입력 : '));
//var num2 = parseInt(prompt('두번째 숫자 입력 ; '));
//
//if(num1 > num2) {
//    console.log('큰 수는 num1 : ' + num1);
//}
//
//if(num1 < num2) {
//    console.log('큰 수는 num2 : ' + num2);
//}
//
//if(num1 == num2) {
//    console.log('같은 수');
//}
//
//if(num1 > num2) {
//    console.log('큰 수 num1: ' + num1);
//} else if (num1 < num2) {
//    console.log('큰 수 num2: ' + num2);
//} else {
//    console.log('같은 수');
//}
//
//var letter = prompt('Enter a letter: ');
//
//letter = letter.toLowerCase();
//
//if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//    console.log('Vowel');
//} else {
//    console.log('Consonant');
//}
//
//var digit = parseInt(prompt('Enter a digit: '));
//
//switch(digit) {
//    case 0:
//        document.write('Zero');
//        break;
//    case 1:
//        document.write('One');
//        break;
//    case 2:
//        document.write('Two');
//        break;
//    case 3:
//        document.write('Three');
//        break;
//    case 4:
//        document.write('Four');
//        break;
//    case 5:
//        document.write('Five');
//        break;
//    case 6:
//        document.write('Six');
//        break;
//    case 7:
//        document.write('Seven');
//        break;
//    case 8:
//        document.write('Eight');
//        break;
//    case 9:
//        document.write('Nine');
//        break;
//    default:
//        document.write('Not a digit');
//}

//var i = 1;
//
//do {
//    document.write('멋쟁이 사자 : ' + i + '<br/>');
//    i++;
//} while (i < 1)
//
//document.write('<br/>');
//
//var j = 1;
//
//while (j < 1) {
//    document.write('멋쟁이 사자 : ' + j++ + '<br/>');
//}

//for (var i = 1; i <= 100; i++) {
//    if (i == 20) {
//        break;
//    }
//    document.write(i + '<br/>');
//}
//
//document.write('<br/>');
//
//for (var i = 1; i <= 100; i++) {
//    if (i == 20) {
//        continue;
//    }
//    document.write(i + '<br/>');
//}

// 함수
// 매개변수가 없는 함수 생성하기
//function message() {
//    document.write('Hello, I am a function without parameter' + '<br/>');
//}
//
//// 한 개의 매개변수를 갖는 함수 생성하기
//function welcomeMessage(name) {
//    document.write('welcome ' + name + '<br/>');
//}
//
//// 여러 개의 매개변수를 갖는 함수 생성하기
//function addition(num1, num2) {
//    var sum = num1 + num2;
//    document.write('addition is ' + sum + '<br/>');
//}
//
//// 값을 반환하는 함수
//function square(num) {
//    return num * num;
//}
//
//message();
//welcomeMessage('임정택');
//addition(2, 3);
//document.write('square 5 is : ' + square(5) + '<br/>');

//(function display(message) {
//    console.log(message);
//})('hi');
//
//var display2 = function displayMessage(msg) {
//    console.log(msg);
//}
//
//display2('I am message');
//
//(function addNumbers(a, b) {
//    console.log(a + b);
//})(3, 4);

var names = new Array(20);

names[0] = '지훈';
names[1] = '은영';

console.log(names[1]);

// 값을 가진 배열 생성하기
var students = ['지훈', '은영', '수진', '준호'];
console.log('students = ' + students);
console.log('2번 학생 : ' + students[1]);

// 배열의 길이 찾기
console.log('학생 배열의 길이 : ', students.length);

// 배열의 요소 추가하기
students.push('정택');
console.log('push 후 학상 배열 = ', students);

// 배열의 요소 삭제하기
students.pop();
console.log('pop 후 학생 배열 = ', students);

// 배열 연결하기
var numArray1 = [10, 20];
var numArray2 = [30, 40, 50, 60];
var numArray = numArray1.concat(numArray2);

console.log('배열 잇기 : ' + numArray);