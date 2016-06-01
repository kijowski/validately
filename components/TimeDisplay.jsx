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

    handleHourChange(localTime, e) {
        let newDate = localTime.hour(e.target.value).utc();
        this.props.setNewUtcDate(newDate);
    }

    handleMinutesChange(localTime, e) {
        let newDate = localTime.minute(e.target.value).utc();
        this.props.setNewUtcDate(newDate);
    }

    handleRemove(idx) {
        this.props.removeTimeZone(idx);
    }

    render() {
        let localTime = moment.tz(this.props.time, this.props.offset);
        let utcTitle = localTime.utcOffset() + ' minutes shift from UTC';
        return (
            <article className="card timezone">
                <header>
                    <h3>{this.props.offset}</h3>
                    <p>{utcTitle}</p>
                    <a className='close' onClick={this.handleRemove.bind(this, this.props.index) }>x</a>
                </header>
                <AnalogClock hour={localTime.hour() } minute={localTime.minute() }/>
                <p>{localTime.format('LT') }</p>
                <p>
                    <small>Hour</small>
                    <input
                        type='range'
                        min="0"
                        max="23"
                        step="1"
                        value={localTime.hour() }
                        onChange={this.handleHourChange.bind(this, localTime) }/>
                    <small>Minute</small>
                    <input
                        type='range'
                        min="0"
                        max="59"
                        step="1"
                        value={localTime.minute() }
                        onChange={this.handleMinutesChange.bind(this, localTime) }/>
                </p>
            </article>
        );
    }
}

export default TimeDisplay;