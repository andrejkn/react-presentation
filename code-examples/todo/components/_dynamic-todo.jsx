var TodoApp = document.getElementById('todoApp');

var Todo = React.createClass({
  render: function() {
    var todoList = [
      'Drive to work',
      'Give a compliment to LisaMarie',
      'Make coffee',
      'Leave the used cup in the sink'
    ];

    return (
      <div>
        <ItemInput />
        <List title='My plans for today' items={todoList} />
      </div>
    );
  }
});

React.render(<Todo />, TodoApp);
