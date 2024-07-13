import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer.jsx";
import Header from "./components/Header/index.jsx";
import Main from "./components/main.jsx";
import "./css/allCalls.css";
import "./css/card.css";
import Provider from "./utils/context.jsx";

const App = () => {
  return (
    <Provider>
      <div className='container'>
        <Header />
        <div className='container-view'>
          <Main />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
