import React, { useState, useEffect } from 'react'
import './viewuser.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import API from '../../components/api'
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

function Viewuser() {
    const id = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const [idUser, setIdUser] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [status, setStatus] = useState(false)

    useEffect(() => {
        _getUserById(id.id)
    }, [])

    async function _getUserById(userId) {
        let result = await API.get('/' + userId)
        console.log(result);
        if (result.status == 200) {
            setIdUser(result.data._id)
            setName(result.data.name)
            setAddress(result.data.address)
            setJobTitle(result.data.job_title)
            setPhoneNumber(result.data.phone_number)
            setCountry(result.data.country)
            setStatus(result.data.status)
        }
    }

    function handleConfirmAlert() {
        swal({
            title: "Are you sure you want to delete this user ?",
            icon: "warning",
            closeOnClickOutside: true,
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
                confirm: {
                    text: "Delete",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: false
                }
            },
        }).then((value) => {
            console.log(value);
            if (value === true) {
                swal.close()
                deleteUser(idUser)
            }
        })
    }

    async function deleteUser(id) {
        const result = await API.delete(`/${id}`)
        if (result.data.acknowledged) {
            // window.history.go(0)
            navigate('/list-user' + location.search)
        }
    }


    return (
        <div className='viewUser'>
            <Sidebar />
            <div className="viewUserContainer">
                <Navbar />
                <div className="viewUserContent">
                    <div className="top">
                        <h2>User Detail</h2>
                    </div>
                    <div className="bottom">
                        <div className="detailField">
                            <label>Name</label>
                            <label>:</label>
                            <span>{name}</span>
                        </div>
                        <div className="detailField">
                            <label>Address</label>
                            <label>:</label>
                            <span>{address}</span>
                        </div>
                        <div className="detailField">
                            <label>Country</label>
                            <label>:</label>
                            <span>{country}</span>
                        </div>
                        <div className="detailField">
                            <label>Phone Number</label>
                            <label>:</label>
                            <span>{phoneNumber}</span>
                        </div>
                        <div className="detailField">
                            <label>Job Title</label>
                            <label>:</label>
                            <span>{jobTitle}</span>
                        </div>
                        <div className="detailField">
                            <label>Status</label>
                            <label>:</label>
                            <span>{status == true ? 'Active' : 'Inactive'}</span>
                        </div>
                    </div>
                    <div className="buttonBack">
                        <Button variant='outlined' size='large' color='success' onClick={() => window.history.back()}>Back</Button>
                        <Button variant='outlined' size='large' color='error' onClick={() => handleConfirmAlert()}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewuser