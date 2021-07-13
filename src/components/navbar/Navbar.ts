import * as ko from 'knockout';
import AxiosInstance from '../../config/AxiosInstance';
import template from './Navbar.html';

class Navbar {
  brand: string;
  version: ko.Observable<string> = ko.observable('');

  constructor() {
    this.brand = 'CRM';
  }

  getVersionFromAPI(): void {
    AxiosInstance.get('/version').then(({ data }) => {
      return this.version(data.version);
    });
  }
}

export default { viewModel: Navbar, template: template };
