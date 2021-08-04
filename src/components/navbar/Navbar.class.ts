import * as ko from 'knockout';
import { Router } from '../../router/router';
import AxiosInstance from '../../config/AxiosInstance';

export class Navbar {
  brand: string;
  version: ko.Observable<string> = ko.observable('');
  router: Router;

  constructor(params: { router: Router }) {
    this.brand = 'CRM';
    this.router = params.router;
  }

  getVersionFromAPI(): void {
    AxiosInstance.get('/version').then(({ data }) => {
      return this.version(data.version);
    });
  }
}
