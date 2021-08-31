/*
 * Day 9: Recursion 3
 */

const factorial = (n: number): number => {
	if (n == 0) {
		return 1;
	}
	return n * factorial(n - 1);
};

console.log(factorial(3));
