import { Navigate, Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useUser } from "@clerk/react";

function ProtectedRoutes() {

  
  const { isLoaded, isSignedIn } = useUser();

  // Wait until Clerk finishes loading
  if (!isLoaded) return null;

  // Redirect if not signed in
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default ProtectedRoutes;
