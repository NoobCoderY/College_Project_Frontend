import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute2 = ({ auth, children }) => {
  return auth === true ? children : <Navigate to="/" />;
};

export default ProtectedRoute2;
