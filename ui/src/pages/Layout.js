import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Header from 'components/layout/Header.js'
import Content from 'components/layout/Content.js'

export default function Layout() {
  return (
    <>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
    </>
  )
}
