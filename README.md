Link of the Video Tutorial = https://www.youtube.com/watch?v=f55qeKGgB_M&t=14s

REACT = SPA, CSR, Library.

**React and Single Page Applications (SPAs):**

- React allows developers to build Single Page Applications (SPAs), which are web applications that load a single HTML page initially and update dynamically as the user interacts with the app.
- React is a JavaScript library primarily used for building user interfaces, including SPAs due to its efficient rendering and component-based architecture.

**Client-Side Rendering (CSR) in React:**

- CSR means that after the initial HTML page is loaded from the server, React takes over in the browser. It manages the website, handling data, events, and routing entirely on the client side.
- Unlike traditional server-rendered websites where navigating to a new route typically involves requesting a new HTML page from the server, React Router conditionally renders components based on the route without involving the server.

**Comparison with Old Websites:**

- In older websites, navigating to a new route involved the client requesting a new HTML page from the server. In React, the routing is handled client-side, with React Router managing the URL changes and rendering components dynamically.
- React's approach eliminates the need for server-side involvement in handling route changes after the initial page load, making it more efficient for SPAs.

React Component VS Function

<!-- THis is just a JS function. This function does not render anything directly to the DOM like a React component would. Instead, it simply returns a string. -->

const getName = () => {
return "Musarraf";
};

<!-- returns a React element(UI eg - h1 or div or p) SO this is a component  -->
<!-- Component name should starts with capital letters -->

const GetNameComponent = () => {
return <h1>Musarraf</h1>;
};

In React components, they initially render once. If we declare a variable in the code and modify its value, we can see the change in the console, but it will not automatically update in the UI. This is where states and hooks like useState come into play. When we declare a variable using useState, React tracks its changes. When we modify this variable in the frontend, React compares the updated state with the previous state (both in the Virtual DOM and potentially in the actual DOM). If there are differences, React triggers a re-render of the corresponding part of the UI to reflect the updated state.

When we user useState and its values is an emply array, we cant just push new items to that array,bcs we cant just mutate the state direclty we need to use the function porvided for it.
we can do like this (Direct Update) = setTodos([...todos, text]);
or we can use the prev method (Functional Update with Previous State) = setTodos((prev) => [...prev, text]);

MEthod 2 (Functional Update with Previous State) ensures that you are working with the most up-to-date state (prev), which is especially useful in scenarios where state updates might be asynchronous or when you need to ensure the latest state is used. So always try to do the Functional Update with Previous State to avoid errors.

