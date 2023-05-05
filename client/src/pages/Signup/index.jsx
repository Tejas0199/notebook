import { useState } from "react";
import Axios from 'axios';
import InputFeild from "../../components/InputFeild";
import Radio from "../../components/Radio";
import MultiInput from "../../components/MultiInput";
import Language from "../../components/Language";
import { useNavigate } from 'react-router-dom';
const INITIAL_VALUE = {
    firstname : "",
    lastname : "",
    emailId : "",
    password : "",
    phoneNumber : "",
    gender : "",
    occupation : "student",
    country : "India",
    interestedIn : [],
    languages : [],
    dateOfBirth : {
        date : "",
        month : "",
        year : ""
    }
}
const genderOption = [
    {
        label : "Male",
        value : "male"
    },
    {
        label : "Female",
        value : "female"
    },
    {
        label : "Other's",
        value : "other's"
    }
]
const api_url = "http://127.0.0.8:4000/user"
const Signup = () => {
    const [user,setUser] = useState(INITIAL_VALUE);
    const navigate = useNavigate();
    const createAccount = async () => {
        const res = await Axios.post(api_url,user);
        if(res.status === 201) {
            localStorage.setItem("user",JSON.stringify(res.data.data));
            localStorage.setItem("isLoggedin",true);
            navigate('/');
        }
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        createAccount()
    }
    const onEnterValue = ({ target : { value , name  } }) => {
        if(name === 'phoneNumber' && ( isNaN(value) || value.length > 10)) return;
        setUser({...user, [name] : value})
    }
const onDateEnter = ({ target : {name ,value}}) => {
    setUser({...user, dateOfBirth : {...user.dateOfBirth,[name] : value }})
}
    return <div>
        <div>
            <h2>Create New Account</h2>
            <pre>{JSON.stringify(user)}</pre>
            <form action="" onSubmit={onSubmitHandler}>
                <InputFeild 
                value={user.firstname}
                name="firstname"
                onEnterValue={onEnterValue}
                label="First Name"/>
                <InputFeild
                label="Last Name"
                name="lastname"
                onEnterValue={onEnterValue}/>
                <InputFeild
                label="Enter Email address"
                name="emailId"
                onEnterValue={onEnterValue}/>
                <InputFeild
                value={user.phoneNumber}
                label="Phone Number"
                name="phoneNumber"
                onEnterValue={onEnterValue}/>
                 <InputFeild
                type="password"
                value={user.password}
                label="Passsword"
                name="password"
                onEnterValue={onEnterValue}/>
                <Radio label="Gender"
                name="gender" 
                options={genderOption} 
                selectValue={user.gender}
                onSelectOption ={(name,value) => {
                    setUser({...user,[name] : value})
                }}/>
                 <InputFeild
                value={user.occupation}
                label="Enter Occupation"
                name="occupation"
                onEnterValue={onEnterValue}/>
                <MultiInput name="interestedIn" selectedValue={user.interestedIn} onAction={(name,action) => {
                    if(action.type === "insert") {
                        if(user.interestedIn.includes(action.payload)) return;
                        setUser({...user , [name] : [...user[name],action.payload]})
                    }
                    if(action.type === "remove") {
                        setUser({...user,[name] : user[name].filter((value) => value !== action.payload)})
                    }
                }}/>
                {
                    user.languages.map((language,index) => {
                        return <Language key={index} index={index} language={language}
                        onChange={({target : { name , value , checked }}) => {
                            if(name === "ability") {
                                if(checked) {
                                    user.languages[index].ability.push(value);
                                } else {
                                   user.languages[index].ability =  user.languages[index].ability.filter( ability => ability !== value);
                                }
                            } else {
                                user.languages[index][name] = value;
                            }
                            setUser({...user});
                        }} 
                        onDelete={(a) => {
                            user.languages.splice(a,1);
                            setUser({...user})
                        }}/>
                    })
                }
                { user.languages.length < 5 && <button type="button" onClick={() => {
                    setUser({...user,languages : [...user.languages,{
                        name : "",
                        level : "",
                        ability : []
                    }]})
                }}>Add language</button>}
                <input type="text" name="date" onChange={onDateEnter} />
                <input type="text" name="month" onChange={onDateEnter} />
                <input type="text" name="year" onChange={onDateEnter}/>
                <button type="submit">submit</button>
            </form>
        </div>
    </div>
}

export default Signup