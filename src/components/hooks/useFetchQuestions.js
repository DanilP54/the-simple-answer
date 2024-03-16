import { useQuery } from "@tanstack/react-query"

const FETCH_URL = 'https://auth-test-e4a35-default-rtdb.europe-west1.firebasedatabase.app/data.json'

const fetchQuestinsList = async () => {
    const response = await fetch(FETCH_URL)
    return response.json()
}


export const useFetchQuestions = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['questionList'],
        queryFn: fetchQuestinsList,
        staleTime: 60000,
        retry: false
    })

    return {
        data,
        isError,
        isLoading,
    }
}

