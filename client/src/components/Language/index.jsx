


const Language = ({index,onDelete,onChange,language :{ name , level , ability}}) => {
    return <div>
        <input type="text" name="name" value={name} onChange={onChange}/>
        <select name="level" value={level} onChange={onChange}>
            <option value="">Select level</option>
            <option value="level 1">level 1</option>
            <option value="level 2">level 2</option>
            <option value="level 3">level 3</option>
        </select>
        <div>
            <input type="checkbox" checked={ability.includes('read')} name="ability" value="read" onChange={onChange}/>
            <label htmlFor="">Read</label>
            <input type="checkbox" checked={ability.includes('write')} name="ability" value="write" onChange={onChange}/>
            <label htmlFor="">Write</label>
            <input type="checkbox" checked={ability.includes('speak')} name="ability" value="speak" onChange={onChange}/>
            <label htmlFor="">Speak</label>
            <button type="button" onClick={onDelete.bind(this,index)}>Delete</button>
        </div>
    </div>
}

export default Language;