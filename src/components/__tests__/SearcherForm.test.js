import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SearcherForm from '../SearchForm';
import Searcher from '../SearchForm/Searcher';
import Location from '../SearchForm/Location';
import Calendar from '../SearchForm/Calendar';

Enzyme.configure({ adapter: new Adapter() });

describe('Seacher', () => {
    let searcher;

    beforeEach(() => {
        searcher = shallow(<Searcher/>);
    });

    it('render', () => {
        let seacherForm = shallow(<SearcherForm/>);
        expect(searcher).toBeTruthy();
        expect(seacherForm).toBeTruthy();
    });

    it('Contain location searcher', () => {
        expect(searcher.containsMatchingElement(<Location/>)).toBeTruthy();
    });

    it('Contain calendar searcher', () => {
        expect(searcher.containsMatchingElement(<Calendar/>)).toBeTruthy();
    });

    it('Contain main title', () => {
        expect(searcher.find('h1').text()).toEqual('Busca ofertas en hoteles, cabañas y mucho más!');
    })
});