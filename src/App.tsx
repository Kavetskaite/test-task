import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { getGlobalParameters, getLabels } from "./store/actions";

import "./App.css";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlobalParameters());
    dispatch(getLabels());
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
