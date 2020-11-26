import React from 'react';
import { Provider } from "react-redux";
import Header from "./components/Header";
import TheSoup from "./components/TheSoup";

import configureStore from "./store";
const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TheSoup />
    </Provider>
  );
}

export default App;
