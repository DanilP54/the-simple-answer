import React from "react";
import { Stack, Typography, FormControlLabel, Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { yellow, grey, orange } from "@mui/material/colors";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { FormButton } from "./ui/FormButton";
import { FormInput } from "./ui/FormInput";
import { LinearLoader } from "../ui/LinearLoader";
import { useInput } from "../hooks/useInput";
import { Error } from "./Error";
import { useRequest } from "../hooks/useRequest";


const SignUp = () => {

    const { sign_up } = useAuth()
    const [showErrorValidate, setShowErrorValidate] = React.useState(false)
    const [showErrorConfirumPassword, setShowErrorConfirumPassword] = React.useState(false)
    const { isLoading, sendRequest, errorResponse } = useRequest()

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
            {
                isLoading && <LinearLoader />
            }
            <Typography
                variant="h4" sx={{ fontSize: '2.5rem', color: yellow[900] }}
            >Sign Up</Typography>
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
            <Stack
                component='form'
                noValidate
                spacing={4}
                width='100%'
                style={{
                    marginTop: '3rem',
                }}
            >
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
                <div style={{ justifyItems: 'flex-start', marginTop: '0' }}>
                    <FormControlLabel sx={{
                        marginTop: '5px',
                        color: orange[900],
                        '& .MuiSvgIcon-root': {
                            fontSize: '20px',
                            color: orange[900]
                        }
                    }} control={<Checkbox />} label="Save password" />
                </div>
                <FormButton
                    onClick={handleRequest}
                    disabled={email.isEmpty || password.isEmpty || confirumPassword.isEmpty}
                    variant='outlined'
                >
                    Sign Up
                </FormButton>
            </Stack>
            <Typography sx={{ color: grey[500] }} variant="span">
                Already have an account?<Link style={{
                    color: grey[500],
                    textDecoration: 'none'
                }} to='/register'> Log In</Link>
            </Typography>
        </>
    )
}

export default SignUp;