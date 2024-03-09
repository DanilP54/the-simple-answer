import React from "react"
import { useValidateForm } from "./useValidateForm"

const useInput = (initialValue, settings) => {

    const [value, setValue] = React.useState(initialValue)
    const valid = useValidateForm(value, settings)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange,
        ...valid
    }
}

export { useInput }