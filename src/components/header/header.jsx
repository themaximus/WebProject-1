import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <header className='header'>
    <div className='logo'>
      <img className='logo-img' src='https://i.postimg.cc/fyHSKBSn/logo.png' />

      <div className='header-item'>
        <input className= "input" ></input>
        <div className='mypage-item'><NavLink to='/content'>Моя страница</NavLink></div>
        <div className='community-item'><h3>Cообщества</h3></div>
        <div className='mymassage-item'><NavLink to='/Dialogues'>Мои сообщения</NavLink></div>
        <div className='media-item'><h3>Медиатека</h3></div>
      </div>

    </div>
    </header>
    )
}

export default  Header;