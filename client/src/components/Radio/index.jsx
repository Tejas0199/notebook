import './style.css'


const Radio = ({options = [],label,name,onSelectOption,selectValue}) => {
    return <div className='radio-container'>
        <p>{label}</p>
        <div className='radio-option-container'>
        {
           options.map((option) => {
            return <button type='button'
            onClick={onSelectOption.bind(this,name,option.value)} 
            className={`radio-btn ${ selectValue === option.value ? "active" : ""} `}>{option.label}</button>
           })
        }
    </div>
    </div>
    
}

export default Radio;