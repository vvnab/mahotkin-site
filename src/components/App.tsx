import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history, ui } from "../store";

import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../pages/Main";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Message
        text={ui.message}
        messageType={ui.messageType}
        onClick={() => ui.setMessage({ text: "" })}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
