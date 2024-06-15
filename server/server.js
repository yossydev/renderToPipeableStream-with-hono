import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";

const app = express();

app.get("/*", (_, res) => {
  const entryPoint = ["../client/index.js"];

  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <App />,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    },
  );
});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
