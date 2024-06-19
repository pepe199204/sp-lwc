import { sum } from '../sum';
    
describe('sum()', () => {
  it('should add 1 and 2 returning 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('should not be greater than 5', () => {
    expect(sum(1, 2)).not.toBeGreaterThan(5);
  });
  it('should not be less than 3', () => {
    expect(sum(1, 2)).not.toBeLessThan(3);
  });
});