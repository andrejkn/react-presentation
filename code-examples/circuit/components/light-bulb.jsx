var LightBulb = React.createClass({
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
    var lightBulbOff = "/code-examples/circuit/images/lightbulb_off.png";
    var lightBulbOn = "/code-examples/circuit/images/lightbulb_on.png";

    return this._switchLight() ? lightBulbOn : lightBulbOff;
  },

  _switchLight: function() {
    return this.props.isLightOn;
  },

  _handleClick: function() {
    this.setState({
      isOn: !this.state.isOn
    });
  }
});
