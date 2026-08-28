import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  rickCollection: string;
  createRick: string;
  editRick: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  rickCollection: '/rick',
  createRick: '/hotels/create',
  editRick: '/hotels/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editRick'> {
  editRick: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editRick: (id) => generatePath(switchRoutes.editRick, { id }),
};
