import SControlNavbar from "../components/navbar";
import BookSearch from "../components/BookSearch";
import { useSelector } from "react-redux";

import { useState, useEffect, useContext } from "react";

import Footer from "../components/Footer";
import SavedBooks from "../components/SavedBooks";

import { AuthContext } from "../context/authContext";

const Home = () => {
  const searchString = useSelector((state) => state.keyword.searchString);
  const [userId, setUserId] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserId = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found");
        return;
      }
      try {
        const response = await fetch("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log("User data:", data);
        setUserId(data.user.id)
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <>
      <SControlNavbar />
      <div className="homeBody">
        {searchString ? (
          <BookSearch userId={userId} />
        ) : (
          <SavedBooks userId={userId} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
