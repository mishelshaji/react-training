const Calculator = require('./calculator.js');

describe('Testing Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Add', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('Subtract', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test('Multiply', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    });

    test('Divide', () => {
        expect(calculator.divide(1, 2)).toBe(0.5);
    });

    test('Divide by zero', () => {
        expect(calculator.divide(1, 0)).toBe(Infinity);
    });
});
