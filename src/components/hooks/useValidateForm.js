import React from "react"

const useValidateForm = (value, settings) => {

    const [isEmpty, setEmpty] = React.useState(true)
    const [validateError, setValidateError] = React.useState(false)


    React.useEffect(() => {
        for (const property in settings) {
            switch (property) {
                case 'pattern':
                    settings[property].test(String(value).toLowerCase())
                        ? setValidateError(false)
                        : setValidateError(true)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }
    }, [value])


    return {
        validateError,
        isEmpty,
    }


}


export { useValidateForm }