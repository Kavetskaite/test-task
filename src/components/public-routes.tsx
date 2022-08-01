import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '../configs/routesConfig'

export const PublicRoutes: FC = () => {
 // TODO

  return !true ? (
    <Navigate to={ROUTES.DASHBOARD} />
  ) : (
    <Outlet />
  )
}
