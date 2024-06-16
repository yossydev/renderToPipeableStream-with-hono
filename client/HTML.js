import React from "react";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React Server Side Rendring</title>
      </head>
      <body id="root">{children}</body>
      <script src="bundle.js"></script>
    </html>
  );
}
