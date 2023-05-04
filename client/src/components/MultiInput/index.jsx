import { useState } from 'react';


const MultiInput = ({name,max = Infinity,onAction = () => {},selectedValue = []}) => {
    const [value,setValue] = useState("");
    return <div>
        {
            selectedValue.length > 0 && <div>
                
            </div>
        }
        <div>
            <input value={value} onChange={({target : {value}}) => setValue(value)} type="text"/>
            <button 
            onClick={() => {
                onAction(name,{ type : "insert" , payload : value})
                setValue("");
                }}>add</button>
        </div>
    </div>
}

export default MultiInput;