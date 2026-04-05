import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";

function PublicRoutes() {
  //Find current path
  const curremtPath = useLocation();
  console.log(curremtPath);

  //Target path to hide
  const targetPath = ["/auth/sign-in"];

  //check if it include the same path throws true
  const ishide = targetPath.includes(curremtPath.pathname);

  return (
    <>
      {/* True -> false */}
      {!ishide && <Header />}
      <Outlet />
    </>
  );
}

export default PublicRoutes;
