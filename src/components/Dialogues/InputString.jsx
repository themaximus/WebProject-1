import { onMessageChange } from './DialoguesInputScript';
import newMessageElement from './DialoguesInputScript2';
import z from './InputString.module.css';


const InputString = () => {
    return (
        <div className={z.InputStringBlock }>
              <input onChange={onMessageChange} ref={newMessageElement} className={z.InputString}>
                  
              </input>
        </div>
    )
}

export default InputString;