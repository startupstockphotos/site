const Search = require('templates/components/Search.js')

module.exports = function App (props, children) {
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
        <link rel='canonical' href='https://startupstockphotos.com'>
        <title>${props.title}</title>
        <link rel='stylesheet' href='/main.css' />
      </head>

      <body>
        ${Search(props)}
        ${children}

        <div style='display: none'>
          <svg id='x' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3" style="display:inline-block;vertical-align:middle;overflow:visible;"><path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"></path><path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179"></path></svg>
        </div>

        <script>
          __hydrate = ${JSON.stringify(props)}
        </script>
        <script src='/client.js'></script>
      </body>
    </html>
  `
}
