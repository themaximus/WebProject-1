


import I from './InputEnter.module.css';
import onAddMessage from './DialoguesInputScript'




const InputEnter = () => {
    return (
        <div className={I.InputEnter}>
              <img src='https://i.ibb.co/C8RMY9z/132.png' onClick={ onAddMessage } />
        </div>
    )
}

export default InputEnter;