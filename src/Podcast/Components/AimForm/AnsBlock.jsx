import {useState,useContext} from 'react'
import AnsTypeView from'./AnsTypeView'
import { FormContext } from '../../../Helpers/useContext'

function AnsBlock(props) {
    const [field, setField] = useState(false);
    return (
        <>
            <AnsTypeView data={props.data} />
            <div className='div_ans_types'
                onMouseLeave={() => setField(false)}
                onMouseEnter={() => setField(true)}
            >
                <button className='btn_trans'>
                    Change Answer type
                </button>
                {field &&
                    <ChangeAnsType operation={{ i: props.data.i, setField }} />
                }

            </div>
        </>
    )
}

export default AnsBlock;

function ChangeAnsType(props) {
    //console.log(props.i)
    const context = useContext(FormContext);
    const handleChangeFieldType = (e) => {
        const { name } = e.target;
        const cntxt = context.state.Q[props.operation.i]
        props.operation.setField(false);
        if (name == 'txt') {
            cntxt.q_type = 'txt';
            cntxt.options = null;
        }
        else if (name == 'radio') {
            if (cntxt.q_type === 'txt')
                cntxt.options = [""];
            cntxt.q_type = 'radio';
        }
        else if (name == 'checkbox') {
            if (cntxt.q_type === 'txt')
                cntxt.options = [""];
            cntxt.q_type = 'checkbox';
        }
    }
    return (
        <div className='btn_ans_types'>
            <button className='btn_trans' name='radio' onClick={handleChangeFieldType}>Radio Button</button>
            <button className='btn_trans' name='checkbox' onClick={handleChangeFieldType}>Check Box</button>
            <button className='btn_trans' name='txt' onClick={handleChangeFieldType}>Text Field</button>
        </div>
    )
}