import {useState}  from  'react';
function Hooks(initalValue){
    const[value,setValue]=useState(initalValue)
function handleChange(e){
    setValue(e.target.value)
}
return{
    value,
    onChange:handleChange
}
}
export default Hooks