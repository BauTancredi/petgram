import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Helmet } from "react-helmet";
const HomePage = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="Con Petgram puedes encontrar 
          fotos de animales domésticos muy bonitos"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  );
};

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});
