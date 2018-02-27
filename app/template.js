export default (html, preloadedState) => {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>ArchiNews</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c',
            )}
          </script>
          <script src="bundle.js"></script>
        </body>
      </html>
  `;
};
