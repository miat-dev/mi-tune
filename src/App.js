import React, { useState, useContext } from "react";
import "./index.css";
import "./App.css";
import Music from './Music/Music'
import Podcast from './Podcast/Podcast'
import Mitune from './Mitune/Mitune'
import { ModeContext } from './Helpers/useContext'
import reportWebVitals from "./reportWebVitals";
function App() {
    // const dispatch = (e) => {
    //     setState({ active_mode: e })
    // }
    const [state, dispatch] = useState(
        {
            active_mode: 'podcast_mode',
            tab: 'Home'
        }
    );
    return (
        <ModeContext.Provider value={{ state, dispatch }}>
            <Home />
        </ModeContext.Provider>
    );
}

export default App;

function Home() {
    const context = useContext(ModeContext);
    const active_mode = context.state.active_mode
    function handleMode(e) {
        const { name } = e.target;
        context.dispatch({ ...context.state, active_mode: name });
    }
    return (
        <div className='App'>
            <div className='btn'>
                <h1>mi Music</h1>
                <button name='music_mode'
                    onClick={handleMode}
                    className={active_mode === 'music_mode' ? 'activemode' : ''}
                >Music
                </button>
                <button name='podcast_mode'
                    onClick={handleMode}
                    className={active_mode === 'podcast_mode' ? 'activemode' : ''}
                >Podcast
                </button>
                <button name='mitune_mode'
                    onClick={handleMode}
                    className={active_mode === 'mitune_mode' ? 'activemode' : ''}
                >miTune
                </button>
            </div>
            <hr />
            {active_mode === 'music_mode' && <Music />}
            {active_mode === 'podcast_mode' && <Podcast />}
            {active_mode === 'mitune_mode' && <Mitune />}
        </div>
    );
}






function print(data) {
    console.log(data)
}

reportWebVitals();