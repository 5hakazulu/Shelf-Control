import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    null
    // JSON.parse(localStorage.getItem("user")) || null
  );


  
  
  const login = async (credentials) => {
    try {
      console.log("Hello")
      const response = await axios.post('/api/auth/login', credentials);
  
      if (response.status === 200) {
        console.log(response)
        const token = response.data.token;
        const user = credentials.email;
        if (token) {
          localStorage.setItem("token", token);
          setCurrentUser(user); 
        } else {
          console.log("No token received");
        }
      } else {
       
      }
    } catch (error) {
     
    }
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

