import React from 'react';
import HomePage from './pages/HomePage';
import {AuthProvider} from './components/context/AuthContext';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {LinearLoader} from './components/liner_loader/LinearLoader';
import {ErrorBoundary} from './components/error_boundary/ErrorBoundary';


const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))
const SignIn = React.lazy(() => import('./components/register/SignIn'))
const SignUp = React.lazy(() => import('./components/register/SignUp'))
const ForgotPassword = React.lazy(() => import('./components/register/ForgotPassword'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <ErrorBoundary/>,
    },
    {
        path: '/register',
        element: <React.Suspense fallback={<LinearLoader/>}><RegisterPage/></React.Suspense>,
        errorElement: <ErrorBoundary/>,
        children: [
            {
                index: true,
                element: <SignIn/>,

            },
            {
                path: 'signup',
                element: <SignUp/>
            },
            {
                path: 'forgotpassword',
                element: <ForgotPassword/>
            }
        ]
    }
], {
    basename: import.meta.env.BASE_URL
});

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    )
}

export default App;
