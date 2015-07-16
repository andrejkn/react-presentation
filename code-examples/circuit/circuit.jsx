var CircuitApp = document.getElementById('circuitApp');

var CircuitBoard = React.createClass({
  getInitialState: function() {
    return {
      isLightBulbOn: false
    };
  },

  render: function() {
    return (
      <div>
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
  }
});

React.render(<CircuitBoard />, CircuitApp);
