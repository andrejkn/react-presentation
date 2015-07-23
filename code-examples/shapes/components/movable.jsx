var Movable = React.createClass({
  getInitialState: function() {
    return {
      isDragging: false,
      initialCoords: {},
      x: 0,
      y: 0
    };
  },

  render: function() {
    var movableStyle = {
      position: 'absolute',
      top: this.state.y,
      left: this.state.x
    };

    return(
      <div style={movableStyle}
           onMouseDown={this._handleMouseDown}
           onMouseUp={this._handleMouseUp}
           onMouseMove={this._handleMouseMove}>

        {this.props.children}

      </div>
    );
  },

  _handleMouseDown: function(e) {
    this.setState({
      initialCoords: {
        x: e.pageX,
        y: e.pageY
      },
      isDragging: true
    });
  },

  _handleMouseUp: function() {
    this.setState({
      isDragging: false
    });
  },

  _handleMouseMove: function(e) {
    var initialX = e.pageX;
    var initialY = e.pageY;
    var xDisp = initialX - this.state.initialCoords.x;
    var yDisp = initialY - this.state.initialCoords.y;
    var newX = this.state.x + xDisp;
    var newY = this.state.y + yDisp;

    if(this.state.isDragging) {
      this.setState({
        x: newX,
        y: newY,
        initialCoords: {
          x: initialX,
          y: initialY
        }
      });
    }
  }
})
