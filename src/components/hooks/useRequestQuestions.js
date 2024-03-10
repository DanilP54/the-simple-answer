import React from "react"
import { useAuth } from "../context/AuthContext"
import { useQuery } from "@tanstack/react-query"

const getQuestinsList = async () => {
    let response = await fetch('https://auth-test-e4a35-default-rtdb.europe-west1.firebasedatabase.app/data.json')
    return response.json()
}


const useRequestQuestions = () => {

    const { currentUser } = useAuth()

    const [question, setQuestion] = React.useState('')
    

    const { data, isLoading, isError } = useQuery({
        queryKey: ['questionList'],
        queryFn: getQuestinsList,
        staleTime: 60000,
    })
    

    const getRandomQuestion = () => {
        let qst = data.questionList[Math.floor(Math.random() * data.questionList.length)]
        setQuestion(qst)
    }

    React.useEffect(() => {
        if(data && !currentUser) {
            getRandomQuestion()
        }
    }, [data, currentUser])

    return {
        question,
        isError,
        isLoading,
        getRandomQuestion,
        currentUser,
        setQuestion
    }
}

export { useRequestQuestions }