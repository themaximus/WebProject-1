


import { NavLink } from 'react-router-dom';



const ListItemFriends = (props) => {
    return (
       <NavLink to={'/Dialogues/' + props.id}> {props.name}</NavLink>
    )
}

export default ListItemFriends;