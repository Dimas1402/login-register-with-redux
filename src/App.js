import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./Redux/Reducers";
import { Provider } from "react-redux";
import Routes from "./Routes/Routes";
import thunk from "redux-thunk";

class App extends React.Component {
  render() {
    const store = createStore(
      Reducers,
      {},
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
      )
    );
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
