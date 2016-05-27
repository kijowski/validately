import React from 'react';
import moment from 'moment';

class TimeDisplay extends React.Component {
    constructor(props) {
      super(props);
  	
      this.title = 'UTC' + (this.props.offset>=0?('+'+this.props.offset):(this.props.offset));
      
      this.state = {hour: moment.utc(this.props.time).utcOffset(this.props.offset).hour()};
      this.handleHourChange = this.handleHourChange.bind(this);
      this.handleMinutesChange = this.handleMinutesChange.bind(this);
   }
   localTime() {
       return moment.utc(this.props.time).utcOffset(this.props.offset);
    }
    
    handleHourChange(e) {
        let newDate = this.localTime().hour(e.target.value).utc();
        this.props.setNewUtcDate(newDate);
    }
    
    handleMinutesChange(e) {
        let newDate = this.localTime().minute(e.target.value).utc();
        this.props.setNewUtcDate(newDate);
    }
    
   render() {
      return (
          <article className="card timezone">
            <header>
                <h3>{this.title}</h3>
            </header>
            <p>{this.localTime().format('LT')}</p>
            <p>
            <small>Hour</small>
            <input
                type='range'
                min="0"
                max="23"
                step="1"
                value={this.localTime().hour()}
                onChange={this.handleHourChange}/>
            <small>Minute</small>
            <input
                type='range'
                min="0"
                max="59"
                step="1"
                value={this.localTime().minute()}
                onChange={this.handleMinutesChange}/>
                </p>
            </article>         
      );
   }
}
 
export default TimeDisplay;