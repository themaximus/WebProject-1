
import App from '../../App';
import ContentDialogues from './ContentDialogues';
import InputDialogues from './InputDialogues';
import ListDialogues from './ListDialogues';
import s from './MyDialogues.module.css';



const MyDialogues = (props) => {
    
    
    

    return (
        <div className={s.MyDialogues}>
            <ListDialogues />
            <ContentDialogues messageData={ props.messageData } />
            <InputDialogues />
        </div>
    )
}

export default MyDialogues;