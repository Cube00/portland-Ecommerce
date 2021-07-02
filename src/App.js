import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layouts from "./components/layouts";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import contentStore from "./reducers/contentStore";

function App() {
  const compose =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(
    combineReducers({
      contentStore: contentStore,
    }),
    compose
  );

  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Layouts>
            <Route exact path="/">
              <Home />
            </Route>
          </Layouts>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
