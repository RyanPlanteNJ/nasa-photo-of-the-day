import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaExplain from './NasaExplain';
import NasaTitle from './NasaTitle';
import NasaImage from '../NasaImage/NasaImage';
import Date from "./Date"


export default function NasaContainer() {
    const [nasaData, setNasaData] = useState('');
    const [date, setDate] = useState('');

    const dateSubmit = e => {
        e.preventDefault();
        setDate(document.querySelector("#date").value);
    };
    
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=FhTSqyczwbm7Mscx4U6PJLD00cxsZ9ItIPow4p2v&date=${date}`) //use &${props.data}
            .then(response => {
                // console.log(response.data);
                setNasaData(response.data);
            });
        
    },[date]);

    return (
       <div className = "nasaContainer">
        <Date dateSubmit={dateSubmit}/>
        <NasaTitle title={nasaData.title} />
        <NasaImage image ={nasaData} />
        <NasaExplain explain={nasaData.explanation} />
        </div>
    )
}