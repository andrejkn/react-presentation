var DynamicTodoApp = document.getElementById('dynamicTodoApp');

var DynamicTodo = React.createClass({
  getInitialState: function() {
    return {
      todoList: []
    };
  },

  render: function() {
    return (
      <div>
        <input type={'text'} id={'newItemInput'}
               onKeyDown={this._addItem} />
        <List title={'My plans for today'} items={this.state.todoList} />
      </div>
    );
  },

  _addItem: function(e) {
    if(e.which !== 13) return;
    var newItem = document.getElementById('newItemInput').value;
    var newList = _.clone(this.state.todoList);
    newList.push(newItem);

    this.setState({
      todoList: newList
    });
  }
});

React.render(<DynamicTodo />, DynamicTodoApp);
