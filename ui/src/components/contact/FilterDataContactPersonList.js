import React from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import { RoomOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  iconPin: {
    marginTop: 5,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
       color: "#ff4081",
    },
  },
}))

export default function FilterDataContactPersonList() {
  const classes  = useStyles()
  return (
     <div className={classes.root}>
      <Box display="flex" alignItems="center" mt={1}>
        <Box >
          <Typography variant="body1"><Box fontWeight="fontWeightBold">Filter Data:&nbsp;&nbsp;</Box></Typography>
        </Box>
        <Box flexGrow={1} >
          <Typography variant="body1"> Costomer 2021</Typography>
        </Box>
        <Box>
          <div className={classes.iconPin}><RoomOutlined/></div> 
        </Box>         
        <Box ml={2}>
          <Button variant="outlined" className={classes.button}>
            Imported
          </Button>
        </Box>                          
      </Box>
    </div>
  )
}