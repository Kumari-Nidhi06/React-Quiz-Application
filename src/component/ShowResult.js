import React from 'react';
import Confetti from "react-confetti";

const ShowResult = (props) => {
  const { score, totalScore, tryAgain } = props;
  return (
    <>
    {/* {score === totalScore && <Confetti />} */}
    <div className='show-score'>
         Your Score: {props.score}<br />
         Total Score: {props.totalScore}
    </div>
     <button id="next-button" onClick={props.tryAgain}>Try Again</button>
     </>
  )
}

export default ShowResult
