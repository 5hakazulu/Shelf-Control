import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [currentUserId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId")) || null
  );
  const [currentToken, setCurrentToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const login = async (credentials) => {
    try {
      console.log("Hello");
      const response = await axios.post("/api/auth/login", credentials);

      if (response.status === 200) {
        const token = response.data.token;
        const user = credentials.email;

        if (token) {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", JSON.stringify(token));
          setCurrentUser(user);
          setCurrentToken(token);
        } else {
          console.log("No token received");
        }
      } else {
      }
    } catch (error) {}
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  const fetchUserId = async () => {
    const getToken =
      currentToken || (JSON.parse(localStorage.getItem("token")) ?? null);

    if (!getToken) {
      console.log("No token found");
      return;
    }

    try {
      const response = await fetch("/api/user", {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      const data = await response.json();

      if (data?.user?.id) {
        localStorage.setItem("userId", data.user.id);
        setUserId(data.user.id);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentUserId,
        currentToken,
        login,
        logout,
        fetchUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
