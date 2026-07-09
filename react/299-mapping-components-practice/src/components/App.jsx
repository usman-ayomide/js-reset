import emojipedia from "../emojipedia";
import Entry from "../Entry";

function App(){
    return(
        <div className="container">
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(emoji => {
                return <Entry 
                    key={emoji.id}
                    emoji={emoji.emoji}
                    name={emoji.name}
                    meaning={emoji.meaning}
                    />
                })}
            </dl>
        </div>
    );
}

export default App;