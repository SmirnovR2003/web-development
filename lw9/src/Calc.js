function calc(expression) {
	if (typeof expression !== 'string') {
		console.error(`Error: ${expression} is not a string`);
		return;
	}
	if (expression.length === 0) {
		console.error('Error: empty expression');
		return;
	}

	let count = 0;
	for (let i = 0; i < expression.length; i++) {
		if (expression[i] == '(')
			count++;	
		if (expression[i] == ')')
			count--;	
	}
	if (count != 0) {
		console.error(`Error: something extra '(' or ')'`);
		return;
	}

	expression = expression.replace(/[(,)]/g, ' ').replace(/ +/g, ' ').trim().split(' ').reverse();
	let stack = [];
	let isFoundedError = false;
	for (let i = 0; i < expression.length && !isFoundedError; i++) {
		if (!isNaN(expression[i]) && isFinite(expression[i])) {
			stack.push(parseFloat(expression[i]));
		} else if (!(isOperation(expression[i]))) {
			console.error(`Met not a number (${expression[i]})`);
			isFoundedError = true;
			break;
		}
		if (isOperation(expression[i])) {
			switch (expression[i]) {
				case '+':
					op1 = stack.pop();
					op2 = stack.pop();
					if (isNaN(op2)) {
						console.error('Not enough numbers');
						isFoundedError = true;
						break;
					}
					stack.push(op1 + op2);
					break;
				case '-':
					op1 = stack.pop();
					op2 = stack.pop();
					if (isNaN(op2)) {
						console.error('Not enough numbers');
						isFoundedError = true;
						break;
					}
					stack.push(op1 - op2);
					break;
				case '*':
					op1 = stack.pop();
					op2 = stack.pop();
					if (isNaN(op2)) {
						console.error('Not enough numbers');
						isFoundedError = true;
						break;
					}
					stack.push(op1 * op2);
					break;
				case '/':
					op1 = stack.pop();
					op2 = stack.pop();
					if(op2 == 0) {
						console.error(`You can't divide by zero`);
					}else if (isNaN(op2)) {
						console.error('Not enough numbers');
						isFoundedError = true;
						break;
					}
					stack.push(op1 / op2);
					break;
			}
		}	
	}

	if (stack.length != 1) {
		console.error('Too much argument');
		return;
	}
	
	return stack.pop();
	
	function isOperation(c) {
		return ['+', '-', '*', '/'].includes(c);
	}
}
// calc('+ 3 4') = 7;
// calc('+ 2 * 2 2') = 6
// calc('* 2 + 2 2') = 8
// calc('+ 2 / 8 * 2 2') = 4
// calc('* 1234 56') = 69104

// Floating point numbers
// calc('+ 12.1 7.9') = 20

// Division by zero
// calc('+ 2 / 8 * 0 2')

// Negative numbers
// calc('+ -12 3') = -9

// Parentheses
// calc('(+ (* 3 (+ (* 2 4) (+ 3 5))) (+ (- 10 7) 6))') = 57

// Random whitespaces amount
// calc('/   ( * 12   3   )  6  ') = 6

// Too few arguments
// calc('* 2 + 2')

// Invalid symbols
// calc('+ 2 d')
// calc('* 12 + 123hello12 7')
// calc('+ 1..2 3')
// calc('+ 1.2.3 3')

// Invalid parentheses
// calc('+ 2 (- 3) 2)')
// calc('+ 2 (- 3( 2)')

// Invalid type
// calc(1337)