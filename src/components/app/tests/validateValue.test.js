import { validateValue, mapArrToStrings, square, squareV2 } from './utill';

// describe('Проверка функции validateValue', () => {
// 	test('Корректное значение', () => {
// 		expect(validateValue(50)).toBe(true);
// 	});
// });

describe('Проверка функции squareV2 - вызов 1 раз', () => {
	test('Корректное значение', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		squareV2(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});
	afterEach(() => jest.clearAllMocks());
});

describe('Проверка функции squareV2 - вызов 0 раз', () => {
	test('Корректное значение', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		squareV2(1);
		expect(spyMathPow).toBeCalledTimes(0);
	});
	afterEach(() => jest.clearAllMocks());
});

describe('Проверка функции square', () => {
	// beforeAll(() => {});
	// beforeEach(() => {});
	// ....
	// afterEach(() => {});
	// afterAll(() => {});

	test('Корректное значение', () => {
		expect(square(2)).toBe(4);
	});
	test('Корректное значение', () => {
		expect(square(2)).not.toBe(5);
	});
	test('Результат меньше чем 5', () => {
		expect(square(2)).toBeLessThan(5);
	});
	test('Результат больше чем 3', () => {
		expect(square(2)).toBeGreaterThan(3);
	});
	test('Результат не равен undefined', () => {
		expect(square(2)).not.toBeUndefined();
	});
});

describe('Проверка функции mapArrToStrings', () => {
	test('Корректное значение', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
	});
	test('Различные данные в масиве - фильтрация', () => {
		expect(mapArrToStrings([1, 2, 3, null, undefined, 'sdsdsd'])).toEqual([
			'1',
			'2',
			'3',
		]);
	});
	test('Проверка пустого массива', () => {
		expect(mapArrToStrings([])).toEqual([]);
	});

	test('Проверка отрицанием', () => {
		expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
	});
});

describe('Проверка функции validateValue', () => {
	test('Корректное значение', () => {
		expect(validateValue(50)).toBe(true);
	});

	test('Корректное значение - пограничное значение', () => {
		expect(validateValue(0)).toBe(true);
	});

	test('Корректное значение - пограничное значение', () => {
		expect(validateValue(100)).toBe(true);
	});

	test('Не корректное значение - больше чем разрешено', () => {
		expect(validateValue(150)).toBe(false);
	});

	test('Не корректное значение - меньше чем разрешено', () => {
		expect(validateValue(-50)).toBe(false);
	});
});
