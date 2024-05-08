"use client"
import React from 'react'
import Countdown, { CountdownRendererFn } from 'react-countdown'


const endDate = new Date("2024-05-20");

const CountDown = () => {

  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is completed
      return <span>Countdown completed</span>;
    } else {
      // Render the countdown
      return (
        <span className='font-bold text-4xl text-yellow-600 '>
          {days} : {hours} :  {minutes} :  {seconds} 
        </span>
      );
    }
  };
  return (
    <>
    <div className='mb-4'>
           <Countdown className='font-bold text-4xl text-yellow-600 ' date={endDate} renderer={renderer}/>
    </div>
    </>
  )
}

export default CountDown