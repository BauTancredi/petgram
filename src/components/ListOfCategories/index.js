import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { Spinner } from "../Spinner";

// import { categories as mockCategories } from "../../../api/db.json";

import { List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function() {
    setLoading(true);
    window
      .fetch("https://petgram-server.bautistatancredi.now.sh/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function() {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
  return (
    <Fragment>
      {loading && (
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Spinner />
        </div>
      )}
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};