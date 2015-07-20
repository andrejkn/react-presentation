var List = React.createClass({
  render: function() {
    return (
      <ul>
        <lh>
          <b>{this.props.title}</b>
        </lh>

        {this.props.items.map(function(item, i) {
          return(
            <Item key={i}
                  index={i}
                  itemContent={item}>
              {item}
            </Item>
          );
        })}
      </ul>
    );
  }
});
