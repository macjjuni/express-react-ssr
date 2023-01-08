import React from 'react'
import Header from './layout/header'
import Main from './layout/main'
import Component from './component/component'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Component />
      </Main>
    </>
  )
}

export default App
