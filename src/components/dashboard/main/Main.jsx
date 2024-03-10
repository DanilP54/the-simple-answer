import Answer from "./Answer";
import Input from "./Input";
import { useRequestAnswer } from "../../hooks/useRequestAnswer";
import styles from './styles/Main.module.css';


const Main = () => {
    
    const {data, isLoading, error, getResultAnswer} = useRequestAnswer()

    return (
        <main className={styles.main}>
            <div className={styles.main__wrapper}>
                <Answer data={data} isLoading={isLoading} />
            </div>
            <Input getResultAnswer={getResultAnswer} />
        </main>
    )
}

export default Main;