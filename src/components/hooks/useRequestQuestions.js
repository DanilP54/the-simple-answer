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
    const choosenQuestion = React.useRef([])
    console.log(choosenQuestion.current)

    const { data, isLoading, isError } = useQuery({
        queryKey: ['questionList'],
        queryFn: getQuestinsList,
        staleTime: 60000,
        retry: false
    })

    const getRandomQuestion = () => {
        let randomIndex;

        if (data.questionList?.length === choosenQuestion.current?.length) {
            choosenQuestion.current.length = 0
        }

        do {
            randomIndex = Math.floor(Math.random() * data.questionList.length)
        } while (choosenQuestion.current.includes(data.questionList[randomIndex]))

        choosenQuestion.current.push(data.questionList[randomIndex])
        setQuestion(data.questionList[randomIndex])


    }

    React.useEffect(() => {
        if (data && !currentUser) {
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