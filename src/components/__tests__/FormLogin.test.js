import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, queryByAttribute} from '@testing-library/react';
import FormLogin from '../FormLogin';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


Enzyme.configure({ adapter: new Adapter() });

describe('login-tests', () => {
    
    let login;
    const getById = queryByAttribute.bind(null, 'id');

    beforeEach (() => {
        login = render(<FormLogin/>);
    });

    it ('render', () => {
        expect(login).not.toBeNull();
    });

    it ('h2', () => {
        const h2 = screen.getByText('Iniciar sesión');
        expect(h2).not.toBeNull();
    });

    it ('button login', () => {
        login = mount(<FormLogin/>);
        expect(login.find('button').text()).toEqual('Ingresar');
    });

    it ('validate blank form', () => {
        getById(login.container, 'button-login').click();
        const spans = screen.getAllByText('Este campo es obligatorio');
        expect(spans).toHaveLength(2);
    });
})