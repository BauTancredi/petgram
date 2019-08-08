import React, { useContext, Suspense } from "react";
import { Router, Redirect } from "@reach/router";

import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

// import { Home } from "./pages/Home";
// import { Detail } from "./pages/Detail";
// import { Favs } from "./pages/Favs";
// import { User } from "./pages/User";
// import { NotFound } from "./pages/NotFound";
// import { NotRegisteredUser } from "./pages/NotRegisteredUser";

import { Context } from "./Context";

import { GlobalStyle } from "./styles/GlobalStyles";

const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));
const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));
const NotRegisteredUser = React.lazy(() => import("./pages/NotRegisteredUser"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" noThrow />}
        {!isAuth && <Redirect from="/user" to="/login" noThrow />}
        {isAuth && <Redirect from="/login" to="/" noThrow />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};
