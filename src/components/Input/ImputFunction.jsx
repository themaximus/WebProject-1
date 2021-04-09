import React from 'react';
import './ImputFunction.css';
import onAddPost from './postInputScript.js';



const ImputFunction = (props) => {

    

    return (
        <div>
            
        <div className='ImputFunction'>
            
            <h4 className='Enter' onClick= {onAddPost} onkeydown >Опубликовать</h4>
            <h4 className='Enter1'>Прикрепить</h4>
        </div>
        </div>
    )
}

export default ImputFunction;