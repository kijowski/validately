import React from 'react';
import { shallow } from 'enzyme';
import AnalogClock from '../components/AnalogClock.jsx';
import {expect} from 'chai';

describe('<AnalogClock />', () => {
    it('should contain one minute hand', () => {
        const clock = shallow(<AnalogClock/>)
        const minuteHand = clock.find(".minute");
        expect(minuteHand).to.have.length.of(1);
    }),
    it('should contain one hour hand', () => {
        const clock = shallow(<AnalogClock/>)
        const hourHand = clock.find(".hour");
        expect(hourHand).to.have.length.of(1);
    })
});