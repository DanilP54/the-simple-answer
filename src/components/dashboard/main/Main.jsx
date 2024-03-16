import Answer from "./Answer";
import Input from "./Input";
import { useFetchAnswer } from "../../hooks/useFetchAnswer";
import styles from './styles/Main.module.css';



const Main = () => {

    const { data, isLoading, isError, getResultAnswer } = useFetchAnswer()

    return (
        <main className={styles.main}>
            <div className={styles.content__wrapper}>
                <Answer data={data} isLoading={isLoading} isError={isError} />
                <Input getResultAnswer={getResultAnswer} loadingAnswer={isLoading} />
            </div>
        </main>
    )
}

export default Main;