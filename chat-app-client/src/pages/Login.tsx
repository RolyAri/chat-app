import React, { useRef, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Card,
  CircularProgress,
  Alert,
} from "@mui/material";
import useLoginUser from "../hooks/loginUser";
import useRegisterUser from "../hooks/registerUser";

interface LoginProps {
  setIsUserLogged: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({setIsUserLogged}) => {
  const [showLogin, setShowLogin] = useState(true);
  const loginForm = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({});
  const [registerUser, { data: registerData, loading: l1, error: e1 }] = useRegisterUser();
  const [loginUser, { loading: l2, error: e2}] = useLoginUser();

  if (l1 || l2) {
    return (
      <Box
      display="flex"
      justifyContent = "center"
      alignItems="center"
      height="100vh"
      >
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="h6">Registrando...</Typography>
        </Box>
      </Box>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (showLogin) {
      const token = await loginUser({variables:{userLogin: formData}})
      if(token){
        setIsUserLogged(true)
      }
    } else {
      await registerUser({
        variables: {
          userNew: formData,
        },
      });
    }
  };

  return (
    <Box
      ref={loginForm}
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Card sx={{ padding: "10px" }}>
        <Stack direction="column" spacing={2} sx={{ width: "400px" }}>
          {registerData && (
            <Alert severity="success">
              {registerData.signupUser.firstName} registrado con éxito
            </Alert>
          )}
          {e1 && <Alert severity="error">{e1.message}</Alert>}
          {e2 && <Alert severity="error">{e2.message}</Alert>}
          <Typography variant="h5">
            Please {showLogin ? "Login" : "SignUp"}
          </Typography>
          {!showLogin && (
            <>
              <TextField
                name="firstName"
                label="First Name"
                variant="standard"
                onChange={handleChange}
                required
              />
              <TextField
                name="lastName"
                label="Last Name"
                variant="standard"
                onChange={handleChange}
                required
              />
            </>
          )}

          <TextField
            name="email"
            type="email"
            label="email"
            variant="standard"
            onChange={handleChange}
            required
          />
          <TextField
            name="password"
            type="password"
            label="password"
            variant="standard"
            onChange={handleChange}
            required
          />
          <Typography
            textAlign="center"
            variant="subtitle1"
            onClick={() => {
              setShowLogin((prev) => !prev);
              setFormData({});
              if (loginForm.current) {
                loginForm.current.reset();
              }
            }}
          >
            {showLogin ? "Signup?" : "Login?"}
          </Typography>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default Login;
