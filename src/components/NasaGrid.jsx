import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NasaGrid(){
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=FhTSqyczwbm7Mscx4U6PJLD00cxsZ9ItIPow4p2v")
            .then(response => {
                console.log(response);
                // setNasaData(response.data);
            })
            .catch(error => console.log("Error",error));
    },[]);

    return (
        <div>
            <p>blah blah</p>
        </div>
    )
}