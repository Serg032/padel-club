import { Box, Typography } from "@mui/material";
import Image from "next/image";
import HomeImage from "../../../assets/home-club.jpeg";
import ClubIconImage from "../../../assets/club-icon.png";

const HomeBody = () => {
  return (
    <Box overflow={"hidden"} color={"white"} bgcolor={"red"} height={"100vh"}>
      <Box
        width={"100%"}
        display={"flex"}
        gap={2}
        justifyContent={"space-around"}
      >
        <Typography variant={"h4"}>Central Padel Club</Typography>
        <Image src={ClubIconImage} alt="club-icon-image" width={50} />
      </Box>
      <Image src={HomeImage} alt="home-image" />
      <Typography variant={"h4"}>Welcome to the home page</Typography>
    </Box>
  );
};

export default HomeBody;
