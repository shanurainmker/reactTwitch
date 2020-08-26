import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/streamCreate";
import StreamShow from "./streams/streamShow";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamDelete from "./streams/streamDelete";
import Headers from "./header/header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Headers />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" exact component={StreamCreate} />
            <Route path="/stream/delete" exact exact component={StreamDelete} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
