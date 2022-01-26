import React, {useEffect, useState} from 'react';
import Validate from './Validate';

const SignupForm = ({SubmitForm}) => {
    const [values , setValues] = useState({
        fullName: "",
        email: "",
        password: "",
        password2: ""
    });

    const [errors , setErrors] = useState({});
    const [dataIsCorrect , setDataIsCorrect] = useState(false);
    const handleChange = (Event) => {
        setValues({
            ...values,
            [Event.target.name]: Event.target.value,
        })
    }

    const handleFormSubmit = (Event) => {
        Event.preventDefault();
        setErrors(Validate(values))
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            SubmitForm(true);
        }
    }, [errors]);
  return(
    <div className='container'>
     <div className='app-wrapper'>
         <div>
        <h2>Happy to see you here!</h2>
        <h3>Create Account</h3>
        </div>
    
     <form className='form-wrapper'>
         <div className='name'>
             <label className='label'>Full Name</label>
             <input 
             className='input' 
             type="text" 
             name='fullName' 
             value={values.fullName}
             onChange={handleChange}>
             </input>
             {errors.fullName && <p className="error">{errors.fullName}</p>}
         </div>
         <div className='email'>
             <label className='label'>E-mail</label>
             <input
              className='input' 
              type="email" 
              name='email' 
              value={values.email}
              onChange={handleChange}>
              </input>
              {errors.email && <p className="error">{errors.email}</p>}
         </div>
         <div className='password'>
             <label className='label'>Password</label>
             <input 
             className='input' 
             type="password" 
             name='password' 
             value={values.password}
             onChange={handleChange}>
             </input>
             {errors.password && <p className="error">{errors.password}</p>}
         </div>
         <div className='password2'>
             <label className='label'>Confirm password</label>
             <input 
             className='input' 
             type="password" 
             name='password2' 
             value={values.password2}
             onChange={handleChange}>
             </input>
             {errors.password2 && <p className="error">{errors.password2}</p>}
         </div>
         <div>
             <button className='submit' onClick={handleFormSubmit}>Sign up</button>
         </div>
     </form>
     </div> 
</div>);
};

export default SignupForm;
