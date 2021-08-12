import * as ko from 'knockout';
require('knockout.validation');
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Leads from './components/leads/Leads';
import Error404 from './components/error/Error404';

import filmsBinding from './bindings/filmsBinding';
import { Router } from './router/router';
import { routes } from './router/routes';

ko.components.register('home', Home);
ko.components.register('navbar', Navbar);
ko.components.register('leads', Leads);
ko.components.register('error', Error404);

ko.bindingHandlers.films = filmsBinding;

class AppViewModel {
  router: Router;

  constructor() {
    this.router = new Router(routes);
    // These values are hard-coded but could come from a server API request with JSON response
  }
}

// Bind Knockout to the "app" element in "src/index.html"
ko.applyBindings(new AppViewModel(), document.getElementById('app'));
