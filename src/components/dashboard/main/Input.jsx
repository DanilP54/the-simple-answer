import React from "react";
import { TextField, IconButton, Button } from "@mui/material";
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
                    color="primary"
                    fullWidth
                    multiline={!currentUser}
                    tabIndex={0}
                    sx={{
                        '& .MuiInput-root': {
                            color: grey[400],
                            height: '100%',
                            fontSize: 'clamp(13px, 2vw, 15px)',
                            
                        }  
                    }}
                />
                <IconButton
                    sx={{ borderRadius: 0, }}
                    onClick={() => getResultAnswer(question, inputRef.current.querySelector('textarea'))}
                    size="small"
                    color="warning"
                >   
                    <SendIcon color="primary" />
                </IconButton>

            </div>
            {
                !isError &&
                <Button
                    onClick={getRandomQuestion}
                    color="primary"
                    variant="contained"
                    size="small"
                    sx={{
                        // backgroundColor: 'rgba(237, 108, 2, 0.04)',
                        '& .MuiLoadingButton-loadingIndicator': {
                            color: grey[500],
                        },
                        display: 'block',
                        width: '200px',
                        borderRadius: '0px',
                        fontFamily: "Honk, system-ui",
                        fontSize: '1rem'
                    }}
                >
                    Random question
                </Button>
            }

        </div >
    )
}


export default Input;