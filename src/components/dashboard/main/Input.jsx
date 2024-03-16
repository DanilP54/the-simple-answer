import React from "react";
import { TextField, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { grey } from "@mui/material/colors";
import styles from './styles/Input.module.css';
import { useQuestions } from "../../context/QuestionsContext";
import { useAuth } from "../../context/AuthContext";


const Input = ({ getResultAnswer, loadingAnswer }) => {
    const { currentUser } = useAuth()
    const {
        question,
        isError,
        isLoading,
        setQuestion,
        getRandomQuestion
    } = useQuestions()

    const inputRef = React.useRef(null)

    const onChangeInput = (e) => {
        if (currentUser || isError) setQuestion(e.target.value)
    }

    const handleAnswer = () => {
        question
            ? getResultAnswer()
            : inputRef.current.querySelector('input').focus()
    }

    return (
        <div className={styles.input__wrapper}>
            <div className={styles.input__box}>
                <TextField
                    className={styles.input}
                    ref={inputRef}
                    type="text"
                    size="small"
                    onChange={onChangeInput}
                    placeholder={isLoading ? 'Loading...' : 'Write your question...'}
                    value={question}
                    variant='standard'
                    color="warning"
                    fullWidth
                    multiline={!currentUser}
                    tabIndex={0}
                    sx={{
                        '& .MuiInput-root': {
                            color: grey[100],
                            height: '100%',
                            fontSize: 'clamp(15px, 2vw, 17px)',
                            fontFamily: "Poiret One",

                        }
                    }}
                />
                <IconButton
                    sx={{ borderRadius: 0, }}
                    onClick={handleAnswer}
                    disabled={loadingAnswer}
                    size="small"
                    color="warning"
                >
                    <SendIcon sx={{
                        color: 'rgb(18, 135, 156)',
                    }} />
                </IconButton>

            </div>
            {
                !isError &&
                <button
                    type="button"
                    className={styles.button}
                    onClick={getRandomQuestion}
                >
                    RANDOM QUESTION
                </button>
            }
        </div >
    )
}


export default Input;