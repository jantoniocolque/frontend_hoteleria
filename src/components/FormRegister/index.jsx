import useForm from '../../hooks/useFormRegister';
import validate from '../../assets/js/validation';
import "./FormRegister.css";

export default function FormRegister({ submitForm }) {

    const objectValues = {
        name: "",
        surname: "",
        email: "",
        repeatEmail: "",
        password: "",
        repeatPassword: ""
    }
    const { handleChange, values, handleSubmit, errors } = useForm(objectValues, submitForm, validate);
    return (
        <>
            <div className="form-register-container">
                <h2 id="section-title" className="section-title-register">Crear cuenta</h2>
                <form onSubmit={handleSubmit} className="form">
                    {errors.auth && <span className="form_error">{errors.auth}</span>}
                    <div className="form__body">
                        <div className="form__body--two">
                            <div className="form__body--two-label">
                                <label htmlFor="name" className="form__label">Nombre</label>
                                <input id="name" name="name" type="text" onChange={handleChange} className="form__input" />
                                {errors.name && <span className="form_error">{errors.name}</span>}
                            </div>
                            <div className="form__body--two-label">
                                <label htmlFor="surname" className="form__label">Apellido</label>
                                <input id="surname" name="surname" type="text" onChange={handleChange} className="form__input" />
                                {errors.surname && <span className="form_error">{errors.surname}</span>}
                            </div>
                        </div>
                        <div className="form__body--one">
                            <label htmlFor="email" className="form__label">Email</label>
                            <div>
                                <input id="email" name="email" type="email" onChange={handleChange} value={values.email} className="form__input" />
                            </div>
                            {errors.email && <span className="form_error">{errors.email}</span>}

                            <label htmlFor="repeatEmail" className="form__label">Repetir email</label>
                            <div>
                                <input id="repeatEmail" name="repeatEmail" type="email" onChange={handleChange} value={values.repeatEmail} className="form__input" />
                                {errors.repeatEmail && <span className="form_error">{errors.repeatEmail}</span>}
                            </div>

                            <label htmlFor="password" className="form__label">Contraseña</label>

                            <div><input id="password" name="password" type="password" onChange={handleChange} value={values.password} className="form__input" />
                                {errors.password && <span className="form_error">{errors.password}</span>}
                            </div>


                            <label htmlFor="repeatPassword" className="form__label">Repetir contraseña</label>
                            <div>
                                <input id="repeatPassword" name="repeatPassword" type="password" onChange={handleChange} value={values.repeatPassword} className="form__input" />
                                {errors.repeatPassword && <span className="form_error">{errors.repeatPassword}</span>}
                            </div>
                        </div>
                        <br />
                    </div>
                    <button type="submit" className="button-1 register-button animation-button-filled" id="button-register">Crear cuenta</button>
                    <p className="form__text">¿Ya tienes una cuenta? &nbsp; <a href="/login">Iniciar sesión</a></p>
                </form>
            </div>
        </>
    )
}