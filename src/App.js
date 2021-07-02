import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layouts from "./components/layouts";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Layouts>
          <Route exact path="/">
            <Home />
          </Route>
        </Layouts>
      </Switch>
    </Router>
  );
}

export default App;
