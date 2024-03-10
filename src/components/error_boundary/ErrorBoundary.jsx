import { useRouteError } from "react-router-dom"

const ErrorBoundary = () => {
    const error = useRouteError()
    console.log(error);
    return <h1>Ошибка</h1>
}

export { ErrorBoundary }