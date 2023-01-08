import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { render } from './render'
import Component from './component/Component'

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.send(render(ReactDOMServer.renderToString(<Component />)))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
