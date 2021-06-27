import React from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import { ArrowDropDownCircleOutlined, Add, Settings } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  iconCircle: {
    marginTop: 5,
    marginLeft: 10,
     cursor: 'pointer',
    '&:hover': {
       color: "#ff4081",
    },
  },
  iconSetting: {
    marginTop: 5,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
       color: "#ff4081",
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
}))

export default function HeaderContactPersonList() {
  const classes  = useStyles()
  return (
     <div className={classes.root}>
      <Box display="flex">
        <Box>
          <Typography variant="h5" >Contact Person List</Typography>
        </Box>
        <Box flexGrow={1}>
          <div className={classes.iconCircle}><ArrowDropDownCircleOutlined /></div>
        </Box>
        <Box>
          <Button variant="outlined" startIcon={<Add />} className={classes.button}>
            Add Contact Person
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" className={classes.button}>
            Imported
          </Button>
        </Box>
        <Box>
          <div className={classes.iconSetting}><Settings/></div> 
        </Box>                   
      </Box>
    </div>
  )
}