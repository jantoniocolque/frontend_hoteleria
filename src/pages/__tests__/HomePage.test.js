import React from "react";
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from '../Home';
import Content from '../../components/Content'
import { SearchForm } from "../../components/SearchForm";

Enzyme.configure({ adapter: new Adapter() });

describe ('render home', () => {
    let home;

    beforeEach (() => {
        home = shallow(<Home/>);
    });

    it ('render', () => {
        expect(home).toBeTruthy();
    });

    it ('Has content', () => {
        expect(home.containsMatchingElement(<Content />)).toBeTruthy();
    });

    it ('Has searcher', () => {
        expect(home.containsMatchingElement(<SearchForm />)).toBeTruthy();
    });
    
})