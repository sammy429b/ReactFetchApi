import {createContext, useState, useEffect } from "react";
const ProductContext = createContext({
    product: []
  })

  const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    const fetchApi = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/");
        const data = await response.json();
        const productS = await data.products;
        setProduct(productS);
        console.log(productS);
        console.log(data);
      } catch {
        console.error();
      }
    };

    useEffect(() => {
      fetchApi();
    }, []);

    
    
    
  
 

  return (
    <ProductContext.Provider value={{ product, setProduct}}>
      {children}
    </ProductContext.Provider>
  )
};


export default ProductContextProvider