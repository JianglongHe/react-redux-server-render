import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import App from './containers/App';
import rootReducer from './reducers'
const app = Express();
const port = 3000;

app.use(handleRender);
function handleRender(req, res) {
  const store = createStore(rootReducer);
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const initialState = store.getState();
  res.send(renderFullPage(html, initialState));
}

function renderFullPage(html, initialState) {
  return `
   <!doctype html>
   <html>
     <head>
       <title>Redux Universal Example</title>
     </head>
     <body>
       <div id="app">${html}</div
       <script src="/build/bundle.js"></script>
     </body>
   </html>
   `
}

app.listen(port);
