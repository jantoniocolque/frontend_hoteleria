import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Content from '../Content';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import products from './products.json';
import categories from './categories.json';
import { CategoryCard } from '../CategoryCard';
import ContentLoader from 'react-content-loader';
import Recomendations from '../Recomendations';

Enzyme.configure({ adapter: new Adapter() });

describe ('Render content with data', () => { 
    let content;

    beforeEach (() => {
        let handleClickCategory = jest.fn();
        let isLoading = false;
        let isLoadingProducts = false;
        content = shallow(<Content handleClickCategory={handleClickCategory} products={products} categorys={categories} isLoading={isLoading} isLoadingProducts={isLoadingProducts}/>);
    });

    it ('Render categories', () => {        
        expect(content.containsMatchingElement(<CategoryCard/>)).toBeTruthy();
    });

    it ('Do not render skeleton', () => {
        expect(content.containsMatchingElement(<ContentLoader/>)).toBeFalsy();
    });

    it ('Render recommendations', () => {
        expect(content.containsMatchingElement(<Recomendations/>)).toBeTruthy();
    });

    it ('How many categories', () => {
        expect(content.find(CategoryCard).length).toEqual(categories.length);
    });

    it ('Title of search', () => {
        expect(content.contains('Buscar por tipo de alojamiento')).toBeTruthy();
    });

});

describe ('Simulate delay of API', () => { 
    let contentEmpty;

    beforeEach (() => {
        let clickCategory = jest.fn();
        let loading = true;
        let loadingProducts = true;
        let productEmpty = [];
        let categoryEmpty = [];
        contentEmpty = shallow(<Content handleClickCategory={clickCategory} products={productEmpty} categorys={categoryEmpty} isLoading={loading} isLoadingProducts={loadingProducts}/>);
    });

    it ('Do not render categories', () => {        
        expect(contentEmpty.containsMatchingElement(<CategoryCard/>)).toBeFalsy();
    });

    it ('Render skeleton', () => {
        expect(contentEmpty.containsMatchingElement(
            <ContentLoader
                width={330}
                height={280}
                viewBox="0 0 380 330"
                backgroundColor="#f0f0f0"
                foregroundColor="#dedede"
            >
                <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
            </ContentLoader>
        )).toBeTruthy();
    });

    it ('Render recommendations', () => {
        expect(contentEmpty.containsMatchingElement(<Recomendations/>)).toBeTruthy();
    });

});
