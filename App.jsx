import React from 'react';
import moment from 'moment';
import TimeDisplay from './TimeDisplay.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { utctime: moment.utc(), offsets: [1, 2, 3, -1] };

        this.setNewUtcDate = this.setNewUtcDate.bind(this);
        this.addNewUtcRegion = this.addNewUtcRegion.bind(this);
    }

    setNewUtcDate(e) {
        this.setState({ utctime: e });
    }

    addNewUtcRegion(e) {
        var newOffsets = this.state.offsets.slice();
        newOffsets.push(5);
        this.setState({ offsets: newOffsets });
    }

    render() {
        var self = this;
        return (
            <div>
                <p>UTC: {moment(self.state.utctime).format('LTS') }</p>
                <div className="timezone-container">
                    {self.state.offsets.map(function (offset, i) {
                        return <TimeDisplay key={i} offset={offset} time={self.state.utctime} setNewUtcDate={self.setNewUtcDate}/>;
                    }) }
                </div>
            <button onClick={self.addNewUtcRegion}>Add new</button>

            </div>
        );
    }
}

export default App;