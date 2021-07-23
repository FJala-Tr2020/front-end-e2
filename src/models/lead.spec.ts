import { Lead } from './lead';

describe('Model Lead', () => {
  it('should create an lead model', () => {
    const lead = new Lead();
    expect(lead).toBeDefined();
  });
});
