import React, { useState } from 'react'
import {
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  Box,
} from '@material-ui/core'
import { Add, Close } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { Tag } from 'antd'
import ModalAllFields from './ModalAllFields.js'

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

const initialColumn = []

export default function ModalSelectTheFields(props) {
  const { onClose, open } = props
  const [tagColumn, setTagColumn] = useState([])
  const [openModalAllFields, setOpenModalAllFields] = useState(false)

  const handleClose = () => {
    setTagColumn(initialColumn)
    onClose()
  }

  const handleSaveColumnClick = (value) => {
    setTagColumn(initialColumn)
    console.log('tagColumn : ', tagColumn)
    onClose({ selectedValue: tagColumn })
  }

  const handleCloseCompTag = (removedTag) => {
    const tags = tagColumn.filter((tag) => tag !== removedTag)
    setTagColumn(tags)
  }

  // Modal All Fields
  const handleClickOpenModalAllFields = () => {
    setOpenModalAllFields(true)
  }

  const handleCloseModalAllFields = (value) => {
    let result = tagColumn.filter((col) => {
      return value.selectedValue.includes(col)
    })
    setOpenModalAllFields(false)
    if (result.length > 0) {
      // select radio dulipcate
      setTagColumn(tagColumn)
    } else {
      if (value.selectedValue.length > 0) {
        setTagColumn([value.selectedValue, ...tagColumn])
      }
    }
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
        Select the fields to display
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box>
            <Typography variant="body1">
              <Box fontWeight="fontWeightBold">Column Info</Box>
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" m={1}>
          {tagColumn &&
            tagColumn.map((tag, index) => {
              return (
                <Box m={1}>
                  <Tag
                    key={tag}
                    onClose={() => handleCloseCompTag(tag)}
                    style={{ width: '150px', textAlign: 'center' }}
                    closable
                  >
                    <span>{tag}</span>
                  </Tag>
                </Box>
              )
            })}
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={handleClickOpenModalAllFields}
          >
            Add Field
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSaveColumnClick} color="secondary">
          Save
        </Button>
        <Button autoFocus onClick={handleClose} color="dark">
          Cancle
        </Button>
      </DialogActions>
      <ModalAllFields
        open={openModalAllFields}
        onClose={handleCloseModalAllFields}
      />
    </Dialog>
  )
}
