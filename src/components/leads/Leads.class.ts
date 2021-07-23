import * as ko from 'knockout';
import { RequestLead } from '../../helpers/request';

export class Leads {
  request: RequestLead;
  leadsList = ko.observableArray();
  description;

  constructor() {
    this.request = new RequestLead();
    this.loadLeads();
    this.description = process.env.DESCRIPTION_TABLE_LEADS;
  }

  loadLeads(): void {
    this.request
      .getLeads()
      .then((response) => {
        this.leadsList(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
