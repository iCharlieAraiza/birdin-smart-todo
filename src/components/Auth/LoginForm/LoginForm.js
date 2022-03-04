import React, {useState} from 'react'
import { LoginContainer, FormInput, ButtonSection, SubmitButton } from '../Components'
import { validateEmail } from '../../../utils/Validations'
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import firebase from '../../../utils/firebase';
import { provider } from '../../../utils/SocialMedia';

const LoginForm = ( {setSelectedForm} ) => {
  
  const data = {
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(data);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userActive, setUserActive] = useState(false);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (el) => {
    let isValid = true;
    setError({});
    let error = {};
    let formOk = true;

    el.preventDefault()

    if(!validateEmail(formData.email)){
      toast.error('Ups! Your email is not valid')
      error.email = true;
      formOk = false;
    }

    if(formData.password.length < 6){
      toast.error('Invalid password.')
      error.password = true;
      formOk = false;
    }

    setError(error);

    if(formOk){
      setLoading(true);
      fb.auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        setLoading(false);
        setUser(res.user);
        setUserActive(true);
        setSelectedForm('home');
      })
      .catch(err => {
        setLoading(false);
        toast.error(err.message);
      });
    }

    console.log(formData)
  }

  const signUpByGoogle = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      setLoading(false);
      setUser(res.user);
      setUserActive(true);
      setSelectedForm('home');
    }
    ).catch(err => {
      setLoading(false);
      toast.error(err.message);
    })

  }

  return (
    <LoginContainer>
      <h1>Welcome!</h1>
      <p>Login to your account</p>
      <form onChange={onChange} onSubmit={onSubmit}>
        <FormInput placeholder='EMAIL' name="email" />
        <FormInput placeholder='PASSWORD' name="password" type='password' />
        <ButtonSection>
            <SubmitButton type="submit" >Login</SubmitButton>
        </ButtonSection>
        <button onClick={signUpByGoogle}>Sign up by Google</button>
      </form>
      <p>Don’t have an account? <a href="#" onClick={ () => setSelectedForm('register') }>Create your account here</a></p>
    </LoginContainer>
  )
}

export default LoginForm