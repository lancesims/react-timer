var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React timer app
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="www.rad.com" target="_blank">Lance Sims</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

module.exports = Navigation;
