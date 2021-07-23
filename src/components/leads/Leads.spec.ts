import { Leads } from './Leads.class';

describe('Testing Leads class', () => {
  it('should be defined', () => {
    const leads = new Leads();
    expect(leads).toBeDefined();
  });
});
