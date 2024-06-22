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
	);
	pipe(c.env.outgoing);
	return RESPONSE_ALREADY_SENT;
});

serve({ fetch: app.fetch, port: 3002 }, (info) => {
	console.log(`Listening on ${info.address}:${info.port}`);
});

export default app;
