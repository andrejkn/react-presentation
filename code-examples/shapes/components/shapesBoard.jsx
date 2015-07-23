var ShapesBoard = React.createClass({
  render: function() {
    return (
      <div>
        <Movable>
          <Shape type={'circle'}/>
        </Movable>

        <Movable>
          <Shape type={'square'}/>
        </Movable>

        <Movable>
          <Shape type={'triangle'}/>
        </Movable>

      </div>
    );
  }
});

React.render(<ShapesBoard />,
    document.getElementById('shapesBoard'))
