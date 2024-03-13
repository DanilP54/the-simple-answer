import React from "react";
import { TextField, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { grey } from "@mui/material/colors";
import { useRequestQuestions } from "../../hooks/useRequestQuestions";
import styles from './styles/Input.module.css';


const Input = ({ getResultAnswer }) => {

    const {
        question,
        isError,
        isLoading,
        getRandomQuestion,
        currentUser,
        setQuestion
    } = useRequestQuestions()

    const inputRef = React.useRef(null)
    const input = inputRef.current?.querySelector('input')
    
    const onChangeInput = (e) => {
        if (currentUser || isError) setQuestion(e.target.value)
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
                    onClick={() => getResultAnswer(question, input)}
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