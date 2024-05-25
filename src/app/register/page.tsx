"use client";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import theme from "../theme";
import BottomBar from "../components/topbar/topbar";
import MembersService from "@/services/members-service";
import { MemberType } from "@/entities/members";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiFormLabel-root": {
    color: "grey", // color azul profesional del label por defecto
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey", // color azul profesional por defecto
    },
    "&:hover fieldset": {
      borderColor: "grey", // color azul profesional al pasar el mouse
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // color blanco al hacer focus
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "grey", // color azul profesional del texto por defecto
  },
  "&.Mui-focused .MuiOutlinedInput-input": {
    color: "white", // color blanco del texto al hacer focus
  },
});

const CustomButton = styled(Button)(() => ({
  backgroundColor: "whitesmoke", // color azul cuando está habilitado
  color: "black", // texto blanco cuando está habilitado
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: "black", // color azul oscuro al pasar el mouse
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.primary.main, // color gris cuando está deshabilitado
    color: "gray", // texto blanco cuando está deshabilitado
  },
  marginTop: "1rem",
}));

const membersService = new MembersService();

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={theme.palette.secondary.main}
        minHeight={"100vh"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        padding={2}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant="h4">Registro</Typography>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <CustomTextField
            label="Nombre"
            variant="outlined"
            required={true}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                name: event.target.value,
              })
            }
          />
          <CustomTextField
            label="Email"
            variant="outlined"
            onChange={(event) =>
              setFormValues({
                ...formValues,
                email: event.target.value,
              })
            }
          />
          <CustomTextField
            label="Nombre de usuario"
            variant="outlined"
            onChange={(event) => {
              setFormValues({
                ...formValues,
                username: event.target.value,
              });
            }}
          />
          <CustomTextField
            label="contraseña"
            variant="outlined"
            type="password"
            onChange={(event) => {
              setFormValues({
                ...formValues,
                password: event.target.value,
              });
              setPasswordsMatch(
                event.target.value !== formValues.repeatPassword ||
                  event.target.value === "" ||
                  formValues.repeatPassword === ""
              );
            }}
          />
          <CustomTextField
            label="Repetir contraseña"
            variant="outlined"
            type="password"
            onChange={(event) => {
              setFormValues({
                ...formValues,
                repeatPassword: event.target.value,
              });
              setPasswordsMatch(
                event.target.value !== formValues.password ||
                  event.target.value === "" ||
                  formValues.password === ""
              );
            }}
          />
          <CustomButton
            type="submit"
            variant="contained"
            disabled={passwordsMatch}
            onClick={() => {
              membersService
                .register({
                  name: formValues.name,
                  email: formValues.email,
                  username: formValues.username,
                  password: formValues.password,
                  money: 0,
                  type: MemberType.USER,
                })
                .then((response) => {
                  console.log(response);
                });
            }}
          >
            <Typography variant="button">Registrarse</Typography>
          </CustomButton>
        </form>
      </Box>
      <BottomBar />
    </ThemeProvider>
  );
};

export default Register;
