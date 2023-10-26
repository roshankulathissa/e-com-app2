import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

const categoryArry = [
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category01",
    categaryID: "001",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category01",
    categaryID: "002",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category02",
    categaryID: "003",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category03",
    categaryID: "004",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category04",
    categaryID: "005",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category05",
    categaryID: "006",
  },
  {
    imageUrl:
      "https://static-01.daraz.lk/p/0d384e5a5444f7256eacd143534b77c0.jpg",
    title: "category06",
    categaryID: "007",
  },
];

const CatergoryUnitItems = ({ imageUrl, title, categaryID }) => (
  <Link to={`/category/${categaryID}`}>
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
      <div className="m-1 w-full py-6 px-3 rounded-md flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-full w-[50px] h-[50px]"
        />
        <h2 className="text-sm font-semibold font-sans">{title}</h2>
      </div>
    </ListItemButton>
  </Link>
);

const Category = () => {
  return (
    <div className=" px-5 py-[100px] w-full sm:px-12 md:px-[120px] h-screen overflow-y-scroll ">
      <section
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
        className="w-auto p-2 "
      >
        <h1 className="text-lg font-bold mb-3 ml-2 mt-2">Product Categories</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-rows-[auto] gap-1">
          {categoryArry.map(({ imageUrl, title, categaryID }, index) => (
            <CatergoryUnitItems
              key={index}
              imageUrl={imageUrl}
              title={title}
              categaryID={categaryID}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
