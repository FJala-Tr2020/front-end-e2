import { RequestLead } from '../helpers/request';
import { Lead } from '../models/lead';

describe('GetLeads', () => {
  it('should create an request lead model', () => {
    const requestLead = new RequestLead();
    expect(requestLead).toBeDefined();
    expect(requestLead.baseUrl).not.toBe('');
  });

  it('should return data', async () => {
    const requestLead = new RequestLead();
    const leads: Lead[] = [];
    expect(requestLead.getLeads()).resolves.toEqual(leads);
    requestLead.getLeads().then((response) => {
      expect(response).toEqual(leads);
    });
  });

  it('should catch empty array', () => {
    const requestLead = new RequestLead();
    requestLead.getLeads().catch((error) => {
      expect.assertions(1);
      expect(error).toEqual([]);
    });
  });
});
