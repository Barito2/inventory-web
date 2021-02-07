const CodeValidation = (values) => {
    const errors = {}

    if (!values.code || values.name === "") {
        errors.name = "Code not be null"
    }

    if (!values.description || values.age === "") {
        errors.age = "Description not be null"
    }

    return errors
}

export default CodeValidation