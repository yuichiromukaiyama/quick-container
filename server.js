const express = require("express");
const fs = require("fs");
const app = express();

const json = JSON.parse(fs.readFileSync("./config.json").toString());

app.get("*", (req, res) => {
  res.send(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SampleApp</title>
  </head>
  <style>
    #root {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
  </style>
  <body>
    <div id="root">
      <h1>${json.title}</h1>
    </div>
  </body>
</html>`);
});

app.listen(json.port, () => {
  console.log(`Start Application http://localhost:${json.port}`);
});
