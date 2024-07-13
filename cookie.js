const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/formcookies.html");
});
app.post("/setcookie", (req, res) => {
  const { firstname, lastname } = req.body;
  res.cookie("userinfo", JSON.stringify({ firstname, lastname }), {
    maxAge: 900000,
  });
  res.send("Cookie has been set");
});
app.get("/getcookie", (req, res) => {
  const userinfo = req.cookies.userinfo;
  const { firstname, lastname } = JSON.parse(userinfo);
  res.send(`Cookie found: First Name - ${firstname}, Last Name - ${lastname}`);
});
app.get("/clearcookie", (req, res) => {
  res.clearCookie("userinfo");
  res.send("Cookie cleared");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
