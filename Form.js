import React,{useState} from 'react';


function Form(){
    
    const [value, setValue] = useState({fullname:'',email:'',message:''})
    const [message,setMessage]= useState('')


    const onChange=(e) =>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const disp_results=(e)=>{
        e.preventDefault();
        if (value.fullname==='' || value.email==='' || value.message==='') {
            setMessage('Some fields are empty')
        } else {
            let form = new FormData();
            form.append('fullname',value.fullname)
            form.append('email',value.email)
            form.append('email',value.email)
            fetch ('http://localhost/backend/',{method:'post',body:form})
            .then(res=>res.json())
            .then(responsedata=>{
                console.log(responsedata)
                
            });
            
        }

        
    }
    


    return(
       <form className='form-container'>
           {message}
           <div className='form-controls'>
            <label>Fullname</label>
            <input type='text' 
            name='fullname' 
            value={value.fullname}
            onChange={onChange} />
           </div>

           <div className='form-controls'>
            <label>Email</label>
            <input type='text' 
            name='email' 
            value={value.email}
            onChange={onChange} />
           </div>
           
           <div className='form-controls'>
            <label>Message</label>
            <textarea name='message' 
            value={value.message}
            onChange={onChange}/>
           </div>
                      
           <button onClick={disp_results}>Submit</button>
       </form>
    )

}


export default Form;