import {useState} from "react";

const useSetFormValues = (fields) => {
    const [form, setForm] = useState({...fields})

    return {form, setForm}
}

const useSetErrors = (currentErrors) => {
    const [errors, setErrors] = useState({currentErrors})

    return {errors, setErrors}
}


export {useSetFormValues, useSetErrors}