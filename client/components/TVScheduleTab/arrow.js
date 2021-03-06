var React = require('react');
var actions = require('../../actions/appActions.js');

var Arrow = React.createClass({
  previousHandler: function() {
    actions.previousDay();
  },
  nextHandler: function() {
    actions.nextDay();
  },
  render: function() {
    return (
      <i className={this.props.direction === 'previous' ? 'large chevron icon left react-clickable' : 'large chevron icon right react-clickable'} onClick={this.props.direction === 'previous' ? this.previousHandler : this.nextHandler}>
      </i>
      )
  }
});

module.exports = Arrow;
