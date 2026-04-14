 
import quizCompleteImg from '../assets/quiz-complete.png';
import questions from '../assets/questions.js';

export default function Results({ userAnswers }) {
     
    const skippedAnswers = userAnswers.filter(answer => answer === null).length;
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answers[0]).length;
    const wrongAnswers = userAnswers.filter((answer, index) => answer !== null && answer !== questions[index].answers[0]).length;
    
    const skippedPercentage = Math.round((skippedAnswers / questions.length) * 100);
    const correctPercentage = Math.round((correctAnswers / questions.length) * 100);
    const wrongPercentage = Math.round((wrongAnswers / questions.length) * 100);
    return (
        <main id="summary">
                <img src={quizCompleteImg} alt="Quiz Complete"></img>
                <h2>Quiz Over!</h2>
                <div id="summary-stats">
                    <p>
                        <span className="number">{skippedPercentage}%</span>
                        <span className="text">skipped</span>
                    </p>
                    <p>
                        <span className="number">{correctPercentage}%</span>
                        <span className="text">answered correctly</span>
                    </p>
                    <p>
                        <span className="number">{wrongPercentage}%</span>
                        <span className="text">answered incorrectly</span>
                    </p>
                </div>
                <ol>
                    {userAnswers.map((answer, index) =>{
                            let cssClass = "user-answer";
                            if(answer === null){
                                cssClass += " skipped";
                            } else if (answer === questions[index].answers[0]){
                                cssClass += " correct";
                            } else {
                                cssClass += " wrong";
                            }
                            return (
                                <li key={index}>
                                    <h3>{index + 1}</h3>
                                    <p className='question'>{questions[index].text}</p>
                                    <p className={cssClass}>{answer ?? "Skipped"}</p>
                                </li>
                            )
                        })
                    }
                   
                </ol>
        </main>
    )
}