import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Result = () => {
    // console.log(props);
    const [apidata, setApidata] = useState([])
    // console.log(apidata, "--->apidata");
    const [score, setScore] = useState(0)
    const [wscore, setWscore] = useState(0)
    const navigatore = useNavigate()
    // const history = useHistory()


    const getdata = async () => {
        const data = await axios.get(`http://localhost:3005/Quizdata`)
        const alldata = data.data
        setApidata(data.data)
        resultdata(data.data)
        const data1 = alldata.filter((data) => data.id === getData1.id)
        // console.log(data1);
    }

    useEffect(() => {
        if (getData1 == "") {
            navigatore('/')
        } else {
            getdata()
        }
    }, [])


    const getData1 = useSelector((state) => state.answerReducer.answer)




    const resultdata = (data) => {
        console.log(data);
        console.log(getData1, '--->getData1');
        const newscore = []
        const Wrong = []
        for (let i = 0; i < data?.length; i++) {
            const answerId = getData1[i]?.answervalue

            const answervalue1 = data.find((data) => {
                if (data.Answer == answerId) {
                    return newscore.push(data)
                } else if (answerId == "") {
                    return Wrong.push(data)
                }
            })
        }
        setScore(newscore.length)
        setWscore(Wrong.length)
    }


    return (
        <div>

            <div className="completed">
                <div className="completed mt-5">
                    Completed
                </div>
                <h1 className="completed mt-3">
                    Your score : {score} / {apidata.length}
                </h1> 
                <div className="container mt-5 ">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 border">
                            <p>Right Answer : <b>{score}</b></p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 border">
                            <p>wrong Answer: <b>{apidata.length - score}</b></p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 border">
                            <p>Empty Answer: <b>{wscore}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
