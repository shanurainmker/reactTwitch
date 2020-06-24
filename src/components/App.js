import React from "react";
import { Router, Route, Link } from "react-router-dom";
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
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/delete" exact exact component={StreamDelete} />
          <Route path="/stream/edit/:id" exact component={StreamEdit} />
          <Route path="/stream/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
