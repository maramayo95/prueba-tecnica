import {useState} from 'react'
import '../../index.css'
const Field = () => {
  const [inputText, setInputText] = useState<string>('')
  
//   function isUSAZipCode(){
//   // codigos validos 10005 0 10005-1234
//   return /^\d{5}(-\d{4})?$/.test();
// }
  const validate = /^\d{5}(-\d{4})?$/;

  const response = {
    invalid: "Invalid Zip Code",
    valid: "Valid Zip Code"
  }

  

 
  return (
    <div>
        <input
        type="text"
        value={inputText}
        onChange={
          (e)=> {setInputText(e.target.value)
            
            //console.log(e.target.value)
          }
        }
        
        />
    {!!validate.test(inputText) ? <h1 className="success">{response.valid}</h1> : <h1 className="fail">{response.invalid}</h1>}
    </div>
  )
}

export default Field