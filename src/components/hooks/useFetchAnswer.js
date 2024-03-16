import React from "react"

const useFetchAnswer = () => {

    const [data, setData] = React.useState(null)
    const [isError, setError] = React.useState('')
    const [isLoading, setLoading] = React.useState(false)

    const getResultAnswer = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://yesno.wtf/api')
                const data = await response.json()
                setData(data)
            }
            catch (error) {
                setError('Unfortunately, an error occurred while loading data from the server.We are already working to resolve it.Please try refreshing the page later.')
            }
            finally {
                setLoading(false)
            }
        } 

    return {
        data,
        isLoading,
        isError,
        getResultAnswer
    }
}



export { useFetchAnswer }