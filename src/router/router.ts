import * as ko from 'knockout';
import { RouteType } from './routeType';

type Component = {
  name: string;
};

export class Router {
  routes: RouteType[];
  component: ko.Observable<Component>;

  constructor(routes: RouteType[]) {
    this.routes = routes;
    this.component = ko.observable(this.routes[0].component);
  }

  load(path: string): void {
    const pathSegments = path.split('/').slice(1);
    this.loadRoute(pathSegments);
  }

  loadRoute(pathSegments: string[]): void {
    const matchedRoute = this.matchUrlToRoute(pathSegments);
    const url = matchedRoute.path;
    window.history.pushState({}, '', url);
    this.component(matchedRoute.component);
  }

  matchUrlToRoute(pathSegments: string[]): RouteType {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegs = route.path.split('/').slice(1);

      if (routePathSegs.length !== pathSegments.length) {
        return false;
      }
      return routePathSegs.every((routePathSeg, i) => {
        return routePathSeg == pathSegments[i];
      });
    });
    if (!matchedRoute) {
      return this.routes[1];
    }
    return matchedRoute;
  }
}
