import * as ko from 'knockout';
import { Router } from '../../router/router';
import AxiosInstance from '../../config/AxiosInstance';

export class Navbar {
  brand: string;
  version: ko.Observable<string> = ko.observable('');
  router: Router;
  activeLink: ko.Observable<string> = ko.observable('leads');

  constructor(params: { router: Router }) {
    this.brand = 'CRM';
    this.router = params.router;
  }

  getVersionFromAPI(): void {
    AxiosInstance.get('/version').then(({ data }) => {
      return this.version(data.version);
    });
  }

  loadRoute(path: string): void {
    this.router.load(path);
    this.activeLink(path);
  }

  getActiveLink(text: string): boolean {
    return this.activeLink() === text;
  }
}
