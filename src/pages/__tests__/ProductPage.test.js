import React from "react";
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductPage from '../ProductPage';
import Product from '../../components/Product';

Enzyme.configure({ adapter: new Adapter() });

describe ('render home', () => {
    let product;

    beforeEach (() => {
        product = shallow(<ProductPage/>);
    });

    it ('render', () => {
        expect(product).toBeTruthy();
    });

    it ('Has detail product', () => {
        expect(product.containsMatchingElement(<Product />)).toEqual(true);
    });
    
})