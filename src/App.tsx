import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./App.css";
import {
  createTheme,
  ThemeProvider,
  Box,
  Grid2,
  Typography,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const center = {
    lat: 46.88361358642578,
    lng: 28.752653121948242,
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const markerPosition: google.maps.LatLngLiteral = {
    lat: 46.88361358642578,
    lng: 28.752653121948242,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          width={windowSize.width}
          height={windowSize.height}
        >
          <source src="/wedding/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-overlay">
        <Box sx={{ width: "100%" }}>
          <Grid2 container>
            <Grid2
              height={windowSize.height}
              size={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div></div>
              <Box
                sx={{
                  fontSize: "72px",
                  fontFamily: "Allegretto Script One, cursive",
                }}
              >
                <p>Андрей</p>
                <p>&</p>
                <p>Марина</p>
              </Box>
              <Box>
                <Typography fontSize={36} fontWeight={100}>
                  июль
                </Typography>
                <Typography fontSize={72} fontWeight={200}>
                  24
                </Typography>
                <Typography fontSize={36} fontWeight={100}>
                  2025
                </Typography>
              </Box>
            </Grid2>
            <Grid2
              height={windowSize.height}
              size={{ xs: 12, md: 3 }}
              sx={{
                bgcolor: "rgba(255,255,255,0.4)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Typography fontSize={36} fontWeight={100}>Дорогие гости</Typography>
              <Box>
                <Typography>
                  С радостью приглашаем вас разделить с нами особенный день —
                  день нашей свадьбы! Мы будем счастливы видеть вас среди наших
                  самых близких, чтобы отпраздновать этот незабываемый момент
                  вместе.
                </Typography>
              </Box>
              <Box></Box>
            </Grid2>
            <Grid2
              height={windowSize.height}
              size={{ xs: 12, md: 3 }}
              sx={{ bgcolor: "rgba(255,255,255,0.4)", padding: 5 }}
            >
              <Typography>Тайминг</Typography>
            </Grid2>
            <Grid2
              height={windowSize.height}
              size={{ xs: 12, md: 3 }}
              sx={{
                bgcolor: "rgba(255,255,255,0.4)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Typography fontSize={36}>Локация</Typography>
              <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                id="google-maps-script"
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                >
                </GoogleMap>
              </LoadScript>
              <div></div>
            </Grid2>
            <Grid2
              height={windowSize.height}
              size={{ xs: 12, md: 3 }}
              sx={{ bgcolor: "rgba(255,255,255,0.4)", padding: 5 }}
            >
              <Typography>Детали</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
