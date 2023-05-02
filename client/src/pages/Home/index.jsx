import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if( ! localStorage.getItem("user")) {
            navigate('/login')
        }
    },[])
    return <div>
        <h1>Home Page</h1>
    </div>
}

export default Home;