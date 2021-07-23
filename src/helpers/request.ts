import { Lead } from 'models/lead';
import { HttpClient } from 'models/http';

export class RequestLead implements HttpClient<Lead> {
  baseUrl = process.env.BASE_URL;

  async getLeads(): Promise<Lead[]> {
    try {
      const response = await fetch(this.baseUrl + 'leads');
      return await response.json();
    } catch (error) {
      return [];
    }
  }
}
