import { Router } from '../../router/router';
import { Navbar } from './Navbar.class';
import { routes } from '../../router/routes';

describe('Testing Navbar Class', () => {
  it('should be defined', () => {
    // console.log(Navbar);
    expect(Navbar).toBeDefined();
  });

  it('should be brand call CRM', () => {
    const router = new Router(routes);
    const params = {
      router: router
    };
    const navbar = new Navbar(params);

    expect(navbar.brand).toBe('CRM');
  });
});
