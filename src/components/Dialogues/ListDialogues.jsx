
import d from './ListDialogues.module.css';
import ListItemFriends from './ListItemFriends';











const ListDialogues = (props) => {

    let dialoguesElements = props.dialoguesData.map ( f => <ListItemFriends name={f.name} id={f.id}/> ) ;

    return (
        <div className={d.ListDialogues}>
                { dialoguesElements }
                
        </div>
    )
}

export default ListDialogues;