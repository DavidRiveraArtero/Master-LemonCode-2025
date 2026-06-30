interface AppRoutes {
  root: string;
  list: string;
  detail: string;
}

export const AppRoutes: AppRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:id",
};
