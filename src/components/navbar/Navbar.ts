import * as ko from 'knockout';
import AxiosInstance from '../../config/AxiosInstance';
// import Version from '../../models/Version';
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

// The default export returns the component details object to register with KO
export default { viewModel: Navbar, template: template };
