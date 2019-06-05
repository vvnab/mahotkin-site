import React, { FC } from "react";
import { Router, Switch, Route } from "react-router";
import { observer } from "mobx-react-lite";
import { history, ui } from "../store";

import Loader from "./Loader";
import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

import styles from "./App.module.scss";

const App: FC = observer(() => {
  return (
    <div className={styles.container}>
      <Loader loading={ui.loading} />
      <Message
        text={ui.message}
        messageType={ui.messageType}
        onClick={() => ui.setMessage({ text: "" })}
      />
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/lease" component={Main} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
});

export default App;
