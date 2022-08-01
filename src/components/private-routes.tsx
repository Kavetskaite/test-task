import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../configs/routesConfig";
import { selectIsAuthenticated } from "../store/selectors";

export const PrivateRoutes: FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <Outlet />;
};
