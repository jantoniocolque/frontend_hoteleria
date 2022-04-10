import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Footer from '../Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
    let footer;

    beforeEach(() => {
        footer = shallow(<Footer/>);
    });

    it('render', () => {
        expect(footer).toBeTruthy();
    });

    it('Social networks', () => {
        expect(footer.find('i')).toHaveLength(4);
    })
})