import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '../configs/routesConfig'


export const PrivateRoutes: FC = () => {

  // TODO
  if (!true) {
    return <Navigate to={ROUTES.LOGIN} />
  }

  return (
    <Outlet />
  )
}
