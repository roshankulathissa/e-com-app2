// import { useState } from "react";
// import Loadng from "../../Components/Loading/Loadng";
import Prodcuts from "../../Components/Prodcuts";
import Adds from "./Adds";
import ProductSugestion from "./ProductSugestion";

function Home() {
  // const [loadng, setLoading] = useState(false);
  // if (loadng) return <Loadng/>;

  return (
    <div className=" px-5 py-[100px] w-full sm:px-12 md:px-[120px] h-screen overflow-y-scroll ">
      <Adds />
      <Prodcuts title="Trending Products" rawsCount={1} slidesPerView={4} />
      <ProductSugestion
        title="Trending Products"
        rawsCount={2}
        slidesPerView={5}
      />
    </div>
  );
}

export default Home;
