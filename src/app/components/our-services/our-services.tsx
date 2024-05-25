import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Imm from "../../../assets/Premier-Padel-Doha-Ooredoo-Qatar-Major.jpg.webp";
import Imm2 from "../../../assets/bea-gonzalez-premier-padel.avif";
import Imm3 from "../../../assets/preview_20220520_Fernando_Belasteguin.jpg";
import Imm4 from "../../../assets/superpibes.jpeg";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SportsTennisOutlinedIcon from "@mui/icons-material/SportsTennisOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

const OurServices = () => {
  return (
    <Box padding={3} display={"flex"} flexDirection={"column"} gap={4}>
      <Typography variant={"h6"} textAlign={"justify"}>
        Nuestros Servicios 🗓️
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={4}>
        <Box position={"relative"}>
          <Paper>
            <Image src={Imm} alt="first" width={400} height={30} />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              width={"100%"}
              height="100%"
              bgcolor="rgba(0, 0, 0, 0.5)"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <Typography variant={"h6"} color={"white"} fontWeight={300}>
                Escuela
              </Typography>
              <SchoolOutlinedIcon fontSize="large" htmlColor="white" />
            </Box>
          </Paper>
        </Box>
        <Box position={"relative"}>
          <Paper>
            <Image src={Imm2} alt="first" width={400} height={30} />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              width={"100%"}
              height="100%"
              bgcolor="rgba(0, 0, 0, 0.5)"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <Typography variant={"h6"} color={"white"} fontWeight={300}>
                Partidos Nivelados
              </Typography>
              <SportsTennisOutlinedIcon fontSize="large" htmlColor="white" />
            </Box>
          </Paper>
        </Box>
        <Box position={"relative"}>
          <Paper>
            <Image src={Imm3} alt="first" width={400} height={30} />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              width={"100%"}
              height="100%"
              bgcolor="rgba(0, 0, 0, 0.5)"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <Typography variant={"h6"} color={"white"} fontWeight={300}>
                Competicion
              </Typography>
              <EmojiEventsOutlinedIcon fontSize="large" htmlColor="white" />
            </Box>
          </Paper>
        </Box>
        <Box position={"relative"}>
          <Paper>
            <Image src={Imm4} alt="first" width={400} height={30} />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              width={"100%"}
              height="100%"
              bgcolor="rgba(0, 0, 0, 0.5)"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <Typography variant={"h6"} color={"white"} fontWeight={300}>
                Eventos
              </Typography>
              <EventAvailableOutlinedIcon fontSize="large" htmlColor="white" />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
