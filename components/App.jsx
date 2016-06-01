import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment-timezone';
import TimeDisplay from './TimeDisplay.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        let userTimeZone = moment.tz.guess();
        this.state = { utctime: moment.utc(), offsets: ['GMT', userTimeZone] };

        this.setNewUtcDate = this.setNewUtcDate.bind(this);
        this.addNewUtcRegion = this.addNewUtcRegion.bind(this);
        this.removeTimeZone = this.removeTimeZone.bind(this);
    }

    setNewUtcDate(e) {
        this.setState({ utctime: e });
    }

    addNewUtcRegion(e) {
        var selectRef = ReactDOM.findDOMNode(this.refs.tzs)
        var newOffsets = this.state.offsets.slice();
        newOffsets.push(selectRef.value);
        this.setState({ offsets: newOffsets });
    }

    removeTimeZone(e) {
        var newOffsets = this.state.offsets.slice();
        newOffsets.splice(e, 1);
        this.setState({ offsets: newOffsets });
    }


    render() {
        var self = this;
        return (
            <div>
                <div className="timezone-container">
                    {self.state.offsets.map(function (offset, i) {
                        return <TimeDisplay
                            index = {i}
                            key={i}
                            offset={offset}
                            time={self.state.utctime}
                            setNewUtcDate={self.setNewUtcDate}
                            removeTimeZone={self.removeTimeZone}
                            />;
                    }) }
                    <article className='card timezone'>
                        <header>
                            <h3>Add new timezone</h3>
                        </header>
                        <select ref='tzs'>{moment.tz.names().map(function (name, i) {
                            return <option key={i} value={name}>{name}</option>
                        }) }
                        </select>
                        <button onClick={self.addNewUtcRegion}>Add</button>
                    </article>
                </div>
            </div>
        );
    }
}

export default App;