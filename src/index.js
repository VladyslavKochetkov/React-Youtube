import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import AppExtreme from "./AppExtreme"
import registerServiceWorker from './registerServiceWorker';
import ReactYoutube from "./component/ReactYoutube"

// let isExtreme = "noInput";

// function showRest(){
//   if(isExtreme === "noInput")
//     return null;
//   if(isExtreme === true)
//     return ReactDOM.render(<AppExtreme />, document.getElementById("root"));
//   if(isExtreme === false)
//     return ReactDOM.render(<App />, document.getElementById("root"));
// }

// ReactDOM.render(<div>
//   <button onMouseUp={() => {isExtreme = false; showRest()}}>Show me the regular version</button>
//   <br/>
//   <button onMouseUp={() => {isExtreme = true; showRest()}}>Show me the extreme version (performace demonstration)</button>
//   {showRest()}
// </div>, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<ReactYoutube URL="https://www.youtube.com/watch?v=A71aqufiNtQ" lazyload="true"/>, document.getElementById("root"));