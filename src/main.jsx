import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthForm from "./auth/Sign-in/SignIn";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import PublicRoutes from "./PublicRoutes";
import "./index.css";
import { ClerkProvider } from "@clerk/react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  //Protected route
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },

  //Public route at a time only one will be renders either this or protected rout
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth/sign-in",
        element: <AuthForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);
