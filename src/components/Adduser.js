import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap'
import { ADD } from '../redux/action/action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const Adduser = () => {
    const dispatch = useDispatch()
    const navigatore = useNavigate()

    const userdata = {
        id: "",
        user: "",
    }


    const [data, setData] = useState(userdata)

    const { user } = data

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }   

    const RandomID = Math.random() * (100 - 1) + 1;
  const IntID = parseInt(RandomID)

    const sendData = (e) => {
        e.preventDefault()
        dispatch(ADD({...data, id:IntID}))
        if(!user) {
            return toast.error("Please Enter username !", {
                position: toast.POSITION.TOP_LEFT
              });
        }
        navigatore('/Qestion')
    }
    return (
        <>
            <div className="d-flex justify-content-center"> 
                <Form className='mt-5'>
                    <div className="input-area">
                        <input type="text" name="user" id="user" value={user} placeholder="Enter Your usernmae" autoComplete="off" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='mt-3 d-flex justify-content-center'>
                        <input className="btn btn-dark" type="submit" value="Submit" onClick={(e) => sendData(e)} />
                    </div>
                </Form>
            </div>

            <ToastContainer/>
        </>
    )
}

export default Adduser
