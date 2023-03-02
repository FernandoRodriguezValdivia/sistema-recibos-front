import { useContext } from "react";

import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const { Header } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  backgroundColor: "#7dbcea",
  width: "100%",
};

const HeaderComponent = () => {
  const { isLogin, logout } = useContext(UserContext);

  return (
    <Header style={headerStyle}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["login", "home"]}
        items={
          !isLogin
            ? [
                {
                  label: <Link to="login">Iniciar sesión</Link>,
                  key: "login",
                },
              ]
            : [
                {
                  label: <Link to="/home">Agregar</Link>,
                  key: "home",
                },
                {
                  label: <Link to="/descarga">Descargar</Link>,
                  key: "descarga",
                },
                {
                  label: (
                    <Link to="/login" onClick={logout}>
                      Salir
                    </Link>
                  ),
                  key: "salir",
                },
              ]
        }
      />
    </Header>
  );
};

export default HeaderComponent;
