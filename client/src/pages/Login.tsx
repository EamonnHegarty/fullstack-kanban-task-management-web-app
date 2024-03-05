import React, { FC, ReactElement, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Loader } from "../components/Loader";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { UserInfo } from "../types/UserInfo";

export const Login: FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/desktop");
    }
  }, [userInfo, navigate]);

  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = event.target;
    setEmail(value);
  };

  const handleOnPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value }: { value: string } = event.target;
    setPassword(value);
  };

  const handleOnSubmitForm = () => {
    const promise = login({ email, password }).unwrap();

    promise
      .then((response: UserInfo) => {
        dispatch(setCredentials(response));
        toast.success("Successfully logged In");
        navigate("/desktop");
      })
      .catch(() => {
        toast.error("Invalid email or password");
        console.log("error");
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container
          component="main"
          maxWidth="xs"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: "96px",
                height: "96px",
                backgroundColor: "primary.light",
                marginBottom: "16px",
              }}
            >
              <LockTwoToneIcon
                sx={{ width: "66px", height: "66px", color: "info.light" }}
              />
            </Avatar>
            <Typography component="h1" variant="h5" color="secondary.light">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <FormControl fullWidth>
                <TextField
                  margin="normal"
                  value={email}
                  onChange={handleOnEmailChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  autoFocus
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  margin="normal"
                  value={password}
                  onChange={handleOnPasswordChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
              </FormControl>
              <Button
                onClick={handleOnSubmitForm}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "primary.light",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}
                disabled={isLoading}
              >
                Sign In
              </Button>
              {/* <Link to="/register">
                <Typography variant="h2" color="white">
                  Register
                </Typography>
              </Link> */}
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
