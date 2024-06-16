import { Hono } from "hono";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";
import Layout from "../client/HTML";
import { serve } from "@hono/node-server";
import { RESPONSE_ALREADY_SENT } from "@hono/node-server/utils/response";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("/*", serveStatic({ root: "./dist", index: "" }));

app.get("/*", (c) => {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <Layout>
      <App />
    </Layout>,
    {
      onShellReady() {
        c.status = 200;
        c.header("Content-type", "text/html");
        pipe(c.env.outgoing);
      },
      onShellError() {
        c.status = 500;
        c.body("<!doctype html><p>Loading...</p>");
      },
    },
  );
  return RESPONSE_ALREADY_SENT;
});

serve({ fetch: app.fetch, port: 3002 }, (info) => {
  console.log(`Listening on ${info.address}:${info.port}`);
});

export default app;
