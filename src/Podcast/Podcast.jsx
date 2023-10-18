import './Podcast.css'
import Sidebar from './Components/Sidebar'
import HomePage from './Components/HomePage'
import ProfilePage from './Components/ProfilePage'
import { useState, useContext } from 'react'
import { ModeContext } from '../Helpers/useContext'
import { rowData } from "../Helpers/SidebarData";
function Podcast() {
    // const dispatch = (e) => {
    //     setState({ activate: e })
    // }
    // const [state, setState] = useState(
    //     {
    //         activate: 'Home'
    //     }
    // );
    const context = useContext(ModeContext);
    // const handleNav = tab => {
    // 	context.dispatch({...context.state,tab:tab});
    // 	//return console.log(activate)
    // }


    return (

        // <SidebarContext.Provider value={{ state, dispatch }} >
        <div className="podcast_body">
            <Sidebar />
            {
                context.state.tab === 'Home' &&
                <HomePage />
            }
            {
                context.state.tab === 'Profile' &&
                <ProfilePage />
            }
            {
                rowData.map((rw, i) => {
                    return (<>

                        {
                            context.state.tab === rw.title 
                            && rw.title != 'Home' 
                            && rw.title != 'Profile'  
                            &&
                            <div style={{ color: '#23a', fontSize: '2rem' }}>
                                {rw.title} {" "}
                                Md Ishtiyaque
                            </div>
                        }
                    </>
                    )
                })
            }

        </div>
        // </SidebarContext.Provider>
    );
}
export default Podcast;