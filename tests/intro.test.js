import { describe, test, it, expect } from "vitest";
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
    it('should return fizzBuzz if the argument is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('should return fizz if the argument is divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });
    it('should return buzz if the argument is divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });
    it('should return a string if the argument is not divisible by 3 or 5', () => {
        expect(fizzBuzz(17)).toBe('17');
    });
});

