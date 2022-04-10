import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Booking from '../Booking';
import DetailBooking from '../Booking/DetailBooking';
import Schedule from '../Booking/ScheduleBooking';
import FormBooking from '../Booking/FormBooking';
import CalendarReserve from '../CalendarReserve';

Enzyme.configure({ adapter: new Adapter() });

describe('', () => {
    let booking;
    beforeEach(() => {
        booking = shallow(<Booking/>);
    })
    it ('render', () => {
        expect(booking).toBeTruthy();
    });
    it ('contain components', () => {
        expect(booking.containsMatchingElement(<DetailBooking/>)).toBeTruthy();
        expect(booking.containsMatchingElement(<Schedule/>)).toBeTruthy();
        expect(booking.containsMatchingElement(<FormBooking/>)).toBeTruthy();
        expect(booking.containsMatchingElement(<CalendarReserve/>)).toBeTruthy();
    });
    it ('titles', () => {
        expect(booking.find('h2').contains('Completá tus datos')).toBeTruthy();
        expect(booking.find('h2').contains('Seleccioná tu fecha de reserva')).toBeTruthy();
        expect(booking.find('h2').contains('Tu horario de llegada')).toBeTruthy();
    })
}) 