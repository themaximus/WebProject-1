



import InputAddContent from './InputAddContent';
import I from './InputDialogues.module.css';
import InputEnter from './InputEnter';
import InputSmile from './InputSmile';
import InputString from './InputString';

const InputDialogues = () => {
    return (
        <div className={I.InputDialogues}>
              <InputString />
              <InputEnter />
              <InputAddContent />
              <InputSmile />
        </div>
    )
}

export default InputDialogues;