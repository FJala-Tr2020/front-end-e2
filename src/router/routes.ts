import { RoutesType, RouteType } from './routesType';

const error: RouteType = {
  path: '/error',
  component: {
    name: 'error'
  }
};

const validRoutes: RouteType[] = [
  {
    path: '/',
    component: {
      name: 'home'
    }
  },

  {
    path: '/leads',
    component: {
      name: 'leads'
    }
  }
  // place your route here
];

export const routes: RoutesType = { error, validRoutes };
