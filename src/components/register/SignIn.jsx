import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FormButton } from "./FormButton";
import { FormInput } from "./FormInput";
import { LinearLoader } from "../liner_loader/LinearLoader";
import { useInput } from "../hooks/useInput";
import { Error } from "../error/Error";
import { useRequestAuth } from "../hooks/useRequestAuth";
import styles from './styles/Form.module.css';




const SignIn = () => {

    const { sign_in } = useAuth()
    const [showErrorValidate, setShowErrorValidate] = React.useState(false)
    const { isLoading, errorResponse, sendRequest } = useRequestAuth()


    const email = useInput('', {
        pattern: /.+@.+\..+/i,
        isEmpty: true
    })
    const password = useInput('', {
        pattern: /.{5,}/,
        isEmpty: true
    })



    const handleRequest = () => {
        if (email.validateError || password.validateError) {
            return setShowErrorValidate(true)
        }
        setShowErrorValidate(false)
        sendRequest(sign_in, '/', email.value, password.value)

    }

    return (
        <>
            {isLoading && <LinearLoader />}
            <Typography className={styles.title} variant="h4">Log In</Typography>
            {
                showErrorValidate &&
                <Error error={showErrorValidate}>
                    {'Email must be valid and password must be at least 5 characters long'}
                </Error>
            }
            {!!errorResponse && <Error error={!!errorResponse}>{errorResponse}</Error>}
            <form className={styles.form}>
                <FormInput
                    onChange={email.onChange}
                    value={email.value}
                    type='email'
                    label='Email adress'
                    variant="filled"
                    size='small'
                />
                <FormInput
                    onChange={password.onChange}
                    value={password.value}
                    type='password'
                    label='Password'
                    variant='filled'
                    size='small'
                />
                <FormButton
                    onClick={handleRequest}
                    disabled={email.isEmpty || password.isEmpty}
                    variant='outlined'
                >
                    Sign In
                </FormButton>
            </form>
            <div className={styles.form__links}>
                <Link to='/register/forgotpassword'>Forgot Password?</Link>
                <Typography variant="span">
                    Need an account?<Link to='/register/signup'> Sign Up</Link>
                </Typography>

            </div>
        </>
    )
}

export default SignIn;