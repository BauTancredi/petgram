import React, { Fragment } from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";

export const Favs = () => (
  <Layout
    title="Tus favoritos"
    subtitle="Aquí puedes encontrar
  tus favoritos"
  >
    <FavsWithQuery />
  </Layout>
);
