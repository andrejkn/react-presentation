var SimpleSwitch = React.createClass({
  getInitialState: function() {
    return {
      isOn: false
    };
  },

  render: function() {
    return (
      <img onClick={this._handleClick}
           src={this._getImageSource()} />
    );
  },

  _getImageSource: function() {
    var switchOff = "/code-examples/circuit/images/switch_off.png";
    var switchOn = "/code-examples/circuit/images/switch_on.png";

    return this.state.isOn ? switchOn : switchOff;
  },

  _handleClick: function() {
    this.setState({
      isOn: !this.state.isOn
    });
  }
});

React.render(<SimpleSwitch />, document.getElementById('simpleSwitchApp'));
