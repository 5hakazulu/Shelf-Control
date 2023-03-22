import SControlNavbar from "../components/navbar";
import BookSearch from "../components/BookSearch";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import "./Home.css";
import Footer from "../components/Footer";
const Home = () => {
    const searchString = useSelector((state) => state.keyword.searchString);

    return (
        <>
            <SControlNavbar />
            <div className="homeBody">
                {searchString ? <BookSearch /> : null}

            </div>
            <Footer />
        </>
    );
}

export default Home;