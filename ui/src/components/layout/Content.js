import React, { useEffect, useState } from "react"
import clsx from 'clsx'
import { Container, Toolbar, Drawer, Box, Typography, CssBaseline, AppBar, IconButton, Divider, List } from '@material-ui/core'
import { DashboardOutlined, RecentActorsOutlined, BrokenImageOutlined, SettingsOutlined, LensOutlined, ChevronLeft, ChevronRight, Menu } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Footer from './Footer.js'
import NavItem from './NavItem.js'
import HeaderContactPersonList from '../contact/HeaderContactPersonList.js'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 64
    
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginTop:64
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
    backgroundColor: '#171C2D',
    color: '#FFFFFF'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
     
  },
   content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
   contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
   spacer: {
    flexGrow:1
  },
  titleHeaderMenu: {
    color: '#FFFFFF',
    marginLeft: 10
  },
  textWhite: {
      color: '#FFFFFF'
   }
}))



const items = [
  {
    number:1,
    href: '/app/dashboard',
    icon: DashboardOutlined,
    title: 'Dashboard'
  },
  {
    number: 2,
    href: '/app/contactpersonList',
    icon: RecentActorsOutlined,
    title: 'Contact Person List'
  },
  {
    number: 3,
    href: '/app/report',
    icon: BrokenImageOutlined,
    title: 'Report'
  },  
  {
    number: 4,
    href: '/app/setting',
    icon: SettingsOutlined,
    title: 'Setting' ,
    submenu: [
      {
        number: 41,
        href: '/app/submenu/managelayout',
        icon: LensOutlined,
        title: 'Manage Layout'
      },
      {
        number: 42,
        href: '/app/submenu/member',
        icon: LensOutlined,
        title: 'Member'
      },
      {
        number: 43,
        href: '/app/submenu/dataaccess',
        icon: LensOutlined,
        title: 'Data Access'
      },
      {
        number: 44,
        href: '/app/submenu/systemlog',
        icon: LensOutlined,
        title: 'System Log'
      }
    ]
  }   
]


export default function Content() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />           
          </IconButton>
         <HeaderContactPersonList/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >        
        <div className={classes.drawerHeader}>
          <Typography variant="h6" noWrap className={classes.titleHeaderMenu}>
            Contact
          </Typography>
          <div className={classes.spacer}></div>
          <IconButton onClick={handleDrawerClose} className={ classes.textWhite}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <Box sx={{ p: 2 }}>
          <List>
            {items.map((item) => (
              <NavItem
                href={item.href}
                key={item.number}
                title={item.title}
                icon={item.icon}
                item={item}
              />             
            ))}
          </List>
        </Box>        
      </Drawer>       
     
      {/*
      <main className={classes.content}>
      <Toolbar></Toolbar>
      <Container maxWidth="lg">
        
      </Container>  
      <Footer></Footer>
    </main>
      */}
    
    </div>
    
  )
}