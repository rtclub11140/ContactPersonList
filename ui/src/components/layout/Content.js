import React from "react"
import { Container, Toolbar, Drawer, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer.js'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Toolbar></Toolbar>
      <Container maxWidth="lg">
        
      </Container>  
      <Footer></Footer>
    </main>
  )
}