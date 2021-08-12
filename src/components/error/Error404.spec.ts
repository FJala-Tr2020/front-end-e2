import { Error404 } from './Error404.class';

describe('Testing Home class', () => {
  it('should be defined', () => {
    const error404 = new Error404();
    expect(error404).toBeDefined();
  });
});
