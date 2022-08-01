import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../configs/routesConfig";
import { selectIsAuthenticated } from "../store/selectors";

export const PublicRoutes: FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <Navigate to={ROUTES.DASHBOARD} /> : <Outlet />;
};
