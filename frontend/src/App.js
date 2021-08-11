import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Create} path="/create" />
          <Route component={PostDetails} path="/posts/:id" />
          <Route component={NotFound} path="*" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
