import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FormButton } from "./FormButton";
import { FormInput } from "./FormInput";
import { LinearLoader } from "../liner_loader/LinearLoader";
import { useInput } from "../hooks/useInput";
import { Error } from "../error/Error";
import { useFetchAuth } from "../hooks/useFetchAuth";
import styles from './styles/Form.module.css';


const SignUp = () => {

    const { sign_up } = useAuth()
    const [showErrorValidate, setShowErrorValidate] = React.useState(false)
    const [showErrorConfirumPassword, setShowErrorConfirumPassword] = React.useState(false)
    const { isLoading, sendRequest, errorResponse } = useFetchAuth()

    const email = useInput('', {
        pattern: /.+@.+\..+/i,
        isEmpty: true
    })
    const password = useInput('', {
        pattern: /.{5,}/,
        isEmpty: true
    })
    const confirumPassword = useInput('', {
        isEmpty: true
    })

    const handleRequest = () => {
        if (email.validateError || password.validateError) {
            return setShowErrorValidate(true)
        }
        if (password.value !== confirumPassword.value) {
            setShowErrorValidate(false)
            return setShowErrorConfirumPassword(true)
        }
        setShowErrorValidate(false)
        setShowErrorConfirumPassword(false)
        sendRequest(sign_up, '/', email.value, password.value)
    }

    return (
        <>
            {isLoading && <LinearLoader />}
            <Typography variant="h4" className={styles.title}>Sign Up</Typography>
            {
                showErrorValidate &&
                <Error>
                    {'Email must be valid and password must be at least 5 characters long'}
                </Error>
            }
            {
                showErrorConfirumPassword &&
                <Error>
                    {'Password does not match confirmation'}
                </Error>
            }
            {
                !!errorResponse &&
                <Error>
                    {errorResponse}
                </Error>
            }
            <form
                className={styles.form}>
                <FormInput
                    onChange={email.onChange}
                    value={email.value}
                    type="email"
                    name="email"
                    label='Email adress'
                    size='small'
                    variant='filled'
                />
                <FormInput
                    onChange={password.onChange}
                    value={password.value}
                    type="password"
                    name="password"
                    label='Password'
                    size='small'
                    variant='filled'
                />
                <FormInput
                    onChange={confirumPassword.onChange}
                    value={confirumPassword.value}
                    type="password"
                    name="password"
                    label='Confirum Password'
                    size='small'
                    variant='filled'
                />
                <FormButton
                    onClick={handleRequest}
                    disabled={email.isEmpty || password.isEmpty || confirumPassword.isEmpty}
                    variant='outlined'
                >
                    Sign Up
                </FormButton>
            </form>
            <div className={styles.form__links}>
                <Typography variant="span">
                    Already have an account?<Link to='/register'> Log In</Link>
                </Typography>
            </div>
        </>
    )
}

export default SignUp;