import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// TODO import correct components if product page render these
/* import Policy from '../../components/Policy';
import HeaderProduct from '../../components/HeaderProduct'; */

Enzyme.configure({ adapter: new Adapter() });

describe('product test', () => {
    it('', () => {
        
    });
    // TODO use correct components

    /* it ('Has header detail product', () => {
        expect(product.containsMatchingElement(<HeaderProduct />)).toEqual(true);
    }); */

    /* it ('Has policies', () => {
        expect(product.containsMatchingElement(<Policy />)).toEqual(true);
    }); */
})