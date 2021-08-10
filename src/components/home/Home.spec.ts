import { Home } from './Home.class';

describe('Testing Home class', () => {
  it('should be defined', () => {
    const home = new Home();
    expect(home).toBeDefined();
  });
});
