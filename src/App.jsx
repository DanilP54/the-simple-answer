import React from 'react';
import HomePage from './pages/HomePage';
import { AuthProvider } from './components/context/AuthContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LinearLoader } from './components/liner_loader/LinearLoader';
import { ErrorBoundary } from './components/error_boundary/ErrorBoundary';

const queryClient = new QueryClient()

const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))
const SignIn = React.lazy(() => import('./components/register/SignIn'))
const SignUp = React.lazy(() => import('./components/register/SignUp'))
const ForgotPassword = React.lazy(() => import('./components/register/ForgotPassword'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorBoundary />,
    },
    {
        path: '/register',
        element: <React.Suspense fallback={<LinearLoader />}><RegisterPage /></React.Suspense>,
        errorElement: <ErrorBoundary />,
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
