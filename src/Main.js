import React, { useContext, useState } from "react";
import ProductContext from './context/ProductContext'
export default function Main() {
  const [filter, setFilter] = useState([]);
  const [categories, setCategories] = useState([
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ]);

  const { product } = useContext(ProductContext);


  const handleFilterState = (e) => {
    let filtered = [];
    if (e.target.checked) {
      filtered = product.filter((r) => {
        return r.category === e.target.name;
      });
      setFilter([...filter, ...filtered]);
    } else {
      for (let i in filter) {
        if (filter[i].category !== e.target.name) {
          filtered.push(filter[i]);
        }
      }
      setFilter([...filtered]);
    }
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div id="filter" className="w-1/6 pt-8 pl-8 flex flex-col items-start">
          <p>Filter</p>

          <ul>
            {categories.map((category) => (
              <li>
                <div className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name={category}
                    value={category}
                    onChange={handleFilterState}
                  />
                  <p>{category}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="products" className="w-5/6  grid grid-cols-3">
          {filter.length === 0
            ? product.map((curr) => {
              return <Products product={curr} />;
            })
            : filter.map((curr) => {
              return <Products product={curr} />;
            })}
        </div>
      </div>
    </>
  );
}

function Products(props) {
  return (
    <div id="product1" className="w-[20rem] h-[25rem] mt-4">
      <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
        <img src={props.product.thumbnail} className="w-3/4 h-5/6" alt="" />
      </div>
      <div className="productDescription p-2 flex items-center justify-between">
        <div className="">
          <p id="productName" className="text-base font-medium">
            {props.product.title}
          </p>
          <p id="productPrice" className="text-sm text-[#666666]">
            ${props.product.price}
          </p>
        </div>
        <div className="">
          <button className="addToCart Cart1 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
