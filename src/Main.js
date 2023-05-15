import React, { useEffect, useState } from "react";
export default function Main() {
    const [product, setProduct] = useState([])
    const fetchApi = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products/");
            const data = await response.json();
            const productS = await data.products
            setProduct(productS);
            console.log(data);
        } catch {
            console.error();
        }
    };

    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <>

            <div className="flex flex-wrap">
                <div id="filter" className="w-1/6 pt-8 pl-8 flex flex-col items-start">
                    <p>Filter</p>
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" name="" id="" />
                        <p>Phones</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" name="" id="" />
                        <p>Earbuds</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" name="" id="" />
                        <p>Bluetooth</p>
                    </div>
                </div>

                <div id="products" className="w-5/6  grid grid-cols-3">
                    {
                    product.map((curr) => {
                        return (
                            <div id="product1" className="w-[20rem] h-[25rem] mt-4">
                                <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
                                    <img src={curr.thumbnail} className="w-3/4 h-5/6" alt="" />
                                </div>
                                <div className="productDescription p-2 flex items-center justify-between">
                                    <div className="">
                                        <p id="productName" className="text-base font-medium">
                                            {curr.title}
                                        </p>
                                        <p id="productPrice" className="text-sm text-[#666666]">
                                        ${curr.price}
                                        </p>
                                    </div>
                                    <div className="">
                                        <button className="addToCart Cart1 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]">
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div id="row1" className=" mt-8 flex items-center justify-evenly">
                        <div id="product1" className="w-1/4 ">
                            <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
                                <img src="/images/Pixel.png" className="w-3/4 h-5/6" alt="" />
                            </div>
                            <div className="productDescription p-2 flex items-center justify-between">
                                <div className="">
                                    <p id="productName" className="text-base font-medium">

                                    </p>
                                    <p id="productPrice" className="text-sm text-[#666666]">
                                        ₹76,500
                                    </p>
                                </div>
                                <div className="">
                                    <button className="addToCart Cart1 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="product2" className="w-1/4 ">
                            <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
                                <img
                                    src="images/product4.webp"
                                    className="w-3/4 h-5/6"
                                    alt=""
                                />
                            </div>
                            <div className="productDescription p-2 flex items-center justify-between">
                                <div className="">
                                    <p id="productName" className="text-base font-medium">
                                        Nothing phone 1
                                    </p>
                                    <p id="productPrice" className="text-sm text-[#666666]">
                                        ₹31,500
                                    </p>
                                </div>
                                <div className="">
                                    <button className="addToCart Cart2 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="product1" className="w-1/4 ">
                            <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
                                <img
                                    src="/images/product3.png"
                                    className="w-4/6 h-5/7"
                                    alt=""
                                />
                            </div>
                            <div className="productDescription p-2 flex items-center justify-between">
                                <div className="">
                                    <p id="productName" className="text-base font-medium">
                                        Oneplus 11 5G
                                    </p>
                                    <p id="productPrice" className="text-sm text-[#666666]">
                                        ₹57,000
                                    </p>
                                </div>
                                ,
                                <div className="">
                                    <button
                                        onclick="SaveItem(this)"
                                        className="addToCart Cart3 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]"
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="row2" className=" mt-24 flex items-center justify-evenly">
                        <div id="product1" className="w-1/4 ">
                            <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
                                <img
                                    src="/images/product10.png"
                                    className="w-4/5 h-5/6"
                                    alt=""
                                />
                            </div>
                            <div className="productDescription p-2 flex items-center justify-between">
                                <div className="">
                                    <p id="productName" className="text-base font-medium">
                                        Apple AirPods (3rd Generation)
                                    </p>
                                    <p id="productPrice" className="text-sm text-[#666666]">
                                        ₹20,000
                                    </p>
                                </div>
                                <div className="">
                                    <button className="addToCart Cart4 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="product2" className="w-1/4 ">
                            <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
                                <img
                                    src="/images/product9.png"
                                    className="w-4/5 h-5/6"
                                    alt=""
                                />
                            </div>
                            <div className="productDescription p-2 flex items-center justify-between">
                                <div className="">
                                    <p id="productName" className="text-base font-medium">
                                        OnePlus Nord Buds CE
                                    </p>
                                    <p id="productPrice" className="text-sm text-[#666666]">
                                        ₹8,000
                                    </p>
                                </div>
                                <div className="">
                                    <button className="addToCart Cart5 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="product1" className="w-1/4 ">
                            <div className="productImg bg-[#F8F9FA] w-full h-80 flex items-center justify-center">
                                <img
                                    src="/images/product11.png"
                                    className="w-4/5 h-5/6"
                                    alt=""
                                />
                            </div>
                            <div className="productDescription p-2 flex items-center justify-between">
                                <div className="">
                                    <p id="productName" className="text-base font-medium">
                                        Samsung Galaxy Buds Live
                                    </p>
                                    <p id="productPrice" className="text-sm text-[#666666]">
                                        ₹12,000
                                    </p>
                                </div>
                                <div className="">
                                    <button className="addToCart Cart6 w-24 h-8 bg-[#0077ED] text-[#ffffff] rounded-full hover:bg-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
