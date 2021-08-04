import { RouteType } from './routeType';

export const routes: RouteType[] = [
  {
    path: '/',
    component: {
      name: 'home'
    }
  },
  {
    path: '/error',
    component: {
      name: 'error'
    }
  },
  {
    path: '/leads',
    component: {
      name: 'leads'
    }
  }
];
