// import { Leads } from '../components/leads/Leads.class';
// import { Error404 } from '../components/error/Error404.class';
// import { Home } from '../components/home/Home.class';
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
