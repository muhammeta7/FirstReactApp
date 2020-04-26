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

#### Simple example using state and state manipulation
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

#### Passing data from parent to children uses one way flow data **Responsibility Isolation**
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
    <Button onClickFunction={incrementCounter}/>
    <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
```
