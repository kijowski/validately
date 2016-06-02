import React from 'react';

class AnalogClock extends React.Component {

    render() {
        let minute = this.props.minute * 6;
        let hour = ((this.props.hour % 12) / 12) * 360 + 90 + minute / 12;
        let rotate = (deg) => { return { transform: 'rotate(' + deg + 'deg)' }; };
        return (
            <div className="circle">
                <div className="face">
                    <div className="hour" style={rotate(hour) } />
                    <div className="minute" style={rotate(minute) } />
                </div>
            </div>
        );
    }
}
AnalogClock.propTypes = {
    minute: React.PropTypes.number.isRequired,
    hour: React.PropTypes.number.isRequired
}

export default AnalogClock;
