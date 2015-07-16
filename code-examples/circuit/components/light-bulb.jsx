var LightBulb = React.createClass({
  getInitialState: function() {
    return {
      isOn: false
    };
  },

  render: function() {
    return (
      <img onClick={this._handleClick.bind(this)}
           src={this._getImageSource.bind(this).call()} />
    );
  },

  _getImageSource: function() {
    var lightBulbOff = "/code-examples/circuit/images/lightbulb_off.png";
    var lightBulbOn = "/code-examples/circuit/images/lightbulb_on.png";

    return this.state.isOn ? lightBulbOn : lightBulbOff;
  },

  _handleClick: function() {
    this.setState({
      isOn: !this.state.isOn
    });
  }
});
