import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Car from "./Car.js";
import Fruits from './Props.js';
import Football from './Events.js';
import username from './Form.js';
import Goal from "./conditionalrendering.js";
import Mech from './Lists.js';
import routering from './router.js';

const tablling = (
  <table>
    <thead>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Origin</th>
    </thead>
    <tbody>
      <tr>
        <td>Wilfred</td>
        <td>Tinega</td>
        <td>24</td>
        <td>Kisii</td>
      </tr>
    </tbody>
  </table>
);

const header =(<h1><span>Wilfred Mamboleo</span> </h1>);

/* REACT RENDER HTML 
* using ReactDom.createRoot()
*/

const container = document.getElementById("root");

const firstChildContainer = ReactDOM.createRoot(container);

firstChildContainer.render(header);

/* React JSX
* 
*/
const x = 25; 
const reactJSX = (
  <>
    <h2><span>React JSX {x}</span></h2>
    <p>The HTML code must be wrapped in ONE top level element.</p>
    <p>So if you like to write two paragraphs, you must put them inside a parent element, like a <tt>div</tt> element.</p>
    <label>
      <h4><span>Username</span></h4>
      <input type='text' id='username' placeholder='Enter Username' required />
      <input type='submit' id='submit'/>
      <p id='forusername'></p>
    </label>
    
  </>
  );

  
  let text = <h3>Good night</h3> ;

  if (x <= 20){
    text =(<h3><span>Hello world! {x}</span></h3>) ;

    const getJSX = document.getElementById("reactJSX")
    const reac = ReactDOM.createRoot(getJSX)
    reac.render(text);
  } else {
    const getJSX = document.getElementById("reactJSX")
    const reac = ReactDOM.createRoot(getJSX)
    reac.render(reactJSX);
  }

/* REACT COMPONENTS

*/
/*
function Car(props){
  return <h1>hi, i am a {props.color} <span>car!</span></h1>
}

const classes = document.getElementById("components");

const renderClass = ReactDOM.createRoot(classes);

renderClass.render(<Car color = "limegreen"/>);
*/
function Garage(props){
  const cars = ["ford","Mercedez","Toyota", "BMW", "KIA", "Tesla"];
  const carInfo = {
    name: "Ford", 
    model: "Mustang"
  }
  return (
    <>
    <h2>who live in my garage? </h2>
    <Car brand = { carInfo}/>
    <Fruits brand = "Organic"/>
    </>
  );
}

const prop = document.getElementById("props");

const propsmore = ReactDOM.createRoot(prop);
propsmore.render(< Garage />);

/* EVENTS IN REACT */
const events = document.getElementById("demo");

const getEvent = ReactDOM.createRoot(events);
getEvent.render(<Football/>);

/*CONDITIONAL RENDERING*/ 
const goal =document.getElementById("conditional");

const getGoal = ReactDOM.createRoot(goal);
getGoal.render(<Goal isGoal = {true}/>);

const Vehicles = document.getElementById("lists");
const getList = ReactDOM.createRoot(Vehicles);
getList.render(<Mech/>)

/*forms in react*/

const form1= document.getElementById("demo");

const getForm = ReactDOM.createRoot(form1);

getForm.render(<routering />);