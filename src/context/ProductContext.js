import {createContext, useState } from "react";
export const ProductContexts = createContext({
    product: []
  })

const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

 

  return (
    <ProductContexts.Provider value={{ product, setProduct}}>
      {children}
    </ProductContexts.Provider>
  )
};

export const ProductContext = { ProductContextProvider, ProductContexts}