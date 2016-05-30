import React from 'react';
import moment from 'moment';
import AnalogClock from './AnalogClock.jsx';

class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    localTime() {
        return moment.tz(this.props.time, this.props.offset);
    }

    utcTitle() {
        return this.localTime().utcOffset() + ' minutes shift from UTC';
    }

    handleHourChange(e) {
        let newDate = this.localTime().hour(e.target.value).utc();
        this.props.setNewUtcDate(newDate);
    }

    handleMinutesChange(e) {
        let newDate = this.localTime().minute(e.target.value).utc();
        this.props.setNewUtcDate(newDate);
    }

    handleRemove() {
        this.props.removeTimeZone(this.props.index);
    }

    render() {
        return (
            <article className="card timezone">
                <header>
                    <h3>{this.props.offset}</h3>
                    <p>{this.utcTitle() }</p>
                    <a className='close' onClick={this.handleRemove}>x</a>
                </header>
                <AnalogClock hour={this.localTime().hour() } minute={this.localTime().minute() }/>
                <div>{this.localTime().format('LT') }</div>
                <p>
                    <small>Hour</small>
                    <input
                        type='range'
                        min="0"
                        max="23"
                        step="1"
                        value={this.localTime().hour() }
                        onChange={this.handleHourChange}/>
                    <small>Minute</small>
                    <input
                        type='range'
                        min="0"
                        max="59"
                        step="1"
                        value={this.localTime().minute() }
                        onChange={this.handleMinutesChange}/>
                </p>
            </article>
        );
    }
}

export default TimeDisplay;