import React, { useState } from 'react'
import { toast } from 'react-toastify';


import { LoginContainer, FormInput, LabelCheckbox, ButtonSection, SubmitButton, ErrorLabel } from '../Components'
import { validateEmail } from '../../../utils/Validations'
import { BeatLoader } from 'react-spinners';
import { Checkbox } from 'semantic-ui-react'
import firebase from '../../../utils/Firebase';



const RegisterForm = ( { setSelectedForm} ) => {
    const data = {
        email: '',
        password: '',
        passwordConfirm: ''
    }

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(data);
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (el) => {
        const error = {}
        let isValid = true;
        el.preventDefault()
        
        if(!validateEmail(formData.email)){
            toast.error('Ups! Your email is not valid')
            error.email = true
            isValid = false
        }

        if(formData.password.length < 6){
            toast.error('Invalid password. Must have at least 6 characters')
            error.password = true
            isValid = false
        }

        if(formData.password !== formData.passwordConfirm){
            toast.error('Your password does not match')
            error.confirmPassword = true
            isValid = false
        }

        if(!checked){
            toast.error('Terms and conditios must be accepted')
            error.checked = true
            isValid = false
        }

        setError(error)
        if(isValid){
            setLoading(true)
            firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password).then(() => {
                sendVerificationEmail();
                console.log('User was created')
                //setSelectedForm('login')
            }).catch(err => {
                console.log(err)
            }
            ).finally(() => {
                setLoading(false)
                setSelectedForm('login')
            }
            )
        }
    }

    const sendVerificationEmail = () => {
        firebase.auth().currentUser.sendEmailVerification().then(() => {
            toast.success('Verification email sent')
        }).catch(err => {
            toast.error('Error sending verification email')
        })  
    }


    return (
        <LoginContainer>
            <h1>Welcome!</h1>
            <p>Let's create a new account. It's free!</p>
            <form onSubmit={onSubmit} onChange={onChange}>
            { error.email && <ErrorLabel> * Your email is not valid </ErrorLabel> }
            <FormInput placeholder='EMAIL' name="email" />
            { error.password && <ErrorLabel> * Invalid password. Must have at least 6 characters </ErrorLabel> }
            <FormInput placeholder='PASSWORD' type='password' name="password"/>
            { error.confirmPassword && <ErrorLabel> * Your password does not match  </ErrorLabel> }
            <FormInput placeholder='REPEAT PASSWORD' type='password' name="passwordConfirm" />
            { error.checked && <ErrorLabel> * Terms and conditios must be accepted  </ErrorLabel> }
            {/* <LabelCheckbox><input type="checkbox" id="cbox1" value="true" checked={ checked }  onChange={ () => setChecked(el => !el)} /> I acept terms and conditions.</LabelCheckbox>    */}
            <Checkbox label='I acept terms and conditions' checked={ checked } onChange={ () => setChecked(el => !el)} />
            
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
            </form> 
            <p>Do you already have an account? <a href="#" onClick={ () => setSelectedForm('login') }>Sign In!</a></p>
        </LoginContainer>
    )
}

export default RegisterForm