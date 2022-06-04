import React, {useState} from 'react'
import { LoginContainer, FormInput, ButtonSection, SubmitButton, ErrorLabel, GoogleButton } from '../Components'
import { validateEmail } from '../../../utils/Validations'
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import firebase from '../../../utils/firebase';
import { provider } from '../../../utils/SocialMedia';
import {FcGoogle } from 'react-icons/fc'

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

    if(formOk){
      setLoading(true);
      firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        setUser(res.user);
        setUserActive(true);
        setSelectedForm('home');
        if(!res.user.emailVerified){
          toast.warning('Please verify your email.')
          error.emailConfirmation = true;
        }else{
          toast.success('Welcome!')
        }
      })
      .catch(err => {
        toast.error("Your email or password is incorrect.");
        error.login = true;
      }).finally(() => {
        setLoading(false);
      })
    }
    setError(error);
  }

  const signUpByGoogle = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      setLoading(false);
      setUser(res.user);
      setUserActive(true);
      toast.success('Welcome!')
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
        {error.login && <ErrorLabel>* Invalid email or password </ErrorLabel>}
        {error.emailConfirmation && <ErrorLabel>* Your account is not active yet. Check your email and confirm your account. </ErrorLabel>}
        <FormInput placeholder='EMAIL' name="email" />
        <FormInput placeholder='PASSWORD' name="password" type='password' />
        <ButtonSection>
          {loading ? (
              <SubmitButton type="submit" disabled>
                  <BeatLoader size={ 8 } />
              </SubmitButton>
          ) : (  
              <SubmitButton type='input'>
                  'Sign up'
              </SubmitButton>
            )}   
        </ButtonSection>
        <GoogleButton onClick={signUpByGoogle}> <FcGoogle /> Sign up by Google</GoogleButton>
      </form>
      <p>Don’t have an account? <a href="#" onClick={ () => setSelectedForm('register') }>Create your account here</a></p>
    </LoginContainer>
  )
}

export default LoginForm