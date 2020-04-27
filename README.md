## Pluralsight React Tutorial

### Why Use React
* React is a library and not a framework
* Working with a virtual browser
* Plain old JS
* Facebook tests it frequently before putting out feautures
* Declarative for dynamic data

## Basic Concepts
#### Components
* Like functions
* Input: props, state | Output UI
* Reusable and compatable
* Can Manage a private state

#### Updates
* React will react
* Updates browsers

#### Virtual views in memory
* Generate HTML using JS
* No HTML template language

#### React Components
* Function Components
* Class Components

## JSX is NOT the same as HTML
Will not throw syntax error because return is not HTML, rather it is JSX.
Using Babel will compile code into React API calls.

```javascript
function Hello() {
	return <div>Hello React!</div>;
}

ReactDOM, render(
    <Hello />,
    document.getElementById('mountNode),
);
```

## Components must be UpperCase for first Letter(example: MyComponent)

```javascript
function logRandom(){
  console.log(Math.random());
}

function Button() {
  const [counter, setCounter] = useState(0);
	return <button onClick={logRandom}>{counter}</button>;
}
```

You can also re-write above code as inline function using arrow functions
```javascript
function Button() {
  const [counter, setCounter] = useState(0);
	return <button onClick={() => console.log(Math.random())}>{counter}</button>;
}
```

##### Simple example using state and state manipulation
```javascript
function Button() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter+1);
    return (
    <button onClick={handleClick}>
        {counter}
    </button>
    );
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
```

##### Passing data from parent to children uses one way flow data **Responsibility Isolation**. Seperation of responsibilties. 

```javascript
function Button(props) {
    return (
    <button onClick={props.onClickFunction}>
        +1
    </button>
    );
}

function Display(props) {
  return (
    <div>
        {props.message}
    </div>
  );
}

function App(){
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter+1);
  return(
  <div>
    <Button onClickFunction={incrementCounter} increment={5}/>
    <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
```

Finalized version of simple example allowing different incrementers
```javascript
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
    return (
    <button onClick={handleClick}>
        +{props.increment}
    </button>
    );
}

function Display(props) {
  return (
    <div>
        {props.message}
    </div>
  );
}

function App(){
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return(
  <div>
    <Button onClickFunction={incrementCounter} increment={1}/>
    <Button onClickFunction={incrementCounter} increment={5}/>
    <Button onClickFunction={incrementCounter} increment={10}/>
    <Button onClickFunction={incrementCounter} increment={100}/>
    <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
```

##### Tree Reconsiliation
Prevents imperative logic in the React way. Much more efficient and extracts complexity

```javascript
const render= () => {
  document.getElementById('mountNode').innerHTML = `
	<div>
    Hello HTML
    <input />
    <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
`;

  ReactDOM.render(
    React.createElement(
      'div', 
      null, 
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, (new Date).toLocaleTimeString()),
    ),
    document.getElementById('mountNode2'),
  );
}

setInterval(render, 1000);
```

##### Takeaways from this section
* Props and State
    * (props) => {}
    * [val, setVal] = useState(initialVal)
    * Immutable props. Mutable state
* ReactDOM.render has two major parts
    * Component
    * DOM node
* React Events
    * React events 
    * onClick, onSubmit, ...

## Modern Javascript Crash Course ES6

##### Variable declarations
* Using var in block scope still allows access to it throughout program
* Use let in for loops to make it local variable
* const is used when you do now want to change its value
    * cant change references and are immutable
    * array or objects work with const but you may still change values 

##### Arrow functions vs Regular Functions
* Regular Functions
    * give access to their calling environment
    * value of "this" keyword depends on how function was called (the Object that made the call)
* Arrow Functions
    * value of "this" keyword depends on where function was defined(Scope that defined function)
    * good for functional programing, essentially a lamda

##### Destructuring and Rest/Spread
```javascript
    // const PI = Math.Pi;
    // const E = Math.E;
    // const SQRT2 = Math.SQRT2;
    const {PI, E, SQRT} = Math;

    // React example
    // const {Component, Fragment, useState} = require('react');
    // useState();

    const circle = {
        label: 'circleX',
        radius: 2
    };

    const circleArea = {{radius}, {precision = 2} = {} =>
        (PI * radius * radius).toFixed(precision);

    console.log(
        circleArea(circle, {precisions: 5})
    );
```
Array descructuring
```javascript
    const [first, ...restOfItems] = [10, 20, 30, 40];

    console.log(first);
    console.log(restOfItems);
```

##### Template Strings
* Use single or double quotes
* Use `` for templates
    * use interpolation

```javascript
    const html = `
        <div>
            ${Math.random()}
        </div>
    `;
```

##### Classes
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");
o3.greet = () => console.log('I am special!');

o1.greet();
o2.greet();
o3.greet();

```
##### Async/Await
```javascript
// const fetchData = () => {
//   fetch('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     });
//   });
// };

const fetchData = async () => {
  const resp = await fetch('https://api.github.com');
  const data = await resp.json();
  console.log(data);
};

fetchData();

```
Instead of using .then simplify but using async() await.

## Class Components
You can do inline styling if there is conditional styling
Keep in mind there are many improvments that could be made on this code:
* Error handling from user input
* Extracting some logic out of components to pratice single responsbility
