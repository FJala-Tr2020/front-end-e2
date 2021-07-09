import Version from '../../models/Version';
import template from './Navbar.html';

class Navbar {
  brand: string;
  version: Version;

  constructor(params: { version: Version }) {
    this.brand = 'CRM';

    this.version = params.version;
    console.log('nav ver', params.version);
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: Navbar, template: template };
