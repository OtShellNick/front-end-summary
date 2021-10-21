import React, { useState } from 'react';
import moment from "moment";

export const Time = () => {
    const [time, upTime] = useState(moment().format("dddd, MMMM Do YYYY, k:mm:ss"));

    setInterval(() => {
        upTime(moment().format("dddd, MMMM Do YYYY, k:mm:ss"))
    }, 1000);

    return <p className='lead'>{time}</p>
}