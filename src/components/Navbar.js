import React from 'react'
import './style.css'


const Navbar = () => {
    return (
        <>
            <div className="bg-colore">
                <nav>
                    <div className="container">
                        <div className="row ">
                            <div className="col">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Qestion">Add question</a></li>
                                    <li><a href="/Examination">Exam</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
