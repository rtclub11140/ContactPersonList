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
  LocalBar,
  VideoLabelOutlined,
  FilterListOutlined,
  DeleteOutlined,
  Edit,
} from '@material-ui/icons'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import ModalSelectTheFields from './ModalSelectTheFields.js'

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

const initialColumn = [
  'name_surname',
  'mobile_number',
  'company',
  'add_date',
  'edit_date',
  'email',
  'industrial',
  'status',
  'website',
  'activity',
  'telephone',
]

export default function FilterDataContactPersonList(props) {
  const { getColumnDisplay } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = React.useState(initialColumn)
  const classes = useStyles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleClickOpenModalSelectTheFields = () => {
    setOpen(true)
  }

  const handleCloseModalSelectTheFields = (value) => {
    // value มาจาก modal
    console.log('handleCloseModalSelectTheFields value : ', value)
    console.log(
      'handleCloseModalSelectTheFields selectedValue : ',
      selectedValue
    )
    setOpen(false)
    setSelectedValue(value)
    getColumnDisplay(value)
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
            <LocalBar />
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
            <Edit />
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <StyledMenuItem
              onClick={(event) => handleClickOpenModalSelectTheFields(event)}
            >
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
      <ModalSelectTheFields
        open={open}
        onClose={handleCloseModalSelectTheFields}
      />
    </div>
  )
}
