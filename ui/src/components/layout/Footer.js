import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}))
export default function Footer() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box p={1}>
            <Typography variant="subtitle2" gutterBottom>
              E-Office Automation (V1.0.0#1000) | About E-Office | Manual |
              Report a problem
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">
              Powered by a free JigsawOffice license. Please consider purchasing
              it today
            </Typography>
          </Box>
        </Box>
      </div>
    </>
  )
}
