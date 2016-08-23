var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    console.log('crappo');
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
  return (
      <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          </form>
          <button className="button expanded">Start</button>
      </div>
    )
  }
});

module.exports = CountdownForm;
