
import Header from '../header/header';
import styles from './Dialogues.module.css';
import MyDialogues from './MyDialogues';



const Dialogues = (props) => {

    

   return (
        <div>
            <div className={styles.DialoguesHeader}>  
            <Header />
            <MyDialogues messageData={ props.messageData } dialoguesData={props.dialoguesData} />
            </div>
            
        </div>
    )
}

export default Dialogues;
