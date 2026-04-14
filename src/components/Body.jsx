import ProgressBar from "./ProgressBar";
import questions from '../assets/questions.js';
import { useState, useCallback, useRef } from "react"; 
import Question from "./Question.jsx";
import Results from "./Results.jsx";

const timer = 5000

export default function Body() {
 
    const [userAnswers, setUserAnswers] = useState([]);

    const currentQuestion =  userAnswers.length;

    const isQuizOver = currentQuestion === questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(index) {
       
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, index]
        });

       
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

     
    if (isQuizOver) {
        return <Results userAnswers={userAnswers}/>;
    }
 
    return (
        <main id="quiz">

            <div id="question-overview">
                <Question 
                    key={currentQuestion}   
                    index={currentQuestion}                 
                    onSelectAnswer={handleSelectAnswer} 
                    onSkipAnswer={handleSkipAnswer} 
                />
            </div>
        </main>
    )
}