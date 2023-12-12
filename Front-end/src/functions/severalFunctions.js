import validation from "./validation"

const onChange = (event, setUser, user, setErrors) => {
    setUser({
        ...user,
        [event.target.name]: event.target.value
    })
    setErrors(validation({
        ...user,
        [event.target.name]: event.target.value
    }))
}

export {
    onChange
}