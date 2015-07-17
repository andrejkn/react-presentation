var CircuitApp = document.getElementById('circuitApp');

var CircuitBoard = React.createClass({
  getInitialState: function() {
    return {
      isLightBulbOn: false
    };
  },

  render: function() {
    var circuitStyle = {
      backgroundColor: this._backgroundColor(),
      width: '100%',
      height: '1000px'
    };

    return (
      <div style={circuitStyle}>
        <LightBulb isLightOn={this.state.isLightBulbOn} />
        <Switch clickHandler={this._lightBulbSwitch} />
      </div>
    );
  },

  _lightBulbSwitch: function() {
    console.log('circuit: lightBulbSwitch ', !this.state.isLightBulbOn);

    this.setState({
      isLightBulbOn: !this.state.isLightBulbOn
    });
  },

  _backgroundColor: function() {
    var backgroundColorOff = '#000000';
    var backgroundColorOn = '#fffef8';
    return this.state.isLightBulbOn ?
      backgroundColorOn : backgroundColorOff;
  }
});

React.render(<CircuitBoard />, CircuitApp);
