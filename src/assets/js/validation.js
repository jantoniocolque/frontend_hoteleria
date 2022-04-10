let emailExpr = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
let nameExpr = /^[a-zA-ZÀ-ÿ\u0027\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u0027\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u0027\u00f1\u00d1]+$/
let passExpr = /^[a-z0-9\u002e\u002a\u002c]+$/i

function removeClass(id) {
    let element = document.getElementById(id);
    element.classList.remove('validation-errors');
}

function addClass(id) {
    let element = document.getElementById(id);
    element.classList.add('validation-errors');
}

function validateEmail(field, errors) {
    if(!field){
        errors.email="Este campo es obligatorio";
    } else if(!emailExpr.test(field)){
        errors.email="Correo electrónico inválido";
    }
    return errors;
}

function validatePassword(field, errors) {
    if(!field){
        errors.password="Este campo es obligatorio";
    } else if(field.length< 6){
        errors.password="Mínimo 6 caracteres"
    } else if(!passExpr.test(field)){
        errors.password = "Válido letras números puntos comas asteriscos"
    }
    return errors;
}

function validateSurname(field, errors) {
    if(!field){
        errors.surname="Este campo es obligatorio";
    }else if(!nameExpr.test(field) ) {
        errors.surname="Letras sin caracteres especiales";
    }
    return errors;
}

function validateName(field, errors) {
    if(!field){
        errors.name="Este campo es obligatorio";
    }else if(!nameExpr.test(field) ) {
        errors.name="Letras sin caracteres especiales";
    }
    return errors;
}

function validateRepeatEmail(field, field2, errors) {
    if(!field){
        errors.repeatEmail="Este campo es obligatorio";
    }else if(field !== field2) {
        errors.repeatEmail="El correo electrónico no coincide con el original"
    }
    return errors;
}

function validateRepeatPassword(field, field2, errors) {
    if(!field){
        errors.repeatPassword="Este campo es obligatorio";
    }else if(field !== field2) {
        errors.repeatPassword = "La contraseña no coincide con la original"
    }
    return errors;
}

function execFn(fnName, ctx) 
{
  var args = Array.prototype.slice.call(arguments, 2);
  return ctx[fnName].apply(ctx, args);
}

const context = {
    'email': validateEmail,
    'password': validatePassword,
    'name': validateName,
    'surname': validateSurname,
    'repeatEmail': validateRepeatEmail,
    'repeatPassword': validateRepeatPassword
}

function changeClass(values, errors) {
    Object.keys(values).forEach(field => {
        if (Object.keys(errors).some(error => error === field))
            addClass(field)
        else
            removeClass(field)
    })
}

export default function validateRegister(values) {
    let errors={}

    Object.entries(values).forEach(([key, value]) => {
        if (key === 'repeatEmail') {
            errors = execFn(key, context, value, values.email, errors)
        } else if (key === 'repeatPassword') {
            errors = execFn(key, context, value, values.password, errors)
        } else {
            errors = execFn(key, context, value, errors)
        }
    });
    changeClass(values,errors);
    return errors;
}
