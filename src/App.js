import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layouts from "./components/layouts";

function App() {
  return (
    <Router>
      <Switch>
        <Layouts>
          <Route exact path="/">
            this is main page
          </Route>
        </Layouts>
      </Switch>
    </Router>
  );
}

export default App;
