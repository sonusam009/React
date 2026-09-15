import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile(props) {
    const {user} = useContext(UserContext);

    if(!user){
        return <div>Please Login</div>;
    }

    return (
        <div>Welcome {user.username}!</div>
    );
}

export default Profile