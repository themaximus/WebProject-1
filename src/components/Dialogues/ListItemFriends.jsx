


import { NavLink } from 'react-router-dom';
import I from './ListItemFriends.module.css';


const ListItemFriends = (props) => {
    return (
       <NavLink to={'/Dialogues/' + props.id}> {props.name}</NavLink>
    )
}

export default ListItemFriends;