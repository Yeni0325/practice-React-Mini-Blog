import styles from '../style/css/Header.module.css';
import logo from  '../assets/google.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
  return(
    <header className={`${styles.navbar} ${styles.body}`}>
      <div className='navbar__logo'>
        <img src={logo} className={styles.logo} />
      </div>
      <ul className={`${styles.navbar__menu} ${styles.navbar__menu__left}`}>
        <li className={styles.navbar__menuLi}><a href='#' className={styles.a}>꿀팁</a></li>
        <li className={styles.navbar__menuLi}><a href='#' className={styles.a}>인기꿀팁</a></li>
        <li className={styles.navbar__menuLi}><a href='#' className={styles.a}>커뮤니티</a></li>
        <li className={styles.navbar__menuLi}><a href='#' className={styles.a}>자취로드맵</a></li>
      </ul>
      <div className={styles.navbar__search}>
        <input className={styles.navbar__search__input} placeholder='검색어를 입력해주세요.'/>
        <span className={styles.navbar__search__icon}><FontAwesomeIcon icon={faSearch} /></span>
      </div>
      <ul className={`${styles.navbar__menu} ${styles.navbar__menu__right}`}>
        <li className={styles.navbar__menuLi}><a href='#' className={styles.a}>로그인</a></li>
        <li className={styles.navbar__menuLi}><a href='#' className={styles.a}>회원가입</a></li>  
      </ul>
    </header>
  );
}

