var Item = React.createClass({
  render: function() {
    return (
      <li>
        Item {this.props.index}: {this.props.itemContent}
      </li>
    );
  }
});
