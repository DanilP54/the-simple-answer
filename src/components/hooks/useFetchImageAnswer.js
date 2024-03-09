import React from "react"

const useFetchImageAnswer = () => {

    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState('')
    const [isLoading, setLoading] = React.useState(false)

    const getResultAnswer = async (questionValue, ref) => {
        if (questionValue) {
            try {
                setLoading(true)
                const response = await fetch('https://yesno.wtf/api')
                if (!response.ok) {
                    throw new Error(response.status)
                }
                const data = await response.json()
                setData(data)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        } else if (ref) {
            ref.focus()
        } 
    }

    return {
        data,
        isLoading,
        error,
        getResultAnswer
    }
}



export { useFetchImageAnswer }