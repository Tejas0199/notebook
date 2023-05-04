import { useState } from "react";
import InputFeild from "../../components/InputFeild";
import Radio from "../../components/Radio";
import MultiInput from "../../components/MultiInput";

const INITIAL_VALUE = {
    firstname : "",
    lastname : "",
    emailId : "",
    password : "",
    phoneNumber : "",
    gender : "",
    occupation : "",
    country : "",
    interestedIn : [],
    languages : []
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

const Signup = () => {
    const [user,setUser] = useState(INITIAL_VALUE)
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    const onEnterValue = ({ target : { value , name  } }) => {
        if(name === 'phoneNumber' && ( isNaN(value) || value.length > 10)) return;
        setUser({...user, [name] : value})
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
                <MultiInput name="interestedIn" onAction={(name,action) => {
                    if(action.type === "insert") {
                        setUser({...user , [name] : [...user[name],action.payload]})
                    }
                    if(action.type === "remove") {
                        setUser({...user,[name] : user[name].filter((value) => value !== action.payload)})
                    }
                }}/>
                <button>submit</button>
            </form>
        </div>
    </div>
}

export default Signup