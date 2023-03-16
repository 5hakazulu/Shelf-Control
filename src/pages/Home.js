import SControlNavbar from "../components/navbar";
import BookSearch from "../components/BookSearch";
import { useSelector } from "react-redux";
const Home = () => {
    const searchString = useSelector((state) => state.keyword.searchString);

    return ( 
        <>
            <SControlNavbar />
            {searchString ? <BookSearch /> : null}
        </>
     );
}
 
export default Home;