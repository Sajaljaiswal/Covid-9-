import React, { useEffect, useState } from 'react'

const Covidtrack = () => {

    const [data, setdata] = useState([]);
    const getcoviddata = async () => {
        const response = await fetch('https://data.covid19india.org/data.json');
        const newdata = await response.json();
        console.log(newdata.statewise[0])
        setdata(newdata.statewise[0])
    }


    useEffect(() => {
        getcoviddata();
    }, [])

    return (
        <div className='container my-5 '>
            <div className="card text-center">
                <div className="card-body ">
                    <h5 className="card-title ">COVID-19 Coronavirus disease</h5>
                    <p className="card-text">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</p>
                    <a href="https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-how-is-it-transmitted" target="_blank">Learn More on who.int</a>
                </div>
            </div>

            <section className='my-5'>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card text-center text-bg-dark">
                            <div className="card-body">
                                <h5 className="card-title mt-4">COUNTRY</h5>
                                <a href="#" className="btn btn-primary mb-4">INDIA</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card text-center text-bg-dark">
                            <div className="card-body">

                                <h5 className="card-title mt-4">TOTAL RECOVERESD</h5>

                                <a href="#" className="btn btn-warning mb-4">{data.recovered}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card text-center text-bg-dark ">
                            <div className="card-body ">
                                <h5 className="card-title mt-4 ">TOTAL CONFIRMED</h5>

                                <a href="#" className="btn btn-danger mb-4">{data.confirmed}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card text-center text-bg-dark my-3">
                            <div className="card-body">
                                <h5 className="card-title mt-4">TOTAL DEATH</h5>

                                <a href="#" className="btn btn-danger mb-4">{data.deaths}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card text-center text-bg-dark my-3">
                            <div className="card-body">
                                <h5 className="card-title mt-4">TOTAL ACTIVE</h5>

                                <a href="#" className="btn btn-success mb-4">{data.active}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card text-center text-bg-dark my-3">
                            <div className="card-body">
                                <h5 className="card-title mt-4">MIGRATED OTHERS</h5>

                                <a href="#" className="btn btn-primary mb-4">{data.migratedother}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Covidtrack
