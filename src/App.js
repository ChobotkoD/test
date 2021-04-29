import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/header";
import MainPage from "./components/mainPage";
import FavouritesPage from "./components/favouritesPage";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/react-app" exact render={() => <MainPage />} />
        <Route path="/favourites" render={() => <FavouritesPage />} />
        <Route render={() => <h1>not found</h1>} />
      </Switch>
    </>
  );
}

export default App;
