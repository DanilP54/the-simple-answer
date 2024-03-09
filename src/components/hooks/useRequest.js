import React from "react"
import { useNavigate } from "react-router-dom"

const useRequest = () => {
    
    const [successResetPasword , setResetPassword] = React.useState(false)
    const [isLoading, setLoading] = React.useState(false)
    const [errorResponse, setErrorResponse] = React.useState('')
    const navigate = useNavigate()

    const sendRequest = async (request, pathRedirect , ...options) => {
        setErrorResponse('')
        setLoading(true)
        try {
            await request(...options)
            if (pathRedirect === '/register') {
                return setResetPassword(true)   
            }
            navigate(pathRedirect)
        }
        catch (error) {
            const { message, code } = error
            setErrorResponse('Invalid password or email')
        }   
        finally {
            setLoading(false)
        }

    }

    return {
        errorResponse,
        isLoading,
        sendRequest,
        successResetPasword
    }

}

export { useRequest }