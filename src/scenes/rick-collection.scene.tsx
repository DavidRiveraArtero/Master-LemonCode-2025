import * as React from 'react';
import { AppLayout, CenteredLayout } from '#/layouts';
import { RickCollectionContainer } from '#/pods/rick-collection';
import { Outlet } from 'react-router-dom';
export const RickCollectionScene = () => (
  <>
    <AppLayout>
        <Outlet/>
        <RickCollectionContainer />
    </AppLayout>
  </>
);
