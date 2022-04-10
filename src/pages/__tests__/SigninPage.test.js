import React from "react";
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SigninPage from '../SigninPage';
import FormRegister from '../../components/FormRegister';

Enzyme.configure({ adapter: new Adapter() });

describe ('render login', () => {
    let signin;

    beforeEach (() => {
        signin = shallow(<SigninPage/>);
    });

    it ('render', () => {
        expect(signin).toBeTruthy();
    });

    it ('Has content as register form', () => {
        expect(signin.containsMatchingElement(<FormRegister />)).toEqual(true);
    });
    
})