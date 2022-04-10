import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "./useLocalStorage";
import SessionContextProvider from '../context/sessionContext.js';
import jwtDecode from "jwt-decode";
export default function useFormRegister(objectValues, callback, validate) {
    const { user, setToken } = useContext(SessionContextProvider);
    const history = useNavigate();
    const [values, setValues] = useState({ ...objectValues })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            fetch('http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/user/register', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    name: values.name,
                    surname: values.surname,
                    email: values.email,
                    password: values.password,
                    role: {
                        roleId: 2
                    }
                })
            })
                .then(res => {
                    if (res.status >= 400 && res.status < 500) {
                        return Promise.reject(new Error("Este email ya pertenece a otro usuario"))
                    }
                    if (res.status >= 500) {
                        return Promise.reject(new Error("Lamentablemente no ha podido registrarse. Porfavor intentelo mas tarde"))
                    }
                    return res.json()
                })
                .then(data => {
                    // if (data.message) {
                    //     setErrors({ auth: data.message });
                    //     setIsSubmitting(false);
                    // } else {
                    callback();
                    setToken(data.token)
                    history("/");
                    // }
                }).catch(error => setErrors({ auth: error.message }))
        }
    })
    return { handleChange, values, handleSubmit, errors }
}
