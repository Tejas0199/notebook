import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        
        // if(! localStorage.getItem("isLoggedin")) {
        //     navigate("/login");
        //     return;
        // }   
        setUser(JSON.parse(localStorage.getItem("user")))
    },[]) 
    return <div>
        <h1>Account</h1>
        <pre>{JSON.stringify(user)}</pre>
        {
            user ? <div>
                <h1>Name : {user.firstname + " " + user.lastname}</h1>
                <div>
                    <button>Edit</button>
                    <button>Signout</button>
                </div>
            </div> : <div>
                <h1>Please login with your account</h1>
                <button>Login</button>
            </div>
        }
    </div>
}

export default Profile;