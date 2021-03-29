
import ContentDialogues from './ContentDialogues';
import InputDialogues from './InputDialogues';
import ListDialogues from './ListDialogues';
import s from './MyDialogues.module.css';



const MyDialogues = () => {
    return (
        <div className={s.MyDialogues}>
            <ListDialogues />
            <ContentDialogues />
            <InputDialogues />
        </div>
    )
}

export default MyDialogues;