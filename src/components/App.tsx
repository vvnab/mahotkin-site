import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history, ui } from "../store";

import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Message
        text={ui.message}
        messageType={ui.messageType}
        onClick={() => ui.setMessage({ text: "" })}
      />
      <Router history={history}>
        <Header />
        <section>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Profile" component={Profile} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
