import { useState } from 'react';
import { useContext } from 'react'
import { FormContext } from '../../../Helpers/useContext'
import AnsBlock from './AnsBlock'
import MandateBtn from './MandateBtn'
function QuestionBlock(props) {
    // console.log(props.data)
    //const [ques, setQues] = useState(props.data.q.ques);

    const context = useContext(FormContext);
    const handleAddNewQ = (e) => {
        //const { name } = e.target;
        let q = context.state.Q;
        let quesObj = { id: 'new id', ques: "",isMan:'0', q_type: "txt" };
        q.splice(props.data.i + 1, 0, quesObj);
        context.dispatch({
            ...context.state,
            //noQues: context.state.noQues + 1,
            Q: q
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        context.state.Q[name].ques = value;
        //console.log(name);
        context.dispatch({
            ...context.state,
            // Q:[...context.state.Q] destructuring use to re render data

        })
    }
    const handleRemoveQuestion = (e) => {
        const { name } = e.target;
        context.state.Q.splice(name, 1);
        console.log(context.state.Q)
        context.dispatch({
            ...context.state,
        })
    }
    //console.log(props.data);
    //const [qData,setQData]=useState(props.data);
    return (
        <>
            <div className='new_question'>
                <div className='q_index'>
                    <span>Q{props.data.i + 1}.</span>
                    <button
                        name={props.data.i}
                        className="btn_trans btn_remove_question"
                        onClick={handleRemoveQuestion}
                    >X
                    </button>
                </div>

                <textarea
                    name={props.data.i}
                    value={context.state.Q[props.data.i].ques}
                    placeholder='Enter Your Question Here.'
                    onChange={handleChange}>
                </textarea>
                <MandateBtn data={props.data}/>
                {/* {context.state.Q[props.data.i].ques} */}
                <AnsBlock data={props.data} />
            </div>
            <button className='btn_trans' name={props.data.i + 1} onClick={handleAddNewQ} >+ New</button>
        </>
    )
}
export default QuestionBlock;