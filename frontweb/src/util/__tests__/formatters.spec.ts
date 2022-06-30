import { formatPrice } from "util/formatters"

describe('formatPrice for positive number', () => {

    test('formatPrice should format number pt-BR when given 10.1', () => {
        // ARRANGE
        const value = 10.1;
        // ACT
        const result = formatPrice(value);
        // ASSERT
        expect(result).toEqual("10,10");
    });

    test('formatPrice should format number pt-BR when given 0.1', () => {
        const result = formatPrice(0.1);
        expect(result).toEqual("0,10");

    });
})


describe('formatPrice for non-positive number', () => {

    test('formatPrice should format number pt-BR when given 0', () => {
        // ARRANGE
        const value = 0;
        // ACT
        const result = formatPrice(value);
        // ASSERT
        expect(result).toEqual("0,00");
    });

    test('formatPrice should format number pt-BR when given -5,1', () => {
        const result = formatPrice(-5.1);
        expect(result).toEqual("-5,10");

    });
})