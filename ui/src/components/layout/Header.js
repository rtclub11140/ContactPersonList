import React from 'react'
import {
  AppBar,
  Toolbar,
  Input,
  Typography,
  Container,
  Avatar,
} from '@material-ui/core'
import {
  SearchOutlined,
  MessageOutlined,
  NotificationsNoneOutlined,
  HelpOutlineOutlined,
  AppsOutlined,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import logo from 'assets/images/icon-minecraft.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  spacer: {
    flexGrow: 1,
  },
  input: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  vl: {
    borderLeft: '2px solid #85929E',
    marginLeft: 10,
    height: 30,
  },
  avatar: {
    margin: 5,
    width: 30,
    height: 30,
  },
  subMenu: {
    marginLeft: 20,
    marginTop: 10,
    cursor: 'pointer',
    '&:hover': {
      color: '#ff4081',
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <img src={logo} alt="Company's name" className={classes.logoImage} />
        <Container>
          <Typography variant="subtitle2">Conpany's name</Typography>
          <Typography variant="caption">Siogan of the company</Typography>
        </Container>
        <div className={classes.spacer}></div>
        <div className={classes.subMenu}>
          <SearchOutlined />
        </div>
        <Input
          placeholder="Search"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <div className={classes.vl}></div>
        <div className={classes.subMenu}>
          <MessageOutlined />
        </div>
        <div className={classes.subMenu}>
          <NotificationsNoneOutlined />
        </div>
        <div className={classes.subMenu}>
          <HelpOutlineOutlined />
        </div>
        <div className={classes.subMenu}>
          <AppsOutlined />
        </div>
        <div className={classes.subMenu}>
          <Avatar
            alt="Remy Sharp"
            src="assets/images/icon-avatar.jpg"
            className={classes.avatar}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}
