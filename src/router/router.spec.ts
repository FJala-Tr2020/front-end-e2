import { Router } from './router';
import { routes } from './routes';

describe('Testing router class', () => {
  it('should be <home> componet', () => {
    const router = new Router(routes);

    expect(router.component().name).toEqual('home');
  });

  it('should be <leads> componet', () => {
    const router = new Router(routes);
    router.load('/leads');
    expect(router.component().name).toEqual('leads');
  });

  it('should be <error> componet', () => {
    const router = new Router(routes);
    router.load('/something');
    expect(router.component().name).toEqual('error');
  });
});
