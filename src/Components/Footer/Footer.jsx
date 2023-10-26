import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="sm:px-12 md:px-[120px] w-full p-1 bg-green-900 flex items-center 
  justify-between fixed bottom-0 left-0 z-[100] drop-shadow-2xl"
    >
      <FooterIcon Icon={HomeOutlinedIcon} iconText="Home" />
      <FooterIcon Icon={CategoryOutlinedIcon} iconText="Category" />
      <FooterIcon Icon={AccountCircleOutlinedIcon} iconText="Profile" />
    </footer>
  );
}

export default Footer;

const FooterIcon = ({ Icon, iconText }) => (
  <Link to={iconText==="Home"?'/':`/${String(iconText).toLocaleLowerCase()}`}>
    <IconButton
      sx={{
        padding: "4px",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <div className="text-white hover:text-[#faee1c] transition duration-500">
        <Icon />
        <p className="text-xs font-semibold">{iconText}</p>
      </div>
    </IconButton>
  </Link>
);
