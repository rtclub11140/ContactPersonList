import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Header from 'components/layout/Header.js'
import Content from 'components/layout/Content.js'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}))

export default function Layout() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline></CssBaseline>
      <Box className={classes.root}>
        <Header></Header>
        <Content></Content>
      </Box>
    </>
  )
}
