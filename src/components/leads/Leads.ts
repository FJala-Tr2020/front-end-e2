import * as ko from 'knockout';
import template from './Leads.html';
import { RequestLead } from '../../helpers/request';

class Leads {
  request: RequestLead;
  leadsList = ko.observableArray();

  constructor() {
    this.request = new RequestLead();
    this.loadLeads();
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

export default { viewModel: Leads, template: template };
