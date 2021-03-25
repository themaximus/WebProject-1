import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
    <div className={s.logo}>
    <img className={s.logo_img} src='https://i.postimg.cc/fyHSKBSn/logo.png' />

      <div className={s.header_item}>
        <input className= {s.input} ></input>
        <div className={s.mypage_item}><NavLink to='/content' activeClassName={s.activeLink}>Моя страница</NavLink></div>
        <div className={s.mypage_item}><a>Cообщества</a></div>
        <div className={s.mypage_item}><NavLink to='/Dialogues' activeClassName={s.activeLink}>Мои сообщения</NavLink></div>
        <div className={s.mypage_item}><a>Медиатека</a></div>
        <div className={s.mypage_item}><a>Настройки</a></div>
      </div>
      

    </div>
    </header>
    )
}

export default  Header;