var List = React.createClass({
  render: function() {
    return (
      <ul>
        <lh>
          <b>{this.props.title}</b>
        </lh>

        {this.props.items.map(function(item, i) {
          console.log('List:render ', item);
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
