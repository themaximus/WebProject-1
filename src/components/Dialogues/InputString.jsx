import newMessageElement from './DialoguesInputScript2';
import z from './InputString.module.css';


const InputString = () => {
    return (
        <div className={z.InputStringBlock }>
              <input  ref={newMessageElement} className={z.InputString} placeholder='Ввод сообщения' type='text' >
              
              </input>
        </div>
    )
}

export default InputString;

