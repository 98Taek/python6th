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

var letter = prompt('Enter a letter: ');

letter = letter.toLowerCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log('Vowel');
} else {
    console.log('Consonant');
}