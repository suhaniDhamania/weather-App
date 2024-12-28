import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./Infobox.css";                              

export default function Infobox({ info }) {

  const RAIN_IMG =
    "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnklMjB3aGVhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_IMG =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
  const COLD_IMG =
    "https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHdoZWF0aGVyfGVufDB8fDB8fHww";
 
    return (
    <div className="Infobox">
      <h2>Wheather Info</h2>
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={
              info.humidity > 80
                ? RAIN_IMG
                : info.temp > 15
                ? HOT_IMG
                : COLD_IMG
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min-Temp={info.tempMin}&deg;C</p>
              <p>Max-Temp={info.tempMax}&deg;C</p>
              <p>
                The Weather can be descibed as {info.weather} and fells like ={" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
