import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaExplain from './NasaExplain';
import NasaTitle from './NasaTitle';
import NasaImage from '../NasaImage/NasaImage';


export default function NasaContainer() {
    const [nasaData, setNasaData] = useState('');

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=FhTSqyczwbm7Mscx4U6PJLD00cxsZ9ItIPow4p2v')
            .then(response => {
                console.log(response.data);
                setNasaData(response.data);
            });
        
    },[]);

    return (
       <div className = "nasaContainer">
            <NasaTitle title={nasaData.title} />
            <NasaImage image ={nasaData} />
            <NasaExplain explain={nasaData.explanation} />
        </div>
    )
}