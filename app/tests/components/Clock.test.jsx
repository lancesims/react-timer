var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock component', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
        let clock = TestUtils.renderIntoDocument(<Clock/>);
        let seconds = 615;
        let expected = '10:15';
        let actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    });

    it('should format seconds with leding 0', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 61;
      let expected = '01:01';
      let actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    describe('render', () => {
      it('should render clock to output', () => {
          var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
          var $el = $(ReactDOM.findDOMNode(clock));
          var actualText = el.find('clock-text').text();
          expect(actualText).toBe('01:02');
      });
    });
  });
});
