import React from 'react';
import moment from 'moment-timezone';
import { shallow, mount } from 'enzyme';
import TimeDisplay from '../components/TimeDisplay.jsx';
import App from '../components/App.jsx';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('<App />', () => {
    const time = moment.utc('2016-01-01 12:23').format();
    it('should contain two timezones by default', () => {
        const app = shallow(<App utctime={time}/>);
        const analog = app.find(TimeDisplay);
        expect(analog).to.have.length.of(2);
    })
    it('should have two offsets in state by default', () => {
        const app = shallow(<App utctime={time}/>);
        const inputs = app.state().offsets;
        expect(inputs).to.have.length.of(2);
    })
    it('should add new TimeDisplay after adding new item to offset', () => {
        const app = shallow(<App utctime={time}/>);
        const before = app.find(TimeDisplay);
        expect(before).to.have.length.of(2);
        let newOffsets = app.state().offsets.slice();
        newOffsets.push('GMT');
        app.setState({ offsets: newOffsets })
        const after = app.find(TimeDisplay);
        expect(after).to.have.length.of(3);
    })
    it('should add new TimeDisplay after clicking add button', () => {
        const app = mount(<App utctime={time}/>);
        const before = app.find(TimeDisplay);
        expect(before).to.have.length.of(2);
        app.find('button').simulate('click');
        const after = app.find(TimeDisplay);
        expect(after).to.have.length.of(3);
    })
    it('should remove TimeDisplay after removing item from offset', () => {
        const app = shallow(<App utctime={time}/>);
        const before = app.find(TimeDisplay);
        expect(before).to.have.length.of(2);
        let newOffsets = app.state().offsets.slice();
        newOffsets.pop();
        app.setState({ offsets: newOffsets })
        const after = app.find(TimeDisplay);
        expect(after).to.have.length.of(1);
    })
    it('should remove TimeDisplay after clicking on x in TimeDisplay', () => {
        const app = mount(<App utctime={time}/>);
        const before = app.find(TimeDisplay);
        expect(before).to.have.length.of(2);
        app.find('a').first().
        simulate('click');
        const after = app.find(TimeDisplay);
        expect(after).to.have.length.of(1);
    })
});