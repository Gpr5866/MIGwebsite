import React, { useState, useEffect } from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import API from '../../components/api'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

function List() {
  const [listUser, setListUser] = useState([]);
  const [listUserSorted, setListUserSorted] = useState([]);
  const [listUserSearched, setListUserSearched] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortKey, setSortKey] = useState(false);

  const _getListUser = async () => {
    const result = await API.get('/').then(({ data }) => data)
    setListUser(result)
  }

  

  useEffect(() => {
    _getListUser();
    console.log('array listUser :', JSON.stringify(listUser, null, 2));
  }, [])

  async function deleteUser(id) {
    const result = await API.delete(`/${id}`)
    if (result.data.acknowledged) {
      window.location.reload()
    }
  }

  function searchTable() {
    console.log(JSON.stringify(searchKeyword.toLowerCase()));
    let arrSearched = []
    let regex = RegExp(searchKeyword, 'i')
    listUser.filter((e) => { return regex.test(e.name) }).map((data) => {
      // console.log('data:', JSON.stringify(data, null, 2));
      arrSearched.push(data)
    })
    console.log('data:', JSON.stringify(arrSearched, null, 2));
    setListUserSearched(arrSearched)
  }

  function clearSearch() {
    window.location.reload()
  }

  function sortTable(type) {
    console.log(`sort ${type}`);
    let sortDirection = sortKey == true ? 'asc' : 'desc'
    if (type == 'name') {
      const sortedList = listUser.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return sortDirection == 'asc' ? -1 : 1
        }
        if (nameA > nameB) {
          return sortDirection == 'asc' ? 1 : -1
        }
        return 0
      })
      console.log("listsorted:", JSON.stringify(sortedList, null, 2));
      setListUserSorted(sortedList)
    }
    if (type == 'status') {
      const sortedList = listUser.sort((a, b) => {
        if (a.status > b.status) {
          return sortDirection == 'asc' ? -1 : 1
        }
        if (a.status < b.status) {
          return sortDirection == 'asc' ? 1 : -1
        }
        return 0
      })
      console.log("listsorted:", JSON.stringify(sortedList, null, 2));
      setListUserSorted(sortedList)
    }

  }

  return (
    <div className='list' >
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="contentList">
          <div className="addNewUser">
            <div className="titleBar">
              <div className="title">
                <h1>User List</h1>
              </div>
              <Link to='/add-user' style={{ textDecoration: 'none' }}>
                <div className="buttonAddNewUser">
                  <AddIcon className='icon' />
                  <div className="textUser">User</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="search">
            <div className="searchBar">
              <div className="searchInput">
                <input
                  type='text'
                  id='search-content'
                  placeholder='Search Name'
                  name='s'
                  onChange={(e) => { setSearchKeyword(e.target.value) }}
                />
              </div>
              {
                listUserSearched.length === 0 ?
                  <div className="searchButton" onClick={() => { searchTable() }}>
                    <SearchIcon />
                  </div>
                  :
                  <div className="searchButton" onClick={() => { clearSearch() }}>
                    <CancelIcon />
                  </div>
              }

            </div>
          </div>

          <TableContainer className='tableContainer' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='tableHead'>No</TableCell>
                  <TableCell className='tableHead' onClick={() => { sortTable('name'); setSortKey(!sortKey) }}>Name</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Job Title</TableCell>
                  <TableCell className='tableHead' align="center" onClick={() => { sortTable('status'); setSortKey(!sortKey) }}>Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  (listUserSearched.length === 0 ? listUser : listUserSearched).map((row, idx) => (
                    <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.address}</TableCell>
                      <TableCell align="center">{row.country}</TableCell>
                      <TableCell align="center">{row.phone_number}</TableCell>
                      <TableCell align="center">{row.job_title}</TableCell>
                      <TableCell align="center" >
                        <span className={`status ${row.status === false ? 'Inactive' : 'Active'}`}>
                          {row.status === false ? 'Inactive' : 'Active'}
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <div className='cellAction'>
                          <Link to={'/view-user/' + row._id} state={{ id: row._id }} style={{ textDecoration: 'none' }}>
                            <div className='viewButton'>View</div>
                          </Link>
                          <Link to={'/edit-user/' + row._id} state={{ id: row._id }} style={{ textDecoration: 'none' }}>
                            <div className='editButton'>Edit</div>
                          </Link>
                          <div className='deleteButton' onClick={() => { deleteUser(row._id) }}>Delete</div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

      </div>
    </div>
  )
}

export default List