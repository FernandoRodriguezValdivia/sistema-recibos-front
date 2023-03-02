import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Descarga from "./descargar/Descarga";
import PageLogin from "./login/PageLogin";
import PageHome from "./home/PageHome";

import { UserContext } from "./context/UserContext";

const AppRouter = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <Routes>
      {!isLogin ? (
        <>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<PageHome />} />
          <Route path="/descarga" element={<Descarga />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
