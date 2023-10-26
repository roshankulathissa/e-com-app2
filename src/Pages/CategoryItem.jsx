// import { useSelector } from "react-redux";
import { ListItemButton } from "@mui/material";
import { useParams } from "react-router-dom";
// import { categorySelector } from "../Store/ReduxSlice/CategorySlice";

const categoryItemArry = [
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category01",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category01",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category02",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category03",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category04",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category05",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category06",
  },
];

const categoryItemUnit = categoryItemArry.map((item, index) => (
  <ListItemButton
  sx={{
    padding: 0,
    margin: "5px",
    borderRadius: "8px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    "&:hover": {
      border: "2px solid green",
      borderRadius: "8px",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      boxSizing: "content-box",
    },
  }}
  >
    <div key={index} className="m-1 w-full py-6 px-3 rounded-md flex flex-col items-center">
      <img src={item.imageUrl} alt={item.title} className="w-[50px] h-[50px] ml-2"/> 
      <h1 className="mb-3 text-sm font-bold font-sans">{item.title}</h1>
    </div>
  </ListItemButton>
));

const CategoryItem = () => {
  // const category = useSelector(categorySelector);
  const { categaryID } = useParams();
  // const [categoryTitle] = category.filter((ele) => ele.id === categaryID);

  return (
    <div className=" px-5 py-[100px] m:px-12 md:px-[120px] w-full h-screen overflow-y-scroll ">
      <section
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
           display:"" 
        }}
        className="w-auto p-2 "
      >
  
        <h1>{categaryID}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-[auto] gap-4">
          {categoryItemUnit}
        </div>
      </section>
    </div>
  );
};

export default CategoryItem;
