const Validate = (values) => {
    let errors = {};

    if(!values.fullName){
        errors.fullName = "Name is required." 
    }
    if(!values.email){
        errors.email = "Email is required." 
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid"
    }
    if(!values.password){
        errors.password = "Password is required." 
    }else if(values.password.length < 5){
        errors.password = "Password must be of 5 or more characters."
    }
    if(!values.password2){
        errors.password2 = "Required field." 
    }else if(values.password2 !== values.password){
        errors.password2 = "Password does not match."
    }

  return errors;    
};

export default Validate;
