import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";
import { max, fizzBuzz, factorial } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater than the second', () => {
        expect(max(2, 1)).toBe(2);
    });
    it('should return the second argument if it is greater than the first', () => {
        expect(max(1, 2)).toBe(2);
    });
    it('should return the first argument if both arguments are equal', () => {
        expect(max(2, 2)).toBe(2);
    });
});

describe('fizzBuzz', () => {
    it('should return fizzBuzz if the argument is divisable by 3 and 5 ', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        });
    it('should return fizz if the argument is divisable by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
        });
    it('should return buzz if the argument is divisable by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
        });
    it('should return a string if the argument is not divisable by 3 or 5', () => {
        expect(fizzBuzz(17)).toBe('17')
        });
})

describe('factorial', () => {
    it('should return 1 if 0 is passed', () => {
        expect(factorial(0)).toBe(1)
    });
    it('should return 1 if 1 is passed', () => {
        expect(factorial(1)).toBe(1)
    });
    it('should return 2 if 2 is passed', () => {
        expect(factorial(2)).toBe(2)
    });
    it('should return 6 if 3 is passed', () => {
        expect(factorial(3)).toBe(6)
    });
})