// 1. Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num) {
	var result = num * num;
	console.log("The result of squaring the number " + num + " is " + squareNumber);
	return result;
}
squareNumber(3);



// 2. Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5."
function halfNumber(num) {
	var result = num / 2;
	console.log("Half of " + num + " is " + result);
	return result;
}
halfNumber(10);



// 3. Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(num1, num2) {
	var result = (num1/num2) * 100;
	console.log(num1 + " is " + result + "% of " + num2);
	return result;
}
percentOf(25, 100);


// 4. Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172"
// Bonus: Round the result so there are only two digits after the decimal.
// Area of Circle= radius * radius * PI, Circumference of the circle = 2 * radius * PI
function areaOfCircle(radius) {
	var area = Math.PI * squareNumber(radius);
	console.log("The area for a circle with radius " + radius + " is " + area);
	return Math.round(area);
}
areaOfCircle(10);

// this is another way but better to reuse the squareNumber function
function areaOfCircle(radius) {
	var area = Math.PI * (radius * radius);
	console.log("The area for a circle with radius " + radius + " is " + area);
	return Math.round(area);
}
areaOfCircle(1.5);


/* 5. Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
	  1. Take half of the number and store the result.
	  2. Square the result of #1 and store that result.
	  3. Calculate the area of a circle with the result of #2 as the radius.
	  4. Calculate what percentage that area is of the squared result (#3). */
function cumulative(num) {
	var result1 = halfNumber(num);
	var result2 = squareNumber(result1);
	var result3 = areaOfCircle(result2);
	var result4 = percentOf(result2, result3);
}
cumulative(10);



