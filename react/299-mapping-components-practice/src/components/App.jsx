import emojipedia from "../emojipedia";

function App(){
    return(
        <div className="container">
            <h1>
                <span>emojipedia</span>
            </h1>jj

            <dl className="dictionary">
                <div className="term one">
                    <dt>
                        <span className="emoji" role="img" aria-label="Tense Biceps">
                            💪
                        </span>
                        <span>Tense Biceps</span>
                    </dt>
                    <dd>
                        “You can do that!” or “I feel strong!” Arm with tense biceps. 
                        Also used in connection with doing sports, e.g. at the gym.
                    </dd>                    
                </div>

                <div className="term two">
                    
                    <dt>
                        <span className="emoji" role="img" aria-label="Person With Folded Hands">
                            🙏
                        </span>
                        <span>Person With Folded Hands</span>
                    </dt>
                    <dd>
                        Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. 
                        Is also used as a “high five” or to say thank you.
                    </dd>
                </div>
                
                <div className="term three">
                    <dt>
                        <span className="emoji" role="img" aria-label="Rolling On The Floor, Laughing">
                            🤣
                        </span>
                        <span>Rolling On The Floor, Laughing</span>
                    </dt>
                    <dd>
                        This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. 
                        The emoji version of “rofl“. Stands for „rolling on the floor, laughing“
                    </dd>
                </div>
            </dl>kj
        </div>

        
    );
}

export default App;