import React from "react";
import { TextField, IconButton, styled, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { grey } from "@mui/material/colors";
import { useFetchQuestionsList } from "../../hooks/useFetchQuestionsList";

const InputForQuestion = ({ getResultAnswer }) => {

    const {
        randomQuestion,
        isError,
        isLoading,
        getNextRandomQuestion,
        currentUser,
        setRandomQuestion 
    } = useFetchQuestionsList()

    const inputRef = React.useRef(null)
    
    const onChangeInput = (e) => {
        if (currentUser) setRandomQuestion(e.target.value)
    }

    return (
        <div style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: '10px',
                width: '55%',
            }}>
                <TextField
                    ref={inputRef}
                    type="text"
                    onChange={onChangeInput}
                    placeholder="Enter your question..."
                    value={randomQuestion ? randomQuestion : undefined}
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
                    sx={{
                        borderRadius: 0,
                    }}
                    onClick={() => getResultAnswer(randomQuestion, inputRef.current.querySelector('textarea'))}
                >
                    <SendIcon color="warning" />
                </IconButton>

            </div>
            <Button
                onClick={getNextRandomQuestion}
                color="warning"
                variant="text"
                style={{
                    display: 'block',
                    width: '200px',
                    borderRadius: '0px'
                }}
                sx={{
                    backgroundColor: 'rgba(237, 108, 2, 0.04)',
                    '& .MuiLoadingButton-loadingIndicator': {
                        color: grey[500],
                    }
                }}
            >
                Random question
            </Button>
        </div >
    )
}


export default InputForQuestion;