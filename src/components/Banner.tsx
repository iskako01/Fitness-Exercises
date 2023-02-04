import { Box, Typography, Stack, Button } from "@mui/material";
import banner from "../assets/images/banner.png";

const Banner = () => {
  return (
    <Box
      sx={{ mt: { lg: "215px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography fontSize="26px" color="#FF2625" fontWeight="600">
        Fitness club
      </Typography>
      <Box sx={{ mb: { lg: "120px", xs: "0" } }}>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Sweat, Smile
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          And Repeat
        </Typography>
        <Typography fontSize="20px" lineHeight="35px" mb="20px">
          Check out the most effective exercises
        </Typography>
        <Button
          sx={{
            backgroundColor: "#FF2625",
            border: "2px solid #FF2625",
            color: "#ffffff",
            "&:hover": { color: "#000000" },
            width: "max-content",
            padding: "24px",
            height: "40px",
          }}
          href="#exercises"
        >
          Explore exercises
        </Button>
      </Box>
      <Box>
        <Typography
          fontWeight={700}
          color="#FF2625"
          fontSize="200px"
          sx={{
            opacity: 0.1,
            display: { lg: "block", xs: "none" },
          }}
        >
          Exercise
        </Typography>
        <img src={banner} alt="banner" className="hero-banner-img" />
      </Box>
    </Box>
  );
};

export default Banner;
