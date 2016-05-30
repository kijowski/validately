import React from 'react';

class AnalogClock extends React.Component {
    render() {
        var minute = this.props.minute * 6;
        var hour = ((this.props.hour % 12) / 12) * 360 + 90 + minute / 12;

        return (
            <div className="circle">
                <div className="face">
                    <div className="hour" style={this.transform(this.rotate(hour)) } />
                    <div className="minute" style={this.transform(this.rotate(minute)) } />
                </div>
            </div>
        );
    }


    transform(str) {
        return { transform: str };
    }

    rotate(deg) {
        return 'rotate(' + deg + 'deg)';
    }
}

export default AnalogClock;
