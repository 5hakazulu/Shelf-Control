import SControlNavbar from "../components/navbar";
import BookSearch from "../components/BookSearch";
import { useSelector } from "react-redux";
import "./Home.css";
import Footer from "../components/Footer";
const Home = () => {
    const searchString = useSelector((state) => state.keyword.searchString);

    return (
        <>
            <SControlNavbar />
            {searchString ? <BookSearch /> : null}
            <div className="homeBody">

            </div>
            <Footer />
        </>
    );
}

export default Home;