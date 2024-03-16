import React from "react"
import { useFetchQuestions } from "../hooks/useFetchQuestions"
import { useAuth } from "./AuthContext"


const QuestionsContext = React.createContext()


export const useQuestions = () => {
    return React.useContext(QuestionsContext)
}


const QuestionsProvider = ({ children }) => {
    
    const {currentUser} = useAuth()
    const [question, setQuestion] = React.useState('')
    const choosenQuestion = React.useRef(new Set())
  
    const { data, isError, isLoading } = useFetchQuestions()

    function getRandomQuestion() {
        let randomIndex;

        if (data?.questionList?.length === choosenQuestion.current.size) {
            choosenQuestion.clear()
        }

        do {
            randomIndex = Math.floor(Math.random() * data.questionList.length)
        } while (choosenQuestion.current.has(data.questionList[randomIndex]))

        choosenQuestion.current.add(data.questionList[randomIndex])
        setQuestion(data.questionList[randomIndex])
    }

    React.useEffect(() => {
        if(data && !currentUser) {
            getRandomQuestion()
        }
    }, [data, currentUser])

    const values = {
        question,
        getRandomQuestion,
        isError,
        isLoading,
        setQuestion,
    }

    return (
        <QuestionsContext.Provider value={values}>
            {children}
        </QuestionsContext.Provider>
    )
}

export default QuestionsProvider;