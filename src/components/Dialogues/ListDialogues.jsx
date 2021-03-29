
import d from './ListDialogues.module.css';
import ListItemFriends from './ListItemFriends';


let dialoguesData = [
    {id:1, name: 'Максим'},
    {id:2, name: 'Женя'},
    {id:3, name: 'Кирилл'},
    {id:4, name: 'Валя'},
    {id:5, name: 'Ксюша'}
]

let dialoguesElements = dialoguesData.map ( f => <ListItemFriends name={f.name} id={f.id}/> ) ;







const ListDialogues = (props) => {
    return (
        <div className={d.ListDialogues}>
                { dialoguesElements }
                
        </div>
    )
}

export default ListDialogues;