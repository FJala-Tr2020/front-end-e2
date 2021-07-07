import template from './Navbar.html';

class Navbar {
  brand: string;

  constructor() {
    this.brand = 'CRM';
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: Navbar, template: template };
