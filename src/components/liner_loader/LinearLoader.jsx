import { LinearProgress } from "@mui/material";
import styles from './LinerLoader.module.css';

const LinearLoader = () => {
    return (
        <div className={styles.liner__loader}>
            <LinearProgress />
        </div >
    )
}

export { LinearLoader }