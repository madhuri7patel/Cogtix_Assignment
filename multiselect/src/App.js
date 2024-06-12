import "./App.css";
import React from "react";
import MultiLevelDropdown from "./components/MultiLevelDropdown";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultiLevelDropdown menuItems={data} />
      </header>
    </div>
  );
}

export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1>Madhuri patel</h1>
//     </div>
//   );
// }

// export default App;
