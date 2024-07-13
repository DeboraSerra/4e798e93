import React, { useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer.jsx";
import Header, { activeType } from "./components/Header/index.jsx";
import Main from "./components/main.jsx";
import { modal } from "./components/modal.jsx";
import "./css/allCalls.css";
import "./css/card.css";

const App = () => {
  const [active, setActive] = useState(activeType.all);
  const [showModal, setShowModal] = useState(modal.none);

  return (
    <div className='container'>
      <Header active={active} setActive={setActive} />
      <div className='container-view'>
        <Main
          active={active}
          setShowModal={setShowModal}
          showModal={showModal}
          setActive={setActive}
        />
      </div>
      <Footer
        active={active}
        setActive={setActive}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
