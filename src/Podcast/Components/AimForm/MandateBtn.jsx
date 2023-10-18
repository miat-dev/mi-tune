import './MandateBtn.css'
import { useContext,useEffect } from 'react'

import { FormContext } from '../../../Helpers/useContext'
import { useState } from 'react';

export default function MandateBtn(props) {
    const context = useContext(FormContext);
    const [isMan, setIsMan] = useState(props.data.q.isMan);
     useEffect(() =>{
        //console.log("kunda");
        setIsMan(context.state.Q[props.data.i].isMan);
     })
    //console.log(props.data.i, isMan,context.state.Q[props.data.i].isMan);
    const handleMandate = (e) => {
        // context.state.Q[name].ques = value;
        let { value } = e.target;
        value = (value === '1') ? '0' : '1';
        //console.log("checked",value)
        setIsMan(value);
        let ind = props.data.i;
        context.state.Q[ind].isMan = value;
        context.dispatch({
            ...context.state,
            // Q:[...context.state.Q] destructuring use to re render data

        })
    }
    return (
        <div>
            Mandatory
            <label className="switch">
                <input
                    className="switch-input"
                    onClick={handleMandate}
                    value={isMan}
                    checked={isMan === '1'}
                    readOnly
                    type="checkbox"
                />
                <span className="switch-label"></span>
                <span className="switch-handle"></span>
            </label>
        </div>

    )
}