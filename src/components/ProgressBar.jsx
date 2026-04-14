import { use } from "react";
import { useState, useEffect,  } from "react";
//import { QuizContext } from '../context/QuizContext.jsx';

export default function ProgressBar({ timer, onTimeout, mode  }) {
    const [remainingTime, setRemainingTime] = useState(timer);
     
    useEffect(() => { 
        const timeOut = setTimeout(onTimeout, timer);
        return () => {
            clearTimeout(timeOut); 
        }
    }, [onTimeout, timer]);
    

    useEffect(() => {
        const interval = setInterval(() => { 
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);

        return () => {clearInterval(interval)};
    }, []);

    return (
        <progress id="question-time" max={timer} value={remainingTime} className={mode}/>
    )
}
