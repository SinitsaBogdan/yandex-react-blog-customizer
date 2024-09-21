export function validateValue(value) {
	if (value < 0 || value > 100) {
		return false;
	}
	return true;
}

export function mapArrToStrings(arr) {
	return arr.filter((item) => Number.isInteger(item)).map(String);
}

export function square(number) {
	return number * number;
}

export function squareV2(number) {
	if (number === 1) {
		return number;
	}
	return Math.pow(number, 2);
}
