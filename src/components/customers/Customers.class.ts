import * as ko from 'knockout';
import { RequestLead } from '../../helpers/request';

export class Customers {
  request: RequestLead;
  customersList = ko.observableArray();
  description;

  constructor() {
    this.request = new RequestLead();
    this.loadCustomers();
    this.description = process.env.DESCRIPTION_TABLE_CUSTOMERS;
  }

  loadCustomers(): void {
    this.request
      .getCustomers()
      .then((response) => {
        this.customersList(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
