import React from 'react';
import moment from 'moment-timezone';
import { shallow, mount } from 'enzyme';
import TimeDisplay from '../components/TimeDisplay.jsx';
import AnalogClock from '../components/AnalogClock.jsx';
import {expect} from 'chai';

describe('<TimeDisplay />', () => {
    const idx = 4;
    const offset = 'UTC';
    const time = moment.utc('2016-01-01 12:23').format();

    it('should contain analog clock', () => {
        const tdisp = shallow(<TimeDisplay
            index = {idx}
            offset={offset}
            time={time}
            />);
        const analog = tdisp.find(AnalogClock);
        expect(analog).to.have.length.of(1);
    }),
        it('should contain two inputs for hour and minutes', () => {
            const tdisp = shallow(<TimeDisplay
                index = {idx}
                offset={offset}
                time={time}
                />);
            const inputs = tdisp.find("input");
            expect(inputs).to.have.length.of(2);
        }),
        it('should have inputs initialized to correct values', () => {
            const tdisp = shallow(<TimeDisplay
                index = {idx}
                offset={offset}
                time={time}
                />);
            const inputs = tdisp.find("input");
            expect(inputs).to.have.length.of(2);
            let hourInput = inputs.at(0);
            let minutesInput = inputs.at(1);
            expect(hourInput.props().value).to.be.equal(12);
            expect(minutesInput.props().value).to.be.equal(23);
        }),
        it('should have inputs capped by correct values', () => {
            const tdisp = shallow(<TimeDisplay
                index = {idx}
                offset={offset}
                time={time}
                />);
            const inputs = tdisp.find("input");
            expect(inputs).to.have.length.of(2);
            let hourInput = inputs.at(0);
            let minutesInput = inputs.at(1);
            expect(hourInput.props().min).to.be.equal('0');
            expect(hourInput.props().max).to.be.equal('23');
            expect(minutesInput.props().min).to.be.equal('0');
            expect(minutesInput.props().max).to.be.equal('59');
        })
});