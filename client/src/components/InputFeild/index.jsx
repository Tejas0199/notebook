
const InputFeild = ({label,name,onEnterValue,value,...restProps}) => {
    return <div>
        {label && <><label htmlFor={"id" + name}>{label}</label><br/></>}
        <input name={name} {...restProps} value={value} id={"id" + name} onChange={onEnterValue}/>
    </div>
}

export default InputFeild;