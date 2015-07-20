# ReactJS
![alt text](https://github.com/andrejkn/react-presentation/blob/master/images/react-strong.png "ReactJS")

What is ReactJS?
================
- React is a JS library for creating UIs.
- Created by Facebook
- Used for creating components
- Lots of people use React as the V in MVC
- It is NOT a template library (handlebar.js, mustache.js, ...)

Why ReactJS?
============
- It is alternative to EVENT-BASED and DATA BINDING approaches
- Avoids keeping track of which callback gets called first
- COMPONENTS
  - Re-rendering every time a change is made
  - Easier to reason about
- Improved performance

Virtual DOM
===========
- Solution for unpredictable UI
- Solves the following issues of data binding
  - bind data-models to views
  - non trivial abstraction
  - key-value observation
  - observables & computed properties
  - observables - values which when are changed they notify other observables
  computed properties - are observables which contain
  the computed change
  - problem with this system is that it needs to
  maintain a dependency graph of observable and computed graphs

- vDOM - no need for observables
- whenever change occurs => re-render everything to a vDOM representation
- DIFF the previous vDOM with the latest
- Update the real DOM with ONLY the changed stuff

Performance:
O(v) O(m)
v - size of view
m - size of models
v << m

|        | Data binding | Virtual DOM|
|--------|:------------:|:----------:|
|memory  | O(m)         | O(v)       |
|runtime | O(1)         | O(v)       |

We can do caching:
- bring down the runtime


React Components
================
- When designing front end apps we break down UIs into REUSABLE components
- React Components are commonly used to extend a basic HTML element

Here's a sample React component:
```javascript
var MyComponent = React.createClass({
  render: function() {
    return (
      <p>
        My App Component
      </p>
    );
  }
});
```

We can render the component into an existing DOM elemtnt:
```javascript
React.render(<MyComponent />,
             document.getElementById('mainAppElement'));
```

Consider the following simple application, which renders a list of items and the list's title:


![alt text](https://github.com/andrejkn/react-presentation/blob/master/images/todo/todo1.png "List App")

We can split this into 2 component:
  1. List
  2. Item


![alt text](https://github.com/andrejkn/react-presentation/blob/master/images/todo/todo2.png "List App")

```javascript
var List = React.createClass({
  render: function() {
    return (
      <ul>
        <lh>
          // LIST TITLE
        </lh>

        // LIST OF ITEMS ...
        // <Item ... />
        // <Item ... />
        // ...
      </ul>
    );
  }
});
```

```javascript
var Item = React.createClass({
  render: function() {
    return (
      <li>
        // Content of this ITEM
      </li>
    );
  }
});
```

Props
-----
Before we go any further with the List example,
let's look at Component Properties.

- Think of Components as Functions and props as parameters for that function

```javascript
var pos = {
  x: 123,
  y: 34
};

var myComp = <MyComponent color={'green'}
                          x={pos.x}
                          y={pos.y} />
```

#### Spread Attributes

- JSX feature
- Using the ... operator for arrays

```javascript
var props = {
  color: 'white',
  x: 123,
  y: 34
};

var myComp = <MyComponent {...props} />
```

- We can combine multiple attributes
- Later attributes override previous ones
```javascript
var props = {
  color: 'white',
  x: 123,
  y: 34
};

// Override previous value of color
var myComp = <MyComponent {...props} color={'blue'} />
console.log(myComp.props.color); // 'blue'
```

#### Props Anti-Pattern

- Mutating the props could cause unexpected consequences
```javascript
var pos = {
  x: 123,
  y: 34
};

var myComp = <MyComponent color={'green'}
                          x={pos.x}
                          y={pos.y} />
myComp.props.x = 23; // Not a good idea!
```

#### List example continued ...

- Let's look at our List example and see how we can use component
props to pass attributes to our List and Item components
- Also we will learn how to create repeated instances of components
  - Simmilar to ng-repeat in AngularJS
  - In React we use map() function for that purpose

```javascript
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
```

```javascript
var Item = React.createClass({
  render: function() {
    return (
      <li>
        Item {this.props.index}: {this.props.itemContent}
      </li>
    );
  }
});
```

#### TODO App - reusing our List component
- Let's say we have an array of TODO items
- and we want to render them on the screen
- We can create a Todo component
  - which is our main APP component
  - and use List and Item components in it

```javascript
var TodoApp = document.getElementById('todoApp');

var Todo = React.createClass({
  render: function() {
    var todoList = [
      'Drive to work',
      'Check emails',
      'Make coffee',
      'Put the used coffee cup in the dish washer'
    ];

    return (
      <List title='My plans for today' items={todoList} />
    );
  }
});

React.render(<Todo />, TodoApp);
```

```html
...
  <div id="todoApp"></div>
...
```

State
-----
- Components === State Machines
  - UI Consistency
  - Update states ==> rerendering the component
  - updating the DOM
- What are component state?
- What should go in state?
- What should NOT go in state?

> simple-switch.jsx

```javascript
var SimpleSwitch = React.createClass({
  getInitialState: function() {
    return {
      isOn: false
    };
  },

  render: function() {
    return (
      <img onClick={this._handleClick}
           src={this._getImageSource()} />
    );
  },

  _getImageSource: function() {
    var switchOff = "/code-examples/circuit/images/switch_off.png";
    var switchOn = "/code-examples/circuit/images/switch_on.png";

    return this.state.isOn ? switchOn : switchOff;
  },

  _handleClick: function() {
    this.setState({
      isOn: !this.state.isOn
    });
  }
});


React.render(<SimpleSwitch />, document.getElementById('simpleSwitchApp'));
```

> simple-switch.html

```html
<!DOCTYPE html>

<html>

  <head>
    <script src="/bower_components/react/react.js"></script>
    <script src="/bower_components/react/JSXTransformer.js"></script>
    <script type="text/jsx" src="./components/simple-switch.jsx"></script>
  </head>

  <body>
    <div id="simpleSwitchApp"></div>
  </body>
</html>
```

Component Specifications
------------------------
- render
- getInitialState()
- getDefaultProps()
- propTypes()
- mixins [deprecated]
- static
- displayName

Lifecycle Methods
-----------------
- Mounting
  - componentWillMount()
  - componentDidMount()
- Updating
  - componentWillReceiveProps()
  - shouldComponentUpdate()
  - componentWillUpdate()
  - componentDidUpdate()
  - componentWillUnmount()


JSX
===
What is JSX?
Why using it?
Talk about JSX Trasformer
Talk about <b>react-tools</b>

React Without JSX
=================

Create Element
--------------

> React.createElement(...)

Element Factory
---------------
Create factory function

Built-in factorie
-----------------

> React.DOM.div(...);

Event Handling
==============

- Synthetic Events
React ensures that all events behave identically across browsers

- Autobinding
methods are automatically bound to component instances
and methods are cached

- Event Delegation
explain how it works in React...

FLUX
====
