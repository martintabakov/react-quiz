import ProgressBar from "./ProgressBar"
import Answers from "./Answers"
import { useState } from "react"
import questions from '../assets/questions.js';

export default function Question({ index, onSelectAnswer, onSkipAnswer}) {

    const [answer, setAsnwer] = useState({
        selectedAnswer: "",
        isCorrect: null
    })
    
    let timer = 10000;

    if(answer.selectedAnswer ){
        timer = 1000;
    }

    if(answer.isCorrect !== null){
        timer = 2000;
    }

    function handleSelectAnswer(answer) {

        setAsnwer({

            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            const isCorrect = answer === questions[index].answers[0];
            setAsnwer({
                selectedAnswer: answer,
                isCorrect: isCorrect
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000)
        }, 1000)
    }

    let answerState = "";
    if ( answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }
    return (
        <div id="question">
            <ProgressBar 
                key={timer} 
                timer={timer} 
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
                mode={answerState} 
            />
            <h2>{questions[index].text}</h2>
            <Answers
                answers={questions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}