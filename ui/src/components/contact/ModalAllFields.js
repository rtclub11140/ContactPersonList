import React, { useState } from 'react'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  Box,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: 500,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '100%',
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

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

export default function ModalAllFields(props) {
  const { onClose, open } = props
  const [listColumn, setListColumn] = useState(initialColumn)

  const handleClose = () => {
    onClose()
  }

  const handleListItemClick = (value) => {
    setListColumn(initialColumn)
    onClose({ selectedValue: listColumn })
  }

  return (
    <Dialog
      onClose={handleClose}
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      maxWidth="lg"
    >
      <DialogTitle id="dialog-title" onClose={handleClose}>
        Select Column
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" alignItems="center" m={1}>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1">
              {listColumn &&
                listColumn.map((list) => {
                  return (
                    <FormControlLabel
                      value={list}
                      control={<Radio />}
                      label={list}
                    />
                  )
                })}
            </RadioGroup>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleListItemClick} color="secondary">
          Okay
        </Button>
        <Button autoFocus onClick={handleClose} color="dark">
          Cancle
        </Button>
      </DialogActions>
    </Dialog>
  )
}
