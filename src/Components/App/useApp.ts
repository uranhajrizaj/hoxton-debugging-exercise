import { displayError } from "../../utils/displayError";
import { getAll } from "../../utils/API";
import { ProductType } from "../../utils/types";
import React, { useState } from "react";
/*
Business logic for the main app component
*/
const useApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<null | ProductType[]>(null);

   console.log(`useApp`,products)
  const init = React.useCallback(() => {
    setIsLoading(true);
    getAll((products) => {
      setProducts(products);
      setIsLoading(false);
    }).catch((err) => {
      displayError(err);
      setIsLoading(false);
    });
  }, [setIsLoading, isLoading]);

  React.useEffect(() => {
    init();
    return () => console.log("Thank you fo using our products");
  }, []);

  return {
    products,
    isLoading,
  };
};

export default useApp;
