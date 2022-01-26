import React, {useState} from 'react';
import SignupForm from './SignupForm';
import SignupFormSuccess from './SignupFormSuccess';

const Form = () => {
  const [FormIsSubmitted, setFormIsSubmitted] = useState(false);

  const SubmitForm = () => {
    setFormIsSubmitted(true);
  };
  return <div>
      {!FormIsSubmitted ? <SignupForm SubmitForm={SubmitForm} /> : <SignupFormSuccess />}
  </div>
};

export default Form;
