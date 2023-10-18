import { useState } from 'react';
import './css/HomePage.css'
import { useEffect } from 'react';
const initialState = JSON.parse(localStorage.getItem('state'));
function ProfilePage() {
    const [state, setState] = useState(initialState);
    useEffect(() => {
        try {
            setState(JSON.parse(localStorage.getItem('state')));
        } catch (error) {

        }
    }, [])
    console.log(state)
    return (
        <div className="homepage">
            <h2>View Aim Form</h2>
            Total Number of Question {state.Q.length}.<br />
            {state.Q.map((q, ind) => {
                return (
                    <div className='new_question form_disp'>  Q{ind + 1}. {q.ques}
                        {q.isMan === '1' && <span>*</span>}
                        {q.q_type === 'txt' && <> <br />
                            <input placeholder="Answer goes here." type="text" />
                        </>
                        }
                        {q.q_type !== 'txt' &&
                            <>
                                {q.options.map((val, i) => {
                                    return (
                                        <label>
                                            <input name={ind}
                                                type={q.q_type}
                                                key={i}
                                                value={val}
                                            />{val}
                                        </label>)
                                })
                                }
                            </>
                        }
                    </div>
                )
            })}
        </div>
    )
}
export default ProfilePage;