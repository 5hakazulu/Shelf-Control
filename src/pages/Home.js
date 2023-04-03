import { useContext } from 'react'
import SControlNavbar from "../components/navbar";
import BookSearch from "../components/BookSearch";
import { useSelector } from "react-redux";

import { AuthContext } from "../context/authContext"

import Footer from "../components/Footer";
import SavedBooks from "../components/SavedBooks";



const Home = () => {
  const searchString = useSelector((state) => state.keyword.searchString);
  const { currentUserId } = useContext(AuthContext);

  return (
    <>
      <SControlNavbar />
      <div className="homeBody">
        {searchString ? (
          <BookSearch userId={currentUserId} />
        ) : (
          <SavedBooks userId={currentUserId} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
