import * as ko from 'knockout';
require('knockout.validation');
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/Navbar';

import filmsBinding from './bindings/filmsBinding';

ko.components.register('navbar', Navbar);

ko.bindingHandlers.films = filmsBinding;

class AppViewModel {
  constructor() {
    // These values are hard-coded but could come from a server API request with JSON response
  }
}

// Bind Knockout to the "app" element in "src/index.html"
ko.applyBindings(new AppViewModel(), document.getElementById('app'));
