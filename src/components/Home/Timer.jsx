import React, { useState, useEffect, useRef} from 'react'

const Timer = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('December 25, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).toString().padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

      

      if (distance < 0) {
        //timer stop
        clearInterval(interval.current); 
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);

      }
    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  })
  
  return (
    <div className='flex gap-2 shrink '>
          <div>
            <p className='font-medium'>days</p>
            <p className='font-bold text-3xl  text-center'>{timerDays}</p>
          </div>
          <div className='flex items-end '>
            <span className='leading-10 text-2xl font-bold text-red-500'>:</span>
          </div>
          <div>
            <p className='font-medium'>Hours</p>
            <p className='font-bold text-3xl text-center'>{timerHours}</p>
          </div>
          <div className='flex items-end '>
            <span className='leading-10 text-2xl font-bold text-red-500'>:</span>
          </div>
          <div>
            <p className='font-medium'>Minutes</p>
            <p className='font-bold text-3xl text-center'>{timerMinutes}</p>
          </div>
          <div className='flex items-end '>
            <span className='leading-10 text-2xl font-bold text-red-500'>:</span>
          </div>
          <div>
            <p className='font-medium'>Seconds</p>
            <p className='font-bold text-3xl text-center'>
              {timerSeconds}
            </p>
          </div>
        </div>
  )
}

export default Timer