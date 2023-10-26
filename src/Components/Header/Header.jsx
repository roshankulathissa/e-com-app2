import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";


let clicked=false;

const Header = () => {

  

  function handleClick() {
    window.open("/Loading", "Loading Page", "width=400,height=400");
  }

  const logoRef=useRef()
  const searchBoxRef=useRef()
  const searchBoxContainerRef=useRef()

  const searchButtonClickHandle=()=>{
    if (clicked) {
      logoRef.current.style='display:none';
      searchBoxRef.current.style='display:inline-block';
      searchBoxContainerRef.current.style='#7DCEA0'

    }else{
      logoRef.current.style='display:inline-block';
      searchBoxRef.current.style='display:none';
      searchBoxContainerRef.current.style='inherit'

    }
  }

  return (
    <header className="w-full p-2px bg-green-600 flex items-center justify-between fixed top-0 left-0 z-[100] drop-shadow-2xl">
      {/* header left */}

      <div className="flex items-center">
        <div className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300">
          <IconButton sx={{ color: "white" }}>
            <MenuIcon
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </div>
        <h1
          // the style for remove the text of h1 when click the serch icon
          ref={logoRef}
          style={{
            display:
              window.innerWidth < 640
                ? clicked
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className="ml-2 text-sm font-bold text-[#086972]"
        >
          Roshan <span className="text-[#faee1c]">Kulathissa</span>
        </h1>
        <div
        ref={searchBoxContainerRef}
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? clicked
                  ? "#7DCEA0 "
                  : "inherit"
                : "#7DCEA0 ",
          }}
          className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#eeeded]"
        >
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="search"
            style={{
              display:
                window.innerWidth < 640
                  ? clicked
                    ? "inline-block"
                    : "none"
                  : "inline-block",
            }}
            className="hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />

          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                clicked=!clicked;
                searchButtonClickHandle();
              }
            }}
          >
            <SearchIcon
              style={{
                color:
                  window.innerWidth < 640
                    ? clicked
                      ? "#145A32"
                      : "black"
                    : "#145A32",
              }}
            />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      
      <IconButton onClick={handleClick}>
        <div className="relative flex items-center">
          <div className="relative p-1 mr-2">
            <ShoppingCartOutlined className="text-white" />
            <div className="absolute top-[8px] right-0 text-[7px]
             text-white  bg-red-600 rounded-full justify-center w-3 h-3 flex items-center">
              2
            </div>
          </div>
          <span className="text-xl">
            <i className="fas fa-bell"></i>
          </span>
        </div>
      </IconButton>
      
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
// import { IconButton } from "@mui/material";

// const Header = () => {
//   const [searchClicked, setSearchClicked] = useState(false);

//   const handleSearchClick = () => {
//     setSearchClicked(!searchClicked);
//   };

//   return (
//     <header className="w-full p-2px bg-green-600 flex items-center justify-between fixed top-0 left-0 z-[100] drop-shadow-2xl">
//       {/* header left */}
//       <div className="flex items-center">
//         <div className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300">
//           <IconButton sx={{ color: "white" }}>
//             <MenuIcon sx={{ color: "white" }} />
//           </IconButton>
//         </div>
//         <h1
//           style={{
//             display:
//               window.innerWidth < 640 && searchClicked
//                 ? "none"
//                 : "inline-block",
//           }}
//           className="ml-2 text-sm font-bold text-[#086972]"
//         >
//           Roshan <span className="text-[#faee1c]">Kulathissa</span>
//         </h1>
//         <div
//           style={{
//             backgroundColor:
//               window.innerWidth < 640 && searchClicked ? "#7DCEA0" : "#7DCEA0",
//           }}
//           className="overflow-hidden ml-2 flex items-center rounded-full bg-[#eeeded]"
//         >
//           <input
//             type="text"
//             placeholder="search"
//             style={{
//               display:
//                 window.innerWidth < 640 
//                 ?searchClicked
//                   ? "inline-block"
//                   : "none"
//                   : "inline-block",
                 
//             }}
//             className="hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
//           />

//           <IconButton onClick={handleSearchClick}>
//             <SearchIcon
//               style={{
//                 color:
//                   window.innerWidth < 640 && searchClicked
//                     ? "#145A32"
//                     : "black",
//               }}
//             />
//           </IconButton>
//         </div>
//       </div>
//       {/* header right */}
//       <IconButton>
//         <div className="relative flex items-center">
//           <div className="relative p-1 mr-2">
//             <ShoppingCartOutlined className="text-white" />
//             <div className="absolute top-[8px] right-0 text-[7px] text-white bg-red-600 rounded-full justify-center w-3 h-3 flex items-center">
//               2
//             </div>
//           </div>
//           <span className="text-xl">
//             <i className="fas fa-bell"></i>
//           </span>
//         </div>
//       </IconButton>
//     </header>
//   );
// };

// export default Header;
