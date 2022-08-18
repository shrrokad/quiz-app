import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react';
import './style.css'
import { ADD_ANSWER } from '../redux/action/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { answerReducer } from '../redux/reducer/reducer';
import { useNavigate } from 'react-router-dom';
import { UPDATE_ANSWER } from '../redux/action/action';


const Examination = () => {
    const dispacth = useDispatch()
    const navigator = useNavigate()


    const initialstate = {
        id: "",
        answervalue: ""
    }
    useEffect(() => {
        getdata()
    }, [])



    const [apidata, setApidata] = useState()
    const [rdata, setRdata] = useState()
    // console.log(rdata);

    const [answerid, setAnswerid] = useState(initialstate)
    console.log(answerid);


    const [count, setCount] = useState()
    const [disabled, setDisabled] = useState(false)
    const [cheacked, setCheacked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)


    const getdata = async () => {
        const data = await axios.get(`http://localhost:3005/Quizdata`)
        const arr = getRandomArr(data.data)
        const newarray = arr.map((data) => {
            const newdata = getRandomArr(data.option)
            data.option = newdata
            return data;
        })
        setCount(0)
        setApidata(newarray);
    }

    const getData1 = useSelector((state) => state.answerReducer.answer)
    // console.log(getData1);


    const getRandomArr = (data) => {
        const randomevalue = []
        const randomIndex = []
        for (let i = 0; i < data.length; i++) {
            const getRandom = getRandomIndex(data.length, randomIndex)
            const random = data[getRandom]
            randomIndex.push(getRandom)
            randomevalue.push(random)
        }
        return randomevalue
    }
    const getRandomIndex = (length, arr) => {
        const Unique = Math.floor(Math.random() * length)
        if (arr.includes(Unique)) {
            return getRandomIndex(length, arr)
        } else {
            return Unique
        }
    }

    const countq = () => {
        // console.log(getData1, '--->getData1');

        const answeri = getData1.find((data) => data.id == answerid.id)
        const answerv = getData1.find((data) => data.answervalue == answerid.answervalue)

        if (answeri) {
            if (answerv) {
            } else if (answerid.answervalue == "") {
                dispacth(ADD_ANSWER({ ...answerid, id: apidata[count].QuestionID, answervalue: "" }))
            }
            else {
                dispacth(UPDATE_ANSWER(answerid))
            }
        } else {
            dispacth(ADD_ANSWER(answerid))
        }


        if (count < apidata.length - 1) {
            setCount(count + 1)
            setDisabled(true)
        } else {
            navigator('/Result')
        }
    }



    const handelcorrectAnswer = (e) => {
        setAnswerid({ ...answerid, id: apidata[count].QuestionID, [e.target.name]: e.target.value })
    }
    const countQ = () => {
        dispacth(UPDATE_ANSWER(answerid))
        setCount(count - 1)
        if (count == 1) {
            setDisabled(false)
        }
    }

    useEffect(() => {
        priviousdata()
    }, [count])


    const priviousdata = () => {
        const qid = apidata == undefined ? "" : apidata[count].QuestionID
        const aid = getData1.find((data) => data.id === qid)
        if (aid) {
            setAnswerid(aid)
        } else {
            setAnswerid({id : qid, answervalue: ""})
        }
    }

    return (
        <div>
            <div className="container">
                <div className='bg-colore1 col-lg-6 col-md-12 col-sm-12'>
                    {
                        apidata == undefined ? console.log("Error") :

                            <div className='question col-lg-12 col-md-12 col-sm-12'>
                                <div>
                                    <h1>{count + 1} . {apidata[count].Question}</h1>  <br />
                                    <div>{apidata[count].option.map((data, index) =>
                                        <label className="check-lable" key={index}>
                                            <div className="check-lable-sub">
                                                <input checked={data.id == answerid?.answervalue ? true : false} type="radio" id="answervalue" name='answervalue' value={data.id} onChange={(e) => handelcorrectAnswer(e)} />
                                                <div className="lable-border">
                                                    <div className="lable-text">{data.optionvalue}</div>
                                                </div>
                                            </div>
                                        </label>)}
                                        {/* <div onClick={() => handelcorrectAnswer(data.id)} key={`index_${index}`} className="button">{data.optionvalue} <br /></div>)} */}
                                    </div>
                                </div>
                                {disabled ? <button onClick={countQ} className={"nxt-btn mt-5"}>Privius</button> : ""}
                                <button onClick={countq} className="nxt-btn mt-5">Save & Next</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Examination
