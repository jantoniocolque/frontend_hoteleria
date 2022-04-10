import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, queryByAttribute} from '@testing-library/react';
import FormRegister from '../FormRegister';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


Enzyme.configure({ adapter: new Adapter() });

describe('register-tests', () => {
    let register;
    const getById = queryByAttribute.bind(null, 'id');

    beforeEach (() => {
        register = render(<FormRegister/>);
    });

    it ('render', () => {
        expect(register).not.toBeNull();
    });

    it ('h2', () => {
        const h2 = getById(register.container, 'section-title');
        expect(h2).not.toBeNull();
    });

    it ('button register', () => {
        register = mount(<FormRegister/>);
        expect(register.find('button').text()).toEqual('Crear cuenta');
    });

    it ('validate blank form', () => {
        getById(register.container, 'button-register').click();
        const spans = screen.getAllByText('Este campo es obligatorio');
        expect(spans).toHaveLength(6);
    });
})