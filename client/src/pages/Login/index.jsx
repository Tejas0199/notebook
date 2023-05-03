import { useState } from 'react'
import './style.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
const INITIAL_VALUE = {
    username : "",
    password : ""
}
const Login = () => {
    const [userData,setUserData] = useState(INITIAL_VALUE)
    const navigate = useNavigate();
    const onChangeHandler = ({target : {name,value}}) => {
        setUserData({...userData,[name] : value})

    }
    return <div className="login-container">
        <div>
            <h1>logo</h1>
            <pre>{JSON.stringify(userData)}</pre>
        </div>
        <div className='login-input-container'>
            <h1>Log-in here</h1>
            <div>
                <label>User name</label><br/>
                <input type='text' name="username" value={userData.username} onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Password</label><br/>
                <input type='password' name="password" value={userData.password} onChange={onChangeHandler}/>
            </div>
            <div>
                <p>if you dont have account <span onClick={() => navigate('/sign-up')}>Sign-up</span></p>
            </div>
        </div>
    </div>
}

export default Login