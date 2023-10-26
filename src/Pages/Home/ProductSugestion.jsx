import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import { IconButton } from "@mui/material";

const productArray = [
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    price: "100",
    productTitle: "productTitle",
  },
  {
    imageUrl:
    "https://greenmountaincreamery.com/wp-content/uploads/2017/08/Plain__LARGE.png",
    price: "100",
    productTitle: "productTitle",
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
    }}
  >
    <div className="drop-shadow-2xl">
      <img
        src={imageUrl}
        alt={`product_unit_${id}`}
        className="object-contain h-48 w-96"
      />
      <h3 className="text-sm font-semibold text-stone-800">{productTitle}</h3>
      <h3 className="text-stone-800 font-bold text-lg">{price}</h3>
    </div>
  </IconButton>
);

export default function ProductSugestion() {
  return (
    <>
      <section
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
        className="w-full mt-6"
      >
        <Swiper
          slidesPerView={3}
          slidesPerColumn={2}
          slidesPerColumnFill="raw"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
        >
          {productArray.map(({ imageUrl, price, productTitle }, index) => (
            <Grid>
              <SwiperSlide key={index}>
                <ProductUnit
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={productTitle}
                  id={index}
                />
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </section>
    </>
  );
}
