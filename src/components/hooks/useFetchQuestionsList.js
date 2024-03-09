import React from "react"
import { useAuth } from "../context/AuthContext"
import { useQuery } from "@tanstack/react-query"

async function getQuestinsList() {
    const response = await fetch('https://auth-test-e4a35-default-rtdb.europe-west1.firebasedatabase.app/data.json')
    if (!response.ok) {
        throw new Error('Any Error')
    }
    return response.json()
}


const useFetchQuestionsList = () => {

    const { currentUser } = useAuth()

    const [randomQuestion, setRandomQuestion] = React.useState('')
    

    const { data, isLoading, isError } = useQuery({
        queryKey: ['questionList'],
        queryFn: getQuestinsList,
        staleTime: 60000,
    })
    

    const getNextRandomQuestion = () => {
        let qst = data.questionList[Math.floor(Math.random() * data.questionList.length)]
        setRandomQuestion(qst)
    }

    React.useEffect(() => {
        if(data && !currentUser) {
            getNextRandomQuestion()
        }
    }, [data, currentUser])

    return {
        randomQuestion,
        isError,
        isLoading,
        getNextRandomQuestion,
        currentUser,
        setRandomQuestion
    }
}

export { useFetchQuestionsList }