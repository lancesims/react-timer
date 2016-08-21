var React = require('react');

var Clock = React.createClass({
  getDefaultProps: () => {
    totalSeconds: 0
  },
  propTypes: {
    totalSecons: React.PropTypes.number
  },
  formatSeconds: (totalSeconds) => {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds/60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    return minutes + ':' + seconds;
  },
  render: function() {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    )
  }
});

module.exports = Clock;
