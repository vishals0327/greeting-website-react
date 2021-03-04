import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 let crntDate = new Date();
 crntDate = crntDate.getHours();
 let greetings = "";
 const cssStyle = {

 }

 if(crntDate >=1 && crntDate < 12){
  greetings = "Good Morning";
  cssStyle.color ='green';
 } else if(crntDate >= 12 && crntDate < 19){
  greetings = "Good Afternoon";
  cssStyle.color ='orange';
 } else {
  greetings = "Good Night";
  cssStyle.color ='black';
 }

ReactDOM.render(
 <>
  <div>
 <h1>Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
 </div>
 </>,
  document.getElementById('root')
);

reportWebVitals();
