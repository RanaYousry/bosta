import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import theme from "./Theme.js";
// import lang from "../../api/lang";
import CustomizedSteppers from "../Stepper/CustomizedSteppers.js";

const TrackingPageContent = (props) => {
  //LANGUAGE HANDLING
  // let currnetLang = "AR";

  // const handleLang = () => {
  //   currnetLang = currnetLang === "EN" ? "AR" : "EN";
  // };

  // const setLang = (lang) => {
  //   currnetLang = lang;
  // };

  const [steps, setSteps] = useState(0);

  useEffect(() => {
    if (props.currstate === "DELIVERED") {
      setSteps(4);
    } else if (!props.trackingNum) {
      setSteps(0);
    } else {
      setSteps(2);
    }
  }, [props.currstate, props.trackingNum]);

  //Dates Handling
  let createDate = new Date(props.createDate).toLocaleDateString();
  let createDateTime = new Date(props.createDate).toLocaleTimeString();
  let deliveryDate = new Date(props.deliveryDate).toDateString();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ mt: 10 }}>
        <Container sx={{ mb: 5 }}>
          <Card sx={{ boxShadow: "5px 10px rgba(0,0,0,0.02)", py: 2 }}>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={3} sm={12}>
                  <Stack sx={{ mb: 4, alignItems: "left" }}>
                    <Typography variant="h5" gutterBottom>
                      Tracking number {props.trackingNum}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      {props.currstate}
                    </Typography>
                    {!props.trackingNum && (
                      <Typography variant="h4" gutterBottom>
                        Invalid tracking number
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid item md={3} sm={12}>
                  <Stack sx={{ mb: 4, alignItems: "left" }}>
                    <Typography variant="h5" gutterBottom>
                      Last updated
                    </Typography>

                    {props.trackingNum && (
                      <Typography variant="h4" gutterBottom>
                        {" "}
                        {createDate} at {createDateTime}{" "}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid item md={3} sm={12}>
                  <Stack sx={{ mb: 4, alignItems: "left" }}>
                    <Typography variant="h5" gutterBottom>
                      Vendor Name
                    </Typography>
                    {props.trackingNum && (
                      <Typography variant="h4" gutterBottom>
                        Not provided
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid item md={3} sm={12}>
                  <Stack sx={{ mb: 4, alignItems: "left" }}>
                    <Typography variant="h5" gutterBottom>
                      Delivery date
                    </Typography>
                    {props.trackingNum && (
                      <Typography variant="h4" gutterBottom>
                        {deliveryDate}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
        <Container sx={{ mb: 7 }}>
          <CustomizedSteppers steps={steps} />
        </Container>
        {props.trackingNum && (
          <Container>
            <Typography variant="h3" gutterBottom>
              Shipment Details
            </Typography>

            <Grid container sx={{ backgroundColor: "#fafafa", py: 2, px: 2 }}>
              <Grid item md={3} sm={12}>
                <Typography variant="h5">Branch</Typography>
              </Grid>
              <Grid item md={3} sm={12}>
                <Typography variant="h5">Date</Typography>
              </Grid>
              <Grid item md={3} sm={12}>
                <Typography variant="h5">Time</Typography>
              </Grid>
              <Grid item md={3} sm={12}>
                <Typography variant="h5">Details</Typography>
              </Grid>
            </Grid>
          </Container>
        )}
        {props.trackingNum && (
          <Container>
            <Card sx={{ boxShadow: "5px 10px rgba(0,0,0,0.02)" }}>
              <CardContent>
                {props.transitEvents.map((data, i) => (
                  <Grid container key={i} sx={{ px: 2 }}>
                    <Grid item md={3} sm={12}>
                      {data.hub && (
                        <Typography variant="h6">{data.hub}</Typography>
                      )}
                    </Grid>
                    <Grid item md={3} sm={12}>
                      <Typography variant="h6">
                        {new Date(data.timestamp).toLocaleDateString()}
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={12}>
                      <Typography variant="h6">
                        {new Date(data.timestamp).toLocaleTimeString()}
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={12}>
                      <Typography variant="h6">{data.state}</Typography>
                      {data.reason && (
                        <Typography variant="subtitle1">
                          {data.reason}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
};

// <TrackDetails
//   key={i}
//   state={data.state}
//   time={data.timestamp}
//   hub={data.hub}
//   reason={data.reason}
// />
// <Stack direction="row" spacing={12} key={i}>
//   <Typography variant="body1">{data.state}</Typography>
//   <Typography variant="body1">{data.timestamp}</Typography>
//   {data.hub && <Typography variant="body1">{data.hub}</Typography>}
//   {data.reason && (
//     <Typography variant="body1">{data.reason}</Typography>
//   )}
// </Stack>

export default TrackingPageContent;
