import React, { useEffect } from "react";

const Grocery = () => {
  useEffect(() => {
    console.log(
      "useEffect with empty dependency array: Runs after every render"
    );
  }, []);
  return (
    <h1>
      Online Grocery Store!!!, and we have lote of child components inside this
      web page
    </h1>
  );
};

export default Grocery;
