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

We can split out app in components, for example let's consider an app
which renders a list of items:


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

Props
-----

State
-----
- Components === State Machines
  - UI Consistency
  - Update states ==> rerendering the component
  - updating the DOM
- What are component state?
- What should go in state?
- What should NOT go in state?


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
