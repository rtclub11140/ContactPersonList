import React, { useState } from 'react'
import {
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'
import {
  RoomOutlined,
  VideoLabelOutlined,
  FilterListOutlined,
  DeleteOutlined,
  EditLocationOutlined,
} from '@material-ui/icons'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95vw',
  },
  iconPin: {
    marginTop: 5,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#ff4081',
    },
  },
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.info.light,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function FilterDataContactPersonList() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" mt={1}>
        <Box>
          <Typography variant="body1">
            <Box fontWeight="fontWeightBold">Filter Data:&nbsp;&nbsp;</Box>
          </Typography>
        </Box>
        <Box flexGrow={1}>
          <Typography variant="body1"> Costomer 2021</Typography>
        </Box>
        <Box>
          <div className={classes.iconPin}>
            <RoomOutlined />
          </div>
        </Box>
        <Box ml={2}>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            <EditLocationOutlined />
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <VideoLabelOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Select to display" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <FilterListOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Filter" />
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <ListItemIcon>
                <DeleteOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Delete this Filter" />
            </StyledMenuItem>
          </StyledMenu>
        </Box>
      </Box>
    </div>
  )
}
