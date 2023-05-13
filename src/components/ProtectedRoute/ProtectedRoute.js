import React from "react";
import "./ProtectedRoute.css";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return <>{children}</>;
  } else {
    return (
      <div className="route">
        Da biste pristupili stranici morate se prvo ulogovati.
      </div>
    );
  }
}