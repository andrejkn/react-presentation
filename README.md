# ReactJS Presentation

What is ReactJS?
================

Why ReactJS?
============

React Components
================

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
Component Specifications
------------------------
- render
- getInitialState()
- getDefaultProps()
- propTypes()
- mixins [debrecated]
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

Virtual DOM
===========

FLUX
====
