import { Customers } from './Customers.class';

describe('Testing Customers class', () => {
  it('should be defined', () => {
    const customers = new Customers();
    expect(customers).toBeDefined();
  });
});
