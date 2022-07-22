const express = require("express");
const fetch = require("node-fetch");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/dinoname", async (req, res) => {
  // run code
  const fetchApi = await fetch(
    "https://dinoipsum.com/api/?format=json&words=2&paragraphs=1"
  );

  const dinoNameResponse = await fetchApi.json();
  console.log(dinoNameResponse);
  res.status(200).json(dinoNameResponse);
});

app.get("/dinoimage", async (req, res) => {
  // run code
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  const fetchApi = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20",
    options
  );
  const dinoImageResponse = await fetchApi.json();
  console.log(dinoImageResponse);
  res.status(200).json(dinoImageResponse);
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
