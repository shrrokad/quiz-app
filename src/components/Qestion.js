import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { SENDDATA } from '../redux/action/action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './style.css'
import { v4 as uuidv4 } from 'uuid';

const Qestion = () => {
    const dispatch = useDispatch()

    const navigatore = useNavigate()


    const initialstate = {
        QuestionID: "",
        Question: "",
        option: [],
        Answer: "",
    }

    const [disabled, setDisabled] = useState(true)

    const [qestion, setQestion] = useState(initialstate)

    const { Question, Answer } = qestion

    const [optionv1, setOptionv1] = useState({
        id: "",
        optionvalue: "",
    })
    const [optionv2, setOptionv2] = useState({
        id: "",
        optionvalue: "",
    })
    const [optionv3, setOptionv3] = useState({
        id: "",
        optionvalue: "",
    })
    const [optionv4, setOptionv4] = useState({
        id: "",
        optionvalue: "",
    })

    const { optionvalue1 } = optionv1
    const { optionvalue2 } = optionv2
    const { optionvalue3 } = optionv3
    const { optionvalue4 } = optionv4

    const handleChange = (e) => {
        setQestion({ ...qestion, QuestionID: uuidv4(), [e.target.name]: e.target.value })
    }

    const handleChangevalue1 = (e) => {
        setOptionv1({ ...optionv1, id: uuidv4(), [e.target.name]: e.target.value })
    }

    const handleChangevalue2 = (e) => {
        setOptionv2({ ...optionv2, id: uuidv4(), [e.target.name]: e.target.value })
    }

    const handleChangevalue3 = (e) => {
        setOptionv3({ ...optionv3, id: uuidv4(), [e.target.name]: e.target.value })
    }

    const handleChangevalue4 = (e) => {
        setOptionv4({ ...optionv4, id: uuidv4(), [e.target.name]: e.target.value })
        // setDisabled(false)
    }



    const handelsubmit = (e) => {
        if (!Answer) {
            e.preventDefault()
            return toast.error("Please Select your answer !", {
                position: toast.POSITION.TOP_LEFT
            });
        }
        if (!Question && !optionvalue1 && !optionvalue2 && !optionvalue3 && !optionvalue4) {
            return toast.error("Please Fill all Field !", {
                position: toast.POSITION.TOP_LEFT
            });
        }
        qestion.option.push(optionv1, optionv2, optionv3, optionv4)
        dispatch(SENDDATA(qestion))
        navigatore('/Qestion')

    }

    const [button, setButton] = useState(false)
    const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)



    const colorechange = () => {
        setButton(!button)
    }
    const colorechange1 = () => {
        setButton1(!button1)
    }
    const colorechange2 = () => {
        setButton2(!button2)
    }
    const colorechange3 = () => {
        setButton3(!button3)
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="w-100 h-100">
                            <Form className='mt-5' onSubmit={(e) => handelsubmit(e)}>
                                <div className="input-area mt-3">
                                    <input type="text" name="Question" id="Question" value={Question} placeholder="Enter Your question" className='form-control' autoComplete="off" onChange={(e) => handleChange(e)} />
                                </div>

                                <div>
                                    <div className="input-area d-flex align-item-center mt-3">
                                        <input onClick={colorechange} type="radio" className='radioinput' id="html" name="Answer" value={optionv1.id} onChange={(e) => handleChange(e)} />
                                        <input className={(button ? 'toggle-cbtn' : 'form-control')} type="text" name="optionvalue" id="optionvalue" value={optionvalue1} placeholder="Enter option1" autoComplete="off" style={{ marginLeft: "10px" }} onChange={(e) => handleChangevalue1(e)} />
                                    </div>
                                    <div className="input-area d-flex align-item-center mt-3">
                                        <input onClick={colorechange1} type="radio" id="html" name="Answer" value={optionv2.id} onChange={(e) => handleChange(e)} />
                                        <input className={(button1 ? 'toggle-cbtn' : 'form-control')} type="text" name="optionvalue" id="optionvalue" value={optionvalue2} placeholder="Enter option2" autoComplete="off" style={{ marginLeft: "10px" }} onChange={(e) => handleChangevalue2(e)} />
                                    </div>
                                    <div className="input-area d-flex align-item-center mt-3">
                                        <input onClick={colorechange2} type="radio" id="html" name="Answer" value={optionv3.id} onChange={(e) => handleChange(e)} />
                                        <input className={(button2 ? 'toggle-cbtn' : 'form-control')} type="text" name="optionvalue" id="optionvalue" value={optionvalue3} placeholder="Enter option3" autoComplete="off" style={{ marginLeft: "10px" }} onChange={(e) => handleChangevalue3(e)} />
                                    </div>
                                    <div className="input-area d-flex align-item-center mt-3">
                                        <input onClick={colorechange3} type="radio" id="html" name="Answer" value={optionv4.id} onChange={(e) => handleChange(e)} />
                                        <input className={(button3 ? 'toggle-cbtn' : 'form-control')} type="text" name="optionvalue" id="optionvalue" value={optionvalue4} placeholder="Enter option4" autoComplete="off" style={{ marginLeft: "10px" }} onChange={(e) => handleChangevalue4(e)} />
                                    </div>
                                </div>
                                <div className='mt-3 d-flex justify-content-center'>
                                    <input className="btn btn-dark" type="submit" value="Submit" />
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Qestion
