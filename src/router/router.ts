import * as ko from 'knockout';
import { RoutesType, RouteType } from './routesType';

type Component = {
  name: string;
};

export class Router {
  routes: RoutesType;
  component: ko.Observable<Component>;

  constructor(routes: RoutesType) {
    this.routes = routes;
    this.component = ko.observable(this.routes.validRoutes[0].component);
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
    const matchedRoute = this.routes.validRoutes.find((route) => {
      const routePathSegs = route.path.split('/').slice(1);

      if (routePathSegs.length !== pathSegments.length) {
        return false;
      }
      return routePathSegs.every((routePathSeg, i) => {
        return routePathSeg === pathSegments[i];
      });
    });
    if (!matchedRoute) {
      return this.routes.error;
    }
    return matchedRoute;
  }
}
