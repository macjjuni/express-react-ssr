import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { render } from './render'
import App from './client/App'

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.send(render(ReactDOMServer.renderToString(<App />)))
})

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`)
})
