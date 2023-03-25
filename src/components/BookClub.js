import { ChatEngine } from 'react-chat-engine'

function SControlBookClub() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif" }} >
            <ChatEngine
                height='83vh'

                projectID="bdd44270-e12a-42d9-9312-6d9a4daf4c30"
                userName="admin"
                userSecret="password"
            />
        </div>

    )

}

export default SControlBookClub;