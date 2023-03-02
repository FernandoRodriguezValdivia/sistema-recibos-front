import { createContext, useState } from "react";

const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const login = ({ username, password }) => {
    // Haciendo login

    localStorage.setItem("token", "algun-token");
    setUser({ name: username });
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
    setUser({});
    localStorage.clear();
  };

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      logout();
    } else {
      login({ username: "usuario" });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLogin,
        login,
        logout,
        checkToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
