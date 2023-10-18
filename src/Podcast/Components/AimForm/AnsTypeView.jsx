import { useContext } from 'react';
import { FormContext } from '../../../Helpers/useContext'

function AnsTypeView(props) {
    const context = useContext(FormContext);
    const handleChange = (e, op_ind) => {
        const { name, value } = e.target;
        context.state.Q[name].options[op_ind] = value;
        //console.log(name, op_ind);
        context.dispatch({
            ...context.state,
        })
    }

    const handleAddNewOption = (e) => {
        const { name } = e.target;
        context.state.Q[name].options.push("");
        context.dispatch({
            ...context.state,
        })
    }
    const handleRemoveOption = (qn_ind, op_ind) => {
        //console.log(qn_ind,op_ind);
        context.state.Q[qn_ind].options.splice(op_ind, 1);
        context.dispatch({
            ...context.state,
        })
    }
    return (
        <>
            <div>
                {props.data.q.q_type === 'txt' &&
                    <input placeholder="Answer goes here." type="text" />
                }
                {props.data.q.q_type === 'checkbox' &&
                    <>
                        {props.data.q.options.map((val, i) => {
                            return (
                                <label>
                                    <input name={props.data.i}
                                        type="checkbox"
                                        key={i}
                                        value={val}
                                    />
                                    <textarea name={props.data.i}
                                        value={val}
                                        placeholder='Enter option value'
                                        onChange={(e) => handleChange(e, i)} />
                                    <button className="btn_trans btn_remove_option" onClick={() => handleRemoveOption(props.data.i, i)}>X</button>
                                </label>)
                        })
                        }
                        <button name={props.data.i} className="btn_trans btn_add_option" onClick={handleAddNewOption}>Add a New Option</button>
                    </>
                }
                {props.data.q.q_type === 'radio' &&
                    <>
                        {props.data.q.options.map((val, i) => {
                            return (
                                <label>
                                    <input name={"OnlyOneSelect" + props.data.i}
                                        type="radio"
                                        key={i}
                                        value={val}
                                    />
                                    <textarea name={props.data.i}
                                        placeholder='Enter option value'
                                        value={val}
                                        onChange={(e) => handleChange(e, i)} />
                                    <button className="btn_trans btn_remove_option" onClick={() => handleRemoveOption(props.data.i, i)}>X</button>
                                </label>)
                        })
                        }
                        <button name={props.data.i} className="btn_trans btn_add_option" onClick={handleAddNewOption}>Add a New Option</button>
                    </>
                }
            </div>
        </>
    )
}

export default AnsTypeView;
