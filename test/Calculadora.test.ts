import { Calculadora } from '../src/Calculadora';

describe('Calculadora', () => {
    it('should add two numbers', () => {
        // Arrange
        const expected = 5;
        const a = 2;
        const b = 3;
        const calc = new Calculadora();
        
        // Act
        const result = calc.soma(a, b);
        
        // Assert
        expect(result).toBe(expected);
    })
})