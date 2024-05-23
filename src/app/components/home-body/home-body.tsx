import { Box, Typography } from "@mui/material";
import Image from "next/image";
import HomeImage from "../../../assets/home-club.jpeg";
import ClubIconImage from "../../../assets/club-icon.png";
import theme from "@/app/theme";
import OurServices from "../our-services/our-services";

const HomeBody = () => {
  return (
    <Box
      color={"white"}
      bgcolor={theme.palette.secondary.main}
      paddingBottom={10}
    >
      <Box
        width={"100%"}
        display={"flex"}
        gap={2}
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={1}
        paddingLeft={2}
        paddingRight={2}
      >
        <Typography variant={"h5"} fontFamily={"fantasy"}>
          Central Padel Club
        </Typography>
        <Image src={ClubIconImage} alt="club-icon-image" width={60} />
      </Box>
      <Image src={HomeImage} alt="home-image" priority />
      <Box padding={3} display={"flex"} flexDirection={"column"} gap={4}>
        <Typography textAlign={"justify"} variant={"h6"} fontFamily={"fantasy"}>
          ¿Qué te ofrecemos? 👋🎾
        </Typography>
        <Typography
          textAlign={"justify"}
          variant={"body1"}
          fontFamily={"fantasy"}
        >
          Disfruta de la comodidad de instalaciones de primera categoría, desde
          vestuarios recién reformados hasta un sistema domotizado para acceso e
          iluminación durante todo el año. Nuestro servicio de parking recién
          inaugurado y opciones gastronómicas en la cafetería, bar y terraza,
          completan tu experiencia en CENTRAL PADEL CLUB.
        </Typography>
      </Box>
      <OurServices />
    </Box>
  );
};

export default HomeBody;
