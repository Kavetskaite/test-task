import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  PublicRoutes,
  PrivateRoutes,
} from './components';
import {
  Login,
  Home,
  Profile,
} from './pages';
import { ROUTES, ROUTES_ALIASES } from './configs/routesConfig';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.ROOT}
        element={<Navigate replace to={ROUTES.LOGIN} />}
      />

      <Route
        path={ROUTES_ALIASES.login}
        element={<PublicRoutes />}
      >
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>

      <Route
        path={ROUTES_ALIASES.profile}
        element={
          <PrivateRoutes />
        }
      >
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>

      <Route
        path={ROUTES_ALIASES.dashboard}
        element={
          <PrivateRoutes />
        }
      >
        <Route path={ROUTES.DASHBOARD} element={<Home />} />
      </Route>
    </Routes>
  );
}
