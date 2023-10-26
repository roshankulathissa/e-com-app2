import { IconButton } from "@mui/material";
import React, { useRef } from "react";

const ItemImageArry = [
  "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
  "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/115800--1--1597915997.jpeg",
  "https://greenmountaincreamery.com/wp-content/uploads/2017/08/Plain__LARGE.png",
  "https://i2.wp.com/www.navalanka.lk/wp-content/uploads/2018/08/00020132.jpg?fit=250%2C300&ssl=1",
];

const Itempage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);

  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll ">
      <h1 className="text-lg font-bold px-3 mb-7">Item Title </h1>
      <img
        ref={mainImageRef}
        src={ItemImageArry[0]}
        alt="main item"
        className="w-full h-[150px] object-contain rounded-md"
      />
      <div className="w-full mt-5 grid grid-cols-4 text-center grid-rows-1 gap-3">
        {ItemImageArry.map((ele, index) => (
          <IconButton
            key={index}
            sx={{
              padding: "0",
              borderRadius: "2px",
            }}
            onClick={() => {
              subImageRef.current[index].style.border = "3px solid green";
              mainImageRef.current.src=subImageRef.current[index].src;
              for (let i = 0; i < ItemImageArry.length; i++) {
                if (i !== index) {
                  subImageRef.current[i].style.border = "none";
                }
              }
            }}
          >
            <img
              ref={(refEle) => (subImageRef.current[index] = refEle)}
              name={`item image ref${index}`}
              src={ele}
              key={index}
              alt={ele}
              className="w-full object-contain rounded-sm"
            />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default Itempage;
