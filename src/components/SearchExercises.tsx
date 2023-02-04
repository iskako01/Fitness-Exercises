import { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import { exerciseData } from "../api/api";

const SearchExercises = () => {
  const [value, setValue] = useState("");

  const handleSearch = async () => {
    if (value) {
      const data = await exerciseData();
      console.log(data);
      setValue("");
    }
  };

  return (
    <Stack maxWidth="1500px" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{
          fontSize: { lg: "45px", xs: "30px" },
        }}
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box
        mb="70px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        gap="10px"
        color="ffffff"
      >
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
              height: "40px",
              padding: "5px",
            },
            width: "100%",
            backgroundColor: "ffffff",
          }}
        />
        <Button
          onClick={handleSearch}
          sx={{
            backgroundColor: "#FF2625",
            border: "2px solid #FF2625",
            color: "#ffffff",
            "&:hover": { color: "#000000" },
            width: "max-content",
            padding: "24px",
            height: "40px",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
