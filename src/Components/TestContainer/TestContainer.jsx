import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import "./TestContainer.css";

const TestContainer = ({
    selectedParagraph, 
    words, 
    characters, 
    wpm, 
    timeRemaining, 
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {

    return ( 
        <div className="test-container">
            {/* try again */}
            {
                timeRemaining > 0 ? (
                    <div 
                    data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer 
                            selectedParagraph={selectedParagraph}
                            timeRemaining={timeRemaining} 
                            timerStarted={timerStarted} 
                            words={words} 
                            characters={characters} 
                            wpm={wpm}
                            testInfo={testInfo} 
                            onInputChange={onInputChange}
                            />
                    </div>
                ) : 
                (
                    <div className="try-again-cont">
                        <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                    </div> 
                )}
           
            
        </div>
     );
}
 
export default TestContainer;