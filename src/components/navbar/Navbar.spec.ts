import { Navbar } from './Navbar.class';

describe('Testing Navbar Class', () => {
  it('should be defined', () => {
    // console.log(Navbar);
    expect(Navbar).toBeDefined();
  });

  it('should be brand call CRM', () => {
    const navbar = new Navbar();
    expect(navbar.brand).toBe('CRM');
  });
});
