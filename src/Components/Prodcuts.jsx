import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel, Pagination } from "swiper";
import { IconButton } from "@mui/material";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css";

const productArray = [
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    price: "100",
    productTitle: "Product title",
  },
  {
    imageUrl:
    "https://greenmountaincreamery.com/wp-content/uploads/2017/08/Plain__LARGE.png",
    price: "100",
    productTitle: "Product title",
  },
  {
    imageUrl:
    "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/115800--1--1597915997.jpeg",
    price: "100",
    productTitle: "Product title",
  },
  {
    imageUrl:
      "https://i2.wp.com/www.navalanka.lk/wp-content/uploads/2018/08/00020132.jpg?fit=250%2C300&ssl=1",
    price: "100",
    productTitle: "Product title",
  },
  {
    imageUrl:
    "https://i2.wp.com/www.navalanka.lk/wp-content/uploads/2018/08/00020132.jpg?fit=250%2C300&ssl=1",
    price: "100",
    productTitle: "Product title",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    price: "100",
    productTitle: "productTitle",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    price: "100",
    productTitle: "productTitle",
  },
];

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      marginBottom: "30px",
      '&:hover': {
        border: '2px solid green'
      },
      '&:active': {
        transform: 'scale(0.95)',
      }
    }}
    className="items-cente"
  >
   
    <div className="drop-shadow-2xl w-15 h-15">
      <img
        src={imageUrl}
        alt={`product_unit_${id}`}
        className="object-contain w-full mb-5 "
      />
      <div className="text-left ml-1">
      <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-stone-800">{productTitle}</h3>
      <h3 className="text-stone-800 font-bold text-lg">Rs:{price}</h3>
      </div> 
      <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-400 opacity-30"></div>
    </div>
  </IconButton>
);

const Products = ({ title, rawsCount, slidesPerView }) => {
  return (
    <section
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
      className="w-full mt-6 p-2"
    >
      <h1 className="text-lg font-bold mb-3 ml-2 mt-2">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{ rows: Number(rawsCount) }}
        spaceBetween={10}
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {productArray.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
          
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
