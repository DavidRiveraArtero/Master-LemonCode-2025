import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list_member:string;
  details_member: string;
  list_rick:string;
  detail_rick:string
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list_member:"/member",
  details_member: "/member/:name",
  list_rick: "/rick&morty",
  detail_rick: "/rick&morty/:name/:id"

};

interface Routes extends Omit<SwitchRoutes, "details_member" | "detail_rick"> {
  details_member: (name: string) => string;
  detail_rick: (id:string) => string
}



export const routes: Routes = {
  ...switchRoutes,
  details_member: (name: string) => generatePath(switchRoutes.details_member, { name }),
  detail_rick: (id: string) => generatePath(switchRoutes.detail_rick, { id}),
};


