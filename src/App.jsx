import React from 'react';
import './App.css'
import HomePage from './pages/HomePage';
import { AuthProvider } from './components/context/AuthContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LinearLoader } from './components/ui/LinearLoader';

const queryClient = new QueryClient()

const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))
const SignIn = React.lazy(() => import('./components/register/SignIn'))
const SignUp = React.lazy(() => import('./components/register/SignUp'))
const ForgotPassword = React.lazy(() => import('./components/register/ForgotPassword'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/register',
        element: <React.Suspense fallback={<LinearLoader />}>
                    <RegisterPage />
                 </React.Suspense>,
        children: [
            {
                index: true,
                element: <SignIn />,

            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'forgotpassword',
                element: <ForgotPassword />
            }
        ]
    }
])


function App() {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    )
}

export default App
