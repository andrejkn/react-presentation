var DynamicTodoApp = document.getElementById('todoApp');

var DynamicTodo = React.createClass({
  getInitialState: function() {
    return {
      todoList: []
    };
  },

  render: function() {
    return (
      <div>
        <input type='text' onClick={this._addItem} />
        <List title='My plans for today' items={todoList} />
      </div>
    );
  },

  _addItem: function() {
    this.setState({
      todoList: todoList.push(this.value);
    });
  }
});

React.render(<DynamicTodo />, DynamicTodoApp);
