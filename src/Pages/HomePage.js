import React, { useContext, useRef } from "react";
import { Box, Button, Container, Input, Stack, TextField } from "@mui/material";
import style from "./TrackingPage.module.css";
import DataContext from "../store/data-context";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const dataCtx = useContext(DataContext);
  function onSubmit(e) {
    e.preventDefault();

    const enteredInput = inputRef.current.value;

    dataCtx.setTrackingNumber(enteredInput);
    navigate("/trackShipment");
  }
  return (
    <Box sx={{ mt: 10 }}>
      <Container align="center">
        <form onSubmit={onSubmit}>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={2}
          >
            <TextField
              className={style.button}
              label="Tracking no."
              type="text"
              inputRef={inputRef}
            />
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default HomePage;
