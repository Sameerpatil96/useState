// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
 import React, { useState } from 'react';





 const App = () => {
   const state = useState();
  //  console.log(state);
   const [count, setCount] =useState(0);
   //current data , updated data = initial data;


   const IncNum = () =>{
     setCount(count+1);
  //  console.log("clicked", count++);
    };
   return(
     <>
       <h1> {count} </h1>
       <button onClick={IncNum}> Click Me </button>
     </>
   );
 };

 export default App;
