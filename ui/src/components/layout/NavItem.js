import React, { useState } from 'react'
import { List, ListItemText, Collapse } from '@material-ui/core'
import MuiListItem from '@material-ui/core/ListItem'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

// https://stackoverflow.com/questions/61486061/how-to-set-selected-and-hover-color-of-listitem-in-material-ui
const ListItem = withStyles({
  root: {
    '&$selected': {
      backgroundColor: 'red',
      color: 'white',
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
    },
    '&$selected:hover': {
      backgroundColor: 'purple',
      color: 'white',
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
    },
    '&:hover': {
      backgroundColor: 'white',
      color: '#000000',
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
    },
  },
  selected: {},
})(MuiListItem)

export default function NavItem({ href, icon: Icon, title, number, item }) {
  const [open, setOpen] = useState(true)
  const classes = useStyles()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      {title === 'Setting' ? (
        <>
          <ListItem button key={number} onClick={handleClick}>
            {Icon && <Icon size="20" />}
            <ListItemText primary={title} style={{ marginLeft: 10 }} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.submenu &&
                item.submenu.map(({ title, icon: Icon, number }) => {
                  return (
                    <ListItem button className={classes.nested} key={number}>
                      {Icon && <Icon size="20" />}
                      <ListItemText
                        primary={title}
                        style={{ marginLeft: 10 }}
                      />
                    </ListItem>
                  )
                })}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItem button key={number}>
          {Icon && <Icon size="20" />}
          <ListItemText primary={title} style={{ marginLeft: 10 }} />
        </ListItem>
      )}
    </>
  )
}
