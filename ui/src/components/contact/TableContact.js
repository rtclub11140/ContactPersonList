import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import dayjs from 'dayjs'
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    width: '95vw',
  },
  container: {
    //maxHeight: 440,
    height: '100vh',
  },
})

export default function TableContact() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [contact, setContact] = useState([])
  const classes = useStyles()

  useEffect(() => {
    const loadContract = async () => {
      const { data } = await axios.get('json/mock_data.json')
      setContact(data)
    }
    loadContract()
  }, [])

  const columns = [
    { id: 'name_surname', label: 'ผู้ติดต่อ', minWidth: 170, align: 'center' },
    { id: 'mobile_number', label: 'เบอร์โทรศัพท์มือถือ', minWidth: 170 },
    { id: 'company', label: 'บริษัท', minWidth: 170 },
    {
      id: 'add_date',
      label: 'ติดต่อล่าสุด',
      minWidth: 170,
      format: (value) => {
        console.log('value : ', value)
        console.log('rrrrr : ', dayjs(value).format('DD/MM/YYYY'))
        return dayjs(value).format('DD/MM/YYYY')
      },
      align: 'center',
    },
    {
      id: 'edit_date',
      label: 'Edit Date',
      minWidth: 170,
      format: (value) => dayjs(value).format('DD/MM/YYYY'),
      align: 'center',
    },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'industrial', label: 'Industrial', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 170 },
    { id: 'website', label: 'Website', minWidth: 170 },
    { id: 'activity', label: 'Activity', minWidth: 170 },
    { id: 'telephone', label: 'Telephone', minWidth: 170 },
  ]

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contact
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={contact.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
