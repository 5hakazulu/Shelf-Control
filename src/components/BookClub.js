import { ChatEngine } from 'react-chat-engine'
import { useSelector } from "react-redux";
import { AuthContext } from "../context/authContext";
import { useState, useEffect, useContext } from "react";

function SControlBookClub() {

    const [userId, setUserId] = useState(null);
    const [userSecret, setUserSecret] = useState(null);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchUserInfo = async () => {
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
                setUserId(data.user.id);
                setUserSecret(data.user.password);
                console.log(userId);
                console.log(userSecret);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div style={{ fontFamily: "Arial, sans-serif" }} >
            <ChatEngine
                height='83vh'

                projectID="bdd44270-e12a-42d9-9312-6d9a4daf4c30"
                // userName="admin"
                // userSecret="password"

                userName={userId}
                userSecret={userSecret}
            />
        </div>

    )

}

export default SControlBookClub;