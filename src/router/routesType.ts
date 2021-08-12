export interface RouteType {
  path: string;
  component: {
    name: string;
  };
}

export type RoutesType = {
  error: RouteType;
  validRoutes: RouteType[];
};
