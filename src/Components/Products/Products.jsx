import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import ArabicProducts from './ArabicProducts'
import EnglishProducts from './EnglishProducts'

function Products() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "arabic" ? (
        <ArabicProducts />
      ) : (
        <EnglishProducts />
      )}
    </div>
  );
}

export default Products;
