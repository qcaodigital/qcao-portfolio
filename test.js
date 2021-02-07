const arr = [];

for (let i = 1; i <= 100; i++) {
	arr.push(i);
}

arr.forEach((num) => {
	if (num % 5 === 0 && num % 3 === 0) {
		console.log('Fizzbuzz');
	} else if (num % 3 === 0) {
		console.log('Fizz');
	} else if (num % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(num);
	}
});
