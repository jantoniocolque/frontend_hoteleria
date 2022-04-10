import React from "react";
import '@testing-library/jest-dom/extend-expect';
import Recomendations from '../Recomendations';
import {render, screen} from '@testing-library/react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import products from './products.json';
import Card from "../Recomendations/Card";
import ContentLoader from "react-content-loader";
import { BrowserRouter, Route, Routes} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe('recommendations with data', () => {
    
    let recommendations;

    beforeEach (() => {
        recommendations = shallow(<Recomendations products={products}/>);
    });

    it ('render recommendations', () => {
        expect(recommendations).not.toBeNull();
    });

    it ('Do not render skeleton', () => {
        expect(recommendations.containsMatchingElement(<ContentLoader/>)).toBeFalsy();
    });

    it ('How many products', () => {
        expect(recommendations.find(Card).length).toEqual(products.length);
    });

    it ('Title of recommendations', () => {
        expect(recommendations.contains('Recomendaciones')).toBeTruthy();
    });

    it ("Verification cards", () => {
        
        const recommendation = mount(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element = {<Recomendations products={products}/>}> </Route>
            </Routes>
        </BrowserRouter>);
        expect(recommendation.find('div.card-listo__info__amenities')).toBeTruthy();
        expect(recommendation.find('div.card-list__info__description')).toBeTruthy();
        expect(recommendation.find('div.card-list__info__button')).toBeTruthy();
        expect(recommendation.find('div.card-list__info__title')).toBeTruthy();
        expect(recommendation.find('div.card-list__info__score')).toBeTruthy();
        expect(recommendation.find('div.card-list__info__category')).toBeTruthy();
        expect(recommendation.find('div.card-list__image__jpg')).toBeTruthy();
        expect(recommendation.find('button').first().text()).toEqual('Ver más');
    })

});

describe('recommendations without data', () => {
    
    let recommendations;
    let productsEmpty =[];

    beforeEach (() => {
        recommendations = shallow(<Recomendations products={productsEmpty} isLoadingProducts={true}/>);
    });

    it ('render recommendations', () => {
        expect(recommendations).not.toBeNull();
    });

    it ('Render skeleton', () => {
        expect(recommendations.containsMatchingElement(
            <ContentLoader width={700} height={300} viewBox="0 0 700 300" backgroundColor="#f5f5f5" foregroundColor="#dbdbdb">
            <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
            <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
            <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
            <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
            <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
            <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
            <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
            <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
            <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
            <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
            <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
            <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
            <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
          </ContentLoader>
        )).toBeTruthy();
    });

    it ('Do not render products', () => {
        expect(recommendations.containsMatchingElement(<Card/>)).toBeFalsy();
    });

    it ('render recommendations with loading products', () => {
        recommendations = shallow(<Recomendations products={productsEmpty} isLoadingProducts={false}/>);
        expect(recommendations).not.toBeNull();
    });
    it ('message to empty products', () => {
        recommendations = render(<Recomendations products={productsEmpty} isLoadingProducts={false}/>);
        const h2 = screen.getAllByText('Por el momento no contamos con establecimientos con esa caracteristica');
        expect(h2).toBeTruthy();
    });
    it ('Title', () => {
        expect(recommendations.contains('Recomendaciones')).toBeTruthy();
    });
});