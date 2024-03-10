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
        if (currentUser) setQuestion(e.target.value)
    }

    return (
        <div className={styles.input__wrapper}>
            <div className={styles.input__box}>
                <TextField
                    ref={inputRef}
                    type="text"
                    onChange={onChangeInput}
                    placeholder="Write your question..."
                    value={question}
                    variant='standard'
                    color="warning"
                    height={'100%'}
                    fullWidth
                    multiline={!currentUser}
                    tabIndex={0}
                    sx={{
                        '& .MuiInput-root': {
                            color: grey[400],
                            height: '100%',
                        },
                        textAlign: 'center',
                        fontSize: '13px',
                    }}
                />
                <IconButton
                    sx={{ borderRadius: 0, }}
                    onClick={() => getResultAnswer(question, inputRef.current.querySelector('textarea'))}
                >
                    <SendIcon color="warning" />
                </IconButton>

            </div>
            <Button
                onClick={getRandomQuestion}
                color="warning"
                variant="text"
                sx={{
                    backgroundColor: 'rgba(237, 108, 2, 0.04)',
                    '& .MuiLoadingButton-loadingIndicator': {
                        color: grey[500],
                    },
                    display: 'block',
                    width: '200px',
                    borderRadius: '0px'
                }}
            >
                Random question
            </Button>
        </div >
    )
}


export default Input;