import React from 'react'

export const render = (RootComponent: React.ReactNode) => `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>Express-React-SSR</title>
  </head>
  <body>
    <div id="app">${RootComponent}</div>
  </body>
  </html>
`
