import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Display from "./component/Display/Display";
import Display1 from "./component/Display1/Display1";
import Display2 from "./component/Display2/Display2";
import Display3 from "./component/Display3/Display3";
import Display4 from "./component/Display4/Display4";
import Display5 from "./component/Display5/Display5";
import Display6 from "./component/Display6/Display6";
import Display7 from "./component/Display7/Display7";
function App() {
  return (
    <Router>
  <Header/>
      <Switch>
        <Route exact path="/" component={Display} />
        <Route exact path="/display" component={Display1} />
        <Route exact path="/display1" component={Display2} />
        <Route exact path="/display2" component={Display3} />
        <Route exact path="/display3" component={Display4} />
         <Route exact path="/display4" component={Display5} />
         <Route exect path ="/display5"component={Display6}/>
        {/* 
        <Route exect path ="/display6"component={Display7}/> */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
