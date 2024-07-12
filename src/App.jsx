import React, { useState } from "react";
import ReactDOM from "react-dom";
import ArchivedCalls from "./components/AllCalls/ArchivedCalls.jsx";
import AllCalls from "./components/AllCalls/index.jsx";
import Header from "./components/Header/index.jsx";
import "./css/allCalls.css";
import "./css/card.css";

const App = () => {
  const [active, setActive] = useState("all");

  return (
      <div className='container'>
        <Header active={active} setActive={setActive} />
        <div className='container-view'>
          {active === "archive" ? <ArchivedCalls /> : null}
          {active === "all" ? <AllCalls /> : null}
        </div>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
