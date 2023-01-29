import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/icons/Logo.png";
import { borderBottom } from "@mui/system";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      px="20px"
      sx={{
        gap: { sm: "120px", xs: "40px" },
        mt: { sm: "30px", xs: "20px" },
        justifyContent: { lg: "flex-start", sm: "space-between" },
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{ color: "#3A1212", borderBottom: "3px solid #FF2625" }}
        >
          Home
        </Link>
        <a href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
