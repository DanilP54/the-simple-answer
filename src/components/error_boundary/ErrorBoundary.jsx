import { useRouteError } from "react-router-dom"
import styles from './ErrorBoundary.module.css'

const ErrorBoundary = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className={styles.error}>
            <div className={styles.error__box}>
                <h1 className={styles.title}>Oops!</h1>
                <p className={styles.subtitle}>Something went wrong. We are working on fixing the error, please try again later...</p>
            </div>
        </div>
    )
}

export { ErrorBoundary }