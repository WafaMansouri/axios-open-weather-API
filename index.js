let express = require("express");
let port = 5000;
let app = express();
let axios = require("axios");
app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
app.get("/", (req, res) => {
  res.send("<h1>Welcom to open weather</h1>");
});
app.get("/:cityName", (req, res) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=6ca067ea444823b74226618d63afc0f5`
    )
    .then((result) => res.send(result.data));
});
