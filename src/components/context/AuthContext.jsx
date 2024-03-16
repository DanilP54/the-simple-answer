import React from "react"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";

import { LinearLoader } from "../liner_loader/LinearLoader";

const AuthContext = React.createContext()

const useAuth = () => {
    return React.useContext(AuthContext)
}


const AuthProvider = ({ children }) => {
    const auth = getAuth()
    const [currentUser, setCurrentUser] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true)

    function sign_up(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function sign_in(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function reset_password(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function log_out() {
        return signOut(auth)
    }


    const value = {
        currentUser,
        sign_up,
        sign_in,
        reset_password,
        log_out,
    }

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {
                isLoading
                    ? <LinearLoader />
                    : children
            }
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }