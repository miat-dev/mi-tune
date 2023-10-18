import React, { useState } from "react";
import { FormContext } from '../../../Helpers/useContext'
import QuestionBlock from "./QuestionBlock";
const initialState =JSON.parse(localStorage.getItem('state'));

function AimForm() {
    const [state, dispatch] = useState(initialState);
    const handleAddNewQ = (e) => {
        let q = state.Q;
        let quesObj = { id: 'new id', ques: "",isMan:'0', q_type: "txt" };
        q.splice(0, 0, quesObj);
        dispatch({
            ...state,
            //noQues: state.noQues + 1,
            Q: q
        })
    }
    const handleDeploy=()=>{
        localStorage.setItem('state',JSON.stringify(state));
    }
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            <div className='homepage'>
                <h2>Create Aim Form</h2>

                <div>
                    Total Number of Question Created {state.Q.length}.<br />
                    <button className='btn_trans' name={0} onClick={handleAddNewQ} >+ New</button>
                    {state.Q.map((q, i) => {
                        return (
                            <QuestionBlock key={i} data={{ q, i }} />
                        )
                    })
                    }
                </div>
                <button
                    className='btn_trans btn_deploy'
                    onClick={handleDeploy}
                >Deploy Form
                </button>

            </div>
        </FormContext.Provider>
    );
}
export default AimForm;