There is 3 different stages in the react lifecycle
1 = mounting (component appearing in the screen)
2 = updating (Component's change)
3 = unmounting (component stop appearing form te screen)

eg - 1

App.js

import "./App.css";
import { useState } from "react";
import Text from "./Text";

function App() {
const [showText, setShowText] = useState(false);

return (

<div className="App">
<button
onClick={() => {
setShowText(!showText);
}} >
Show
</button>
{showText && <Text />}
</div>
);
}

export default App;

Text.js

import React from "react";
import { useState, useEffect } from "react";

const Text = () => {
const [text, setText] = useState("");

useEffect(() => {
console.log("Componet Mounted");

    return () => {
      console.log("Componet Unmounted");
    };

}, [text]);

return (

<div>
<input
type="text"
onChange={(e) => {
setText(e.target.value);
}} ></input>
<h1>{text}</h1>
</div>
);
};

export default Text;

whenever the Text component mounts the console.log("Componet Mounted") will be printed, if we want to log only once we have to make the dependancy array empty in useEffect Hook. if we put the text inside the dependesy array whenever we type anything (text changes) the console.log("Componet Mounted") will be executed. if we click the show button to hide the text input, we can see the console.log("Componet Unmounted").

you might niticed when click the show button initially it will print 2 console.log("Componet Mounted"), the reason is, in our index.js our app is on StrictMode.
<React.StrictMode>
<App />
</React.StrictMode>

this will initially checks for anny errors thats we we see the component mounts twice.Suggesion, dont remove the strickmide, even thogh if we remove the StrictMode, this double log will not show, but the strick mode make our react code more securable and only allows standerd protocols.(so, dont woorry if see 2 action when use useeffect.)

so this useEffect itself shows the 3 phases of react component. mounting=console.log("Componet Mounted"), updating (if we put the text state inside dependency array i will repeatedly shows the console.log("Componet Mounted") whenever we type on the text input.), unmounting=console.log("Componet Unmounted").

watch the Module - 6 to understand react lifecycle and useeffect hook clearly.

When fetching the basic try catch - in catch it will only catch the error if not connected tot the database succesfully,
if we want to catch some other erorors we need to throw eroors
try {
if (!res.ok) {
throw Error("Could not Fetch the data");
}
} catch (error) {
// Catch the error if the database connection fails or other specific errors
console.error("Error: Could not connect to the database or fetch data");
}

instead of console log the error we can create a state for error and show assign value to it when error accurs and conditionally render that to the display whenever needed.

Fetch VS Axios
Axios provides = automatic JSON data parsing, so we don't need to use .json() on response.

Fetch: Use fetch for basic requests and if you prefer using native APIs without adding additional dependencies. It's good for simple scenarios and when working on modern browsers or in environments where you control compatibility.

Axios: Choose Axios if you need more advanced features like request cancellation, interceptors, or if you need better compatibility across various environments without worrying about polyfills or workarounds for older browsers.

EXTRA Fun Fact -  
Below would make an infinite loop and crash the app.
const [count, setCOunt] = useState(0);

useEffect(() => {
setCOunt(count + 1);
}, []);

<!--! In react router dom if we want to fetch the relevent data even before mounting the component we need to user leader and useLoaderData function in the react router dom, we can use the useNavigation from react router dom to set the loeader as well watch this video - https://www.youtube.com/watch?v=z0vaVoxMoSA -->

if want to use userContext for states mangagement use the create an appCOntext variable using createContext() , then use the appCOntext.provider to wrap our router we can pass datas and functions as values here, when want to use these vaulse in any components we can use useContext hook like this const {userName, setUserName} = useContext(Appcontext), this Appcontext we have already created.

React Query = React Query is a JavaScript library meant to simplify data fetching, caching and synchronizing in React applications. UseQuery is a hook included in the React Query library. (Google it.)

Custom Hooks
Three rules for custom hooks

Best video from netninja to understand the custom hook = https://www.youtube.com/watch?v=Jl4q2cccwf0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=20

cleanup FUnction and abort controller = https://www.youtube.com/watch?v=aKOQtGLT-Yk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=24

1. File Naming Convention:
   Custom hooks should typically start with the word "use" followed by a descriptive term, such as useToggle, useFetchData, etc. This convention helps developers recognize them as hooks.

2. Usage Inside a React Component:
   Custom hooks are designed to be used inside React functional components or other hooks. They should not be used in regular JavaScript functions or outside of a React component context.

3. Highest Level of a Component:
   When you use a custom hook inside a component, it should ideally be called at the top level of that component function. This is to ensure that hooks are called in the same order on every render, which is a requirement of hooks in React.

To sum up, Custom hooks should follow naming conventions, be used within React components or other hooks, and be called at the top level of those components to ensure proper hook behavior.

<!-- !EG - 01 -->

<!-- without Custom Hook -->

import "./App.css";
import { useState } from "react";

function App() {
const [isVisible, setIsVisible] = useState(false);

return (

<div className="App">
<button onClick={() => setIsVisible(!isVisible)}>Show</button>
{isVisible && <h1>Hidden Text</h1>}
</div>
);
}

export default App;

<!-- After creating and utilizing the useToggle hook -->

<!-- this is the app.js -->

import "./App.css";
import { useState } from "react";
import useToggle from "./useToggle";

function App() {
const [isVisible, toggle] = useToggle();
const [isVisible2, toggle2] = useToggle();

return (

<div className="App">
<button onClick={toggle}>Show</button>
{isVisible && <h1>Hidden Text</h1>}

      <button onClick={toggle2}>Show</button>
      {isVisible2 && <h1>Hidden Text</h1>}
    </div>

);
}

export default App;

export default App;

<!-- and this is the useToggle hook -->

import { useState } from "react";

const useToggle = (initialVal = false) => {
const [state, setState] = useState(initialVal);

function toggle() {
setState((prev) => !prev);
}

return [state, toggle];
};

export default useToggle;

<!-- ----------------- -->

one other famouse custom hook scenario is fetching data with error handling and loading - if we write custom hook for it we dont need to wrinte fetch code again just using that custom hook is enough.

Hooks are good for reusing the code, but they also good for abstracting the module(reducing the line of code in a module)

watch teh module 12 and do the exercie if want to get more clear about custom hook.

create a custom hook for the counter app we created previously(with increase , decrease,and reset buttons)

<!--! Typesafe in react -->

If we write the react using TypeSCript instead of JS we dont need this libraary.(TS will take care the typesafety)
but if we build app using react with JS for type safety we need this library.

need to install npm install prop-types
prop-types wont break our app it will notify the type error in the console if have any.

need to import it first
import PropTypes from "prop-types"

lets say we have a component called Person which will accept props
under the component we need to specify the types like this.

Person.propTypes ={
name:PropTypes.string,
email:PropTypes.string,
age:PropTypes.number,
isMarried:PropTypes.bool,
friends:PropTypes.arrayOf(PropTypes.string), // friends should be an array of strings
}

<!-- TypeScrpt using React -->

TS is not hard at all, its very easy to learn if know JS.
watch another video for typescript
now some basics
when passing props we need to define the props typs for that wee need to create an interface witha a name
interface Props{
name:string
email:string
age:number
isMarried:boolean
friends:string[] //array of strings
}

we need to pass this props when we pass the acual props
export const Person = (props:Props) =>{}

below is how to define states with types
const [count, setCount] = useState<number>(0)
const [name, setName] = useState<string>("")

if we want a value to be only selected ones we can create enum

enum Country{
Canada = "Canada"
UK = "UK"
SriLanka = "SriLanka"
}

then we can pass this enum to our interface
interface Props{
name:string
email:string
age:number
isMarried:boolean
friends:string[] //array of strings
country : Country
}

for functions :

const getAge = (name:string):number=>{ //Here number is the return type and string is the argument type.
return 99
}

<!-- Redux toolkit -->

learn if feels like learn more other videos on youtube.

useDispatch for modifying the states
iseSelector for getting the states

<!--! Imporatant Exercises to Refresh the React Faster -->

Exercise 1 = Create a text input whatever we type should be displayed on the display.
Exercise 2 = Create Basic todo with input field and using an array after enter in input text show in the display all list items, and to be able to delete each tasks.
