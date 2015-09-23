var React = require('react');
var moment = require('moment');

var DateDisplay = React.createClass({
      render: function() {
        var formatDay = moment(this.props.date, 'YYYYMMDD').format('MMM D');
        console.log(this.props.date); 
        return <div>{formatDay}</div>
      }
});

module.exports = DateDisplay;