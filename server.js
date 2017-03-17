import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import fs from 'fs';
import { renderToString } from 'react-dom/server'
import App from './containers/App';
import { match, RoutingContext } from 'react-router'
import { createPage, write, writeError, writeNotFound, redirect } from './utils/server-utils'
import routes from './src/routes/RootRoute'
const app = Express();
const port = 3000;

app.use(handleRender);

function renderApp(props, res) {
  const markup = renderToString(<RoutingContext {...props}/>)
  const html = createPage(markup)
  write(html, 'text/html', res)
}

function handleRender(req, res) {
 if (/build/.test(req.url)) {
    fs.readFile(`.${req.url}`, (err, data) => {
      write(data, 'text/javascript', res)
    })
  }

  else {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error)
        writeError('ERROR!', res)
      else if (redirectLocation)
        redirect(redirectLocation, res)
      else if (renderProps)
        renderApp(renderProps, res)
      else
        writeNotFound(res)
    })
  }
}

app.listen(port);
