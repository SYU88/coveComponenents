var React = require('react');
var SidebarEntry = require('./sidebarEntry.js');

var TVSidebar = React.createClass({

        render: function() {
          var rows = this.props.data.map(function(station, i){
            return <SidebarEntry data={station} key={station.station}></SidebarEntry> 
          });
          return <div data={this.props.data}>{rows}</div>          
        }
      });

module.exports = TVSidebar;

