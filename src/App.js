import React from "react";
import { Router } from "@reach/router";

import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

import { GlobalStyle } from "./styles/GlobalStyles";

const UserLogged = ({ children }) => {
  return children({ isAuth: true });
};

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </div>
  );
};
