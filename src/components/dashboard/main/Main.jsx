import Answer from "./Answer";
import Input from "./Input";
import { useRequestAnswer } from "../../hooks/useRequestAnswer";
import styles from './styles/Main.module.css';


const Main = () => {

    const { data, isLoading, isError, getResultAnswer } = useRequestAnswer()

    return (
        <main className={styles.main}>
            <div className={styles.content__wrapper}>
                <Answer data={data} isLoading={isLoading} isError={isError} />
                <Input getResultAnswer={getResultAnswer} />
            </div>
        </main>
    )
}

export default Main